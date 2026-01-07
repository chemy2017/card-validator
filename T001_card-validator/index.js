/**
 * Card Validator Core
 * A data validation tool for Trading Card Games
 *
 * @version 1.0.0
 * @license MIT
 */

class CardValidator {
  constructor(config = {}) {
    this.config = {
      strictMode: false,
      reportFormat: 'console',
      rules: {
        elementConsistency: true,
        statRanges: true,
        abilityReferences: true,
        duplicateCheck: true,
        costBalance: true,
        ...config.rules
      },
      statRanges: {
        cost: { min: 1, max: 10 },
        atk: { min: 0, max: 10 },
        def: { min: 0, max: 10 },
        hp: { min: 1, max: 20 },
        ...config.statRanges
      },
      elementMappings: config.elementMappings || {},
      ...config
    };

    this.customRules = [];
  }

  /**
   * Run all enabled validations
   * @param {Array} cards - Array of card objects
   * @returns {Array} Validation results
   */
  validate(cards) {
    const results = [];

    if (this.config.rules.duplicateCheck) {
      results.push(...this.findDuplicates(cards));
    }

    if (this.config.rules.statRanges) {
      results.push(...this.validateStats(cards));
    }

    if (this.config.rules.elementConsistency) {
      results.push(...this.validateElement(cards));
    }

    if (this.config.rules.costBalance) {
      results.push(...this.analyzeCostBalance(cards));
    }

    // Run custom rules
    for (const card of cards) {
      for (const rule of this.customRules) {
        const result = rule.validator(card);
        if (result) {
          results.push(result);
        }
      }
    }

    return results;
  }

  /**
   * Check for duplicate card IDs or names
   * @param {Array} cards
   * @returns {Array} Validation results
   */
  findDuplicates(cards) {
    const results = [];
    const seenIds = new Map();
    const seenNames = new Map();

    for (const card of cards) {
      // Check duplicate IDs
      if (seenIds.has(card.id)) {
        results.push({
          cardId: card.id,
          cardName: card.name,
          rule: 'duplicateCheck',
          severity: 'error',
          message: `Duplicate card ID found: ${card.id}`,
          suggestion: 'Assign unique IDs to all cards'
        });
      } else {
        seenIds.set(card.id, card);
      }

      // Check duplicate names
      if (seenNames.has(card.name)) {
        results.push({
          cardId: card.id,
          cardName: card.name,
          rule: 'duplicateCheck',
          severity: 'warning',
          message: `Duplicate card name found: ${card.name}`,
          suggestion: 'Consider using unique names for clarity'
        });
      } else {
        seenNames.set(card.name, card);
      }
    }

    return results;
  }

  /**
   * Validate stat ranges
   * @param {Array} cards
   * @returns {Array} Validation results
   */
  validateStats(cards) {
    const results = [];
    const ranges = this.config.statRanges;

    for (const card of cards) {
      for (const [stat, range] of Object.entries(ranges)) {
        const value = card[stat];

        if (value === undefined || value === null) continue;

        if (value < range.min) {
          results.push({
            cardId: card.id,
            cardName: card.name,
            rule: 'statRanges',
            severity: 'error',
            message: `${stat} (${value}) is below minimum (${range.min})`,
            suggestion: `Increase ${stat} to at least ${range.min}`
          });
        }

        if (value > range.max) {
          results.push({
            cardId: card.id,
            cardName: card.name,
            rule: 'statRanges',
            severity: 'error',
            message: `${stat} (${value}) exceeds maximum (${range.max})`,
            suggestion: `Reduce ${stat} to at most ${range.max}`
          });
        }
      }
    }

    return results;
  }

  /**
   * Check element consistency based on name/theme
   * @param {Array} cards
   * @returns {Array} Validation results
   */
  validateElement(cards) {
    const results = [];
    const mappings = this.config.elementMappings;

    for (const card of cards) {
      const nameLower = (card.name || '').toLowerCase();

      for (const [element, keywords] of Object.entries(mappings)) {
        for (const keyword of keywords) {
          if (nameLower.includes(keyword.toLowerCase())) {
            if (card.element && card.element !== element) {
              results.push({
                cardId: card.id,
                cardName: card.name,
                rule: 'elementConsistency',
                severity: 'warning',
                message: `Element "${card.element}" may not match theme (contains "${keyword}")`,
                suggestion: `Consider changing element to "${element}"`
              });
            }
            break;
          }
        }
      }
    }

    return results;
  }

  /**
   * Analyze cost-to-stats balance
   * @param {Array} cards
   * @returns {Array} Analysis results
   */
  analyzeCostBalance(cards) {
    const results = [];

    for (const card of cards) {
      if (card.kind !== 'UNIT') continue;

      const cost = card.cost || 0;
      const totalStats = (card.atk || 0) + (card.def || 0) + (card.hp || 0);

      // Simple heuristic: total stats should roughly equal cost * 2-3
      const expectedMin = cost * 2;
      const expectedMax = cost * 4;

      if (totalStats > expectedMax) {
        results.push({
          cardId: card.id,
          cardName: card.name,
          rule: 'costBalance',
          severity: 'warning',
          message: `May be undercosted: ${totalStats} total stats for cost ${cost}`,
          suggestion: `Consider increasing cost to ${Math.ceil(totalStats / 3)}`
        });
      }

      if (totalStats < expectedMin && cost > 1) {
        results.push({
          cardId: card.id,
          cardName: card.name,
          rule: 'costBalance',
          severity: 'info',
          message: `May be overcosted: ${totalStats} total stats for cost ${cost}`,
          suggestion: `Consider decreasing cost or adding abilities`
        });
      }
    }

    return results;
  }

  /**
   * Validate ability references
   * @param {Array} cards
   * @param {Array} abilities - Array of valid ability objects
   * @returns {Array} Validation results
   */
  validateAbilities(cards, abilities) {
    const results = [];
    const abilityIds = new Set(abilities.map(a => a.id));

    for (const card of cards) {
      if (card.abilityId && !abilityIds.has(card.abilityId)) {
        results.push({
          cardId: card.id,
          cardName: card.name,
          rule: 'abilityReferences',
          severity: 'error',
          message: `Unknown ability ID: ${card.abilityId}`,
          suggestion: 'Check ability ID exists in ability master data'
        });
      }
    }

    return results;
  }

  /**
   * Add a custom validation rule
   * @param {string} name - Rule name
   * @param {Function} validator - Validation function
   */
  addRule(name, validator) {
    this.customRules.push({ name, validator });
  }

  /**
   * Output validation results
   * @param {Array} results
   */
  report(results) {
    if (this.config.reportFormat === 'json') {
      console.log(JSON.stringify(results, null, 2));
      return;
    }

    console.log('\n=== Card Validator Report ===\n');

    const errors = results.filter(r => r.severity === 'error');
    const warnings = results.filter(r => r.severity === 'warning');
    const infos = results.filter(r => r.severity === 'info');

    for (const result of results) {
      const icon = result.severity === 'error' ? '[ERROR]' :
                   result.severity === 'warning' ? '[WARNING]' : '[INFO]';

      console.log(`${icon} Card ${result.cardId} "${result.cardName}"`);
      console.log(`  Rule: ${result.rule}`);
      console.log(`  Issue: ${result.message}`);
      if (result.suggestion) {
        console.log(`  Suggestion: ${result.suggestion}`);
      }
      console.log('');
    }

    console.log(`Summary: ${errors.length} errors, ${warnings.length} warnings, ${infos.length} info\n`);
  }

  /**
   * Export results to CSV format
   * @param {Array} results
   * @returns {string} CSV string
   */
  toCSV(results) {
    const headers = ['cardId', 'cardName', 'rule', 'severity', 'message', 'suggestion'];
    const rows = results.map(r =>
      headers.map(h => `"${(r[h] || '').toString().replace(/"/g, '""')}"`).join(',')
    );
    return [headers.join(','), ...rows].join('\n');
  }
}

// Export for both CommonJS and ES modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CardValidator };
}

if (typeof window !== 'undefined') {
  window.CardValidator = CardValidator;
}