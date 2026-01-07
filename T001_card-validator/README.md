# Card Validator Core

**Version**: 1.0.0
**License**: MIT
**Price**: Free (Open Source)

---

## Overview

Card Validator is a data validation tool for Trading Card Games (TCGs). It helps game designers ensure data consistency and catch common errors early in development.

## Features

- **Element Consistency Check**: Validates that card elements match thematic expectations
- **Stat Range Validation**: Ensures stats are within defined bounds
- **Ability Reference Check**: Verifies ability IDs exist and are correctly referenced
- **Duplicate Detection**: Finds duplicate card IDs or names
- **Cost Balance Analysis**: Basic cost-to-stats ratio analysis

## Installation

```bash
npm install card-validator-core
# or
yarn add card-validator-core
```

## Quick Start

```javascript
const { CardValidator } = require('card-validator-core');

// Load your card data
const cards = require('./your-card-data.json');

// Create validator instance
const validator = new CardValidator({
  strictMode: false,
  reportFormat: 'console'
});

// Run all validations
const results = validator.validate(cards);

// Output results
validator.report(results);
```

## Configuration

```javascript
const config = {
  // Validation rules
  rules: {
    elementConsistency: true,
    statRanges: true,
    abilityReferences: true,
    duplicateCheck: true,
    costBalance: true
  },

  // Stat ranges (customize for your game)
  statRanges: {
    cost: { min: 1, max: 10 },
    atk: { min: 0, max: 10 },
    def: { min: 0, max: 10 },
    hp: { min: 1, max: 20 }
  },

  // Element mappings (customize for your game)
  elementMappings: {
    'fire': ['dragon', 'phoenix', 'volcano'],
    'water': ['mermaid', 'sea', 'ocean'],
    'earth': ['golem', 'mountain', 'forest'],
    'wind': ['bird', 'sky', 'storm'],
    'light': ['angel', 'sun', 'holy'],
    'dark': ['demon', 'shadow', 'void']
  }
};

const validator = new CardValidator(config);
```

## API Reference

### `CardValidator`

#### Constructor

```javascript
new CardValidator(config?)
```

#### Methods

| Method | Description | Returns |
|--------|-------------|---------|
| `validate(cards)` | Run all enabled validations | `ValidationResult[]` |
| `validateElement(cards)` | Check element consistency | `ValidationResult[]` |
| `validateStats(cards)` | Check stat ranges | `ValidationResult[]` |
| `validateAbilities(cards, abilities)` | Check ability references | `ValidationResult[]` |
| `findDuplicates(cards)` | Find duplicate entries | `ValidationResult[]` |
| `analyzeCostBalance(cards)` | Analyze cost efficiency | `AnalysisResult[]` |
| `report(results)` | Output results | `void` |

### `ValidationResult`

```typescript
interface ValidationResult {
  cardId: string;
  cardName: string;
  rule: string;
  severity: 'error' | 'warning' | 'info';
  message: string;
  suggestion?: string;
}
```

## Example Output

```
=== Card Validator Report ===

[ERROR] Card U001 "Fire Dragon"
  Rule: elementConsistency
  Issue: Element is "water" but name suggests "fire"
  Suggestion: Change element to "fire"

[WARNING] Card U042 "Ancient Golem"
  Rule: costBalance
  Issue: Cost 2 for stats 5/5 may be undercosted
  Suggestion: Consider cost 3-4

Summary: 2 errors, 5 warnings, 12 info
```

## Supported Card Schema

```json
{
  "id": "U001",
  "name": "Card Name",
  "kind": "UNIT",
  "element": "fire",
  "rarity": "rare",
  "cost": 3,
  "atk": 2,
  "def": 2,
  "hp": 4,
  "abilityId": "ability_001"
}
```

## Extending

Create custom validation rules:

```javascript
validator.addRule('customRule', (card) => {
  if (card.rarity === 'mythic' && card.cost < 5) {
    return {
      cardId: card.id,
      cardName: card.name,
      rule: 'customRule',
      severity: 'warning',
      message: 'Mythic cards typically cost 5 or more'
    };
  }
  return null;
});
```

## Pro Version

For advanced features, consider **Card Validator Pro** ($49):

- Visual dashboard with charts
- Batch processing for large datasets
- Export to CSV/Excel/PDF
- Balance simulation tools
- Integration with popular TCG engines
- Priority support

[Get Pro Version](https://gumroad.com/)

---

## Contributing

Issues and PRs welcome on GitHub.

## License

MIT License - Use freely in personal and commercial projects.

---

Made with love for TCG developers.