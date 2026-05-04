# CLAUDE.md - プロジェクト記憶システム

> **このファイルはClaude Codeが最初に読むファイルです。以下のルールを必ず守ってください。**

---

## 絶対ルール（最優先・記憶喪失防止）

### エージェント識別と記憶読み込み

プロンプトに `#claude` が含まれる場合:

1. **自分のメモリを読む**: `.claude/memories/claude.md`
2. **共有メモリを読む**: `.claude/memories/shared.md`
3. **着手前に dispatch を記録する**:
   - `docs/agent_dispatch_log.md` に `担当 / 実行AI / 参照メモリ / 状態` を追加
4. **報告してから作業開始**:
   ```
   [メモリ復元完了]
   - 状態: {待機中/作業中/中断}
   - 前回の作業: {直近の作業内容}
   ```

### 監査ルール

- `claude` は自分の担当範囲で `内部監査` と `監査修正` を行える。
- `quality-evaluator` などの社内エージェントは、`内部の客観評価` を担当する。
- `codex` は `独立監査機関` として必要時のみ依頼する。第三者監査、最終裏取り、自己評価の差し戻しが必要な時だけ起用する。
- `claude` は `codex` 独立監査を代行しない。`codex監査済み` と記載する時は、`docs/agent_dispatch_log.md` に `実行AI = codex` の証跡が必要。

### メモリファイル一覧

| 種別 | ファイル |
|------|---------|
| claude本体 | `.claude/memories/claude.md` |
| 共有ルール | `.claude/memories/shared.md` |
| 組織図（必要時のみ） | `.claude/ORGANIZATION.md` |
| 専門家索引（必要時のみ） | `.claude/knowledge/README.md` |
| S級エージェント | `.claude/agents/*.md` (7体) |
| 専門家メモリ | `.claude/knowledge/*.md` (11本) + エージェント内蔵5領域 |
| dispatch台帳 | `docs/agent_dispatch_log.md` |

### ★★★ カード種別別 担当者永続正典 (担当エージェント着手前必読) ★★★

| ファイル | 種別 | 用途 |
|----------|------|------|
| **★`god_specialist.md`** | GOD (G1-G72) | **★GOD担当者 永続正典 (G2-G29完了 / 60件engine bug + 16件spec/impl gap candidate / engine 直読 path / 罠カタログ / Runbook v1.2)** |
| **★`pg_specialist.md`** | PG (PG1-PG7 主人公) | **★PG担当者 永続正典 (統合再設計 21枚→7枚 / ★0-★5覚醒 / 8枠制 — engine 知識は god_specialist 参照)** |
| **★`vg_specialist.md`** | VG (VG1-VG22 敵 GOD) | **★VG担当者 永続正典 (v2.0完遂 / 累積教訓29件 / 監査42項目 — engine 知識は god_specialist 参照)** |
| **★`sr_relic_specialist.md`** | SR神器 (SR1-SR100) | **★SR神器担当者 永続正典 (SR1-SR79完了 / 205 smoke PASS / equip 119 件 / SR* 79 件 / 全 71 GOD 神器完成 + ★★★ PG 魂宝全 7/7 完成 ★★★ (SR72-SR78 PG1-PG7) + ★★ VG 封印具シリーズ着手 milestone ★★ (SR79 VG1 土蜘蛛の土蜘蛛蛮刀 earth legend ATTACKER cursed_attack+multi_strike 八本足の悪意呪刀 atk:4 max) / SR68 abilityId 衝突 1 件→修正 + SR69-SR79 で proactive grep 教訓 11 連続成功完全定着 / ★全 9 element 完全埋め達成 (SR1-SR71 範囲) / ★light element 全 4 役割完備達成 + ★fire element ATTACKER 2 軸完成 + ★earth element DEFENDER 2 軸完成 + ★earth element ATTACKER 3 軸完成 (SR79 で完成) + ★wind element SUPPORT 全 3 軸完成 + ★void element MAGE 2 軸完成 + ★dark element SUPPORT 軸初開拓 (SR78) + ★SR equip 初の reflect carrier (SR78) / ★earth完全埋め+★ice完全埋め(6軸)+★void 4 軸完成+dark 6 軸到達+lightning 4 軸完全埋め+SR72 void mythic ATTACKER 2 軸目 / mythic ATTACKER 4 element + ★mythic SUPPORT 4 element 揃い完成 / 夫婦神 G48/G49 + 姉妹 G50/G26 + 造化三神 G51/G52 光闇対偶 + ★産巣日3神対偶完成 G51-G52-G68 三位一体 + 寒川夫婦対神 G64/G65 + 龗対神 G66/G67 + 天孫降臨 G53 + 高天原守護 G54 + 天石門解錠 G55 + 八岐毒尾 G56 + 黄泉冥府裁き G57 + 雷神武威 G58 + 雷神鼓 G59 + 経津主太刀 G60 + 十種神宝 G61 + 事代主の杖 G62 + 菊輪 G63 + 寒川の鈴 G64 + 寒川の盾 G65 + 闇龗の壺 G66 + 高龗の壺 G67 + 産巣日玉 G68 + 祓棒 G69 + 一言玉 G70 + 布刀玉 G71 + ★楽園の鍵 PG1 + ★マナの印 PG2 + ★勇者の太刀 PG3 + ★出雲玉 PG4 + ★桜花扇 PG5 + ★錬成石 PG6 + ★穢祓真鏡 PG7 (★★PG 魂宝全 7 件完成★★) + ★土蜘蛛蛮刀 VG1 (★VG 封印具着手★) / 残 SR80-SR100 (VG 封印具 21 件 / VG2-VG22) のみ = 21 件 / 7ファイル実装テンプレ / 罠カタログ + ★命名衝突 proactive grep 教訓 (SR68-SR79 で 11 連続 immediate success 完全定着))** |

→ 全 specialist canon は `.claude/memories/` 配下。各カード種別作業着手前に必ず該当ファイルを読む。

### タスク別メモリ（必要時のみ参照）

| ファイル | 場所 | 用途 |
|----------|------|------|
| `job_rebalance_progress.md` | `.claude/memories/` | ジョブ再割当進捗 |
| `story_audit_progress.md` | `.claude/memories/` | ストーリー監査進捗 |
| `ability_trial_lessons.md` | `~/.claude/projects/.../memory/` | 能力道場教訓 |
| `card_balance_audit_status.md` | `~/.claude/projects/.../memory/` | バランス監査状況 |
| `feedback_job_reassignment_lessons.md` | `~/.claude/projects/.../memory/` | ジョブ教訓 |
| `element_dot_counter_system.md` | `~/.claude/projects/.../memory/` | カウンターシステム |
| `sr_relic_implementation_handoff.md` | `~/.claude/projects/.../memory/` | SR神器一時進捗 (永続正典は `.claude/memories/sr_relic_specialist.md`) |

---

## 作業完了・中断時の必須アクション

### 作業完了時

1. `claude.md` を更新:
   - 「アクティブタスク」に今回の作業結果を反映
   - 「状態」を「待機中」に変更
2. `docs/agent_dispatch_log.md` を更新:
   - 対応結果を `DONE` または `CLOSED` に変更
3. `docs/task_board.md` / `docs/walkthrough.md` を必要に応じて更新
4. `npm run ops:check` を実行
5. 独立監査を行ったと報告する場合は、`codex` の dispatch 記録が閉じていることを確認する

### 中断時（prompt too long、エラー、ユーザー中断）

1. **可能な限り早く** `claude.md` を更新:
   - 「状態」を「中断」に変更
   - 該当タスク別メモリに詳細を記録
2. `docs/agent_dispatch_log.md` の該当行を `BLOCKED` / `INTERRUPTED` に更新

---

## プロジェクト概要

**Chemythology** - 神話・歴史をテーマにしたカードゲーム

### 主要ドキュメント

| ファイル | 役割 |
|----------|------|
| `docs/project_context.md` | 作業フロー・ルール（入口） |
| `.claude/ORGANIZATION.md` | 組織図・エージェント一覧 |
| `docs/task_board.md` | タスク管理 |
| `docs/walkthrough.md` | 技術状態・実装詳細 |

### 体制

| エージェント | 役割 |
|-------------|------|
| claude | COO（全61システム直轄） |
| codex | 独立監査（必要時のみ） |
| qa-tester | 品質ゲート、Fix task |
| quality-evaluator | 客観評価 |
| game-designer | カード、能力、バランス |
| story-auditor | ストーリー監査 |
| job-rebalancer | ジョブ再割当+監査 |
| ability-trial | 能力道場 |
| art-prompt-creator | カードイラストプロンプト |
| infra-engineer | 認証、保存・同期、サウンド、CI/CD |
| ops-planner | ライブ運用、障害対応、定例レビュー |
| data-analyst | KPI分析、経済モニタリング |
| security-auditor | セキュリティ監査、exploit検出 |
| marketing | ローンチ準備、FTUE、i18n品質 |

+ 専門家メモリ11本 + エージェント内蔵知識5領域（詳細: `.claude/ORGANIZATION.md`）

---

## 緊急時の復旧手順

メモリファイルが読めない・破損している場合:

1. `docs/task_board.md` で自分の担当タスクを確認
2. `.claude/ORGANIZATION.md` で組織体制を確認
3. ユーザーに状況を報告し、指示を待つ

---

## スラッシュコマンド一覧

| コマンド | 用途 |
|----------|------|
| `/project:quality-gate` | 品質ゲート4種を一括実行 |
| `/project:ability-trial <能力名>` | 能力道場チェック |
| `/project:card-review <カードID>` | カード精査 |
| `/project:balance-audit` | バランス監査 + 分析 |
| `/project:story-audit <Act番号>` | ストーリー監査 |
| `/project:dispatch <create/close/list>` | Dispatch管理 |
| `/project:status` | プロジェクト状態ダッシュボード |
| `/project:code-review [ファイル]` | コードレビュー（直近diff or 指定ファイル） |
| `/project:ops-check` | 運用チェック（ops:check実行+分析） |

---

## TypeScript / React コーディングルール

### TypeScript

- `strict: true` を前提とする。`any` 禁止、`as` キャストは型ガード付きのみ
- Union型 > enum。const object + `as const` を優先
- 関数は純粋関数を優先。副作用は明示的に分離（`data/` = ロジック、`hooks/` = React連携）
- 型定義は `@chemythology/shared` に集約。ローカル重複禁止
- barrel export (`index.ts`) は使わない。直接パスで import
- テストは Vitest。`describe/it` 構文、モックは最小限

### React (TSX)

- 関数コンポーネント + hooks のみ。class コンポーネント禁止
- 状態管理: Zustand ストア（`apps/web/src/data/`）。useState はUI-local のみ
- 巨大コンポーネント（500行超）は変更前に該当セクションを特定してから着手
- CSS: `index.css` のユーティリティクラス + インラインスタイル。CSS Modules 不使用
- i18n: `useTranslation()` で `locales/ja/*.json` + `locales/en/*.json` を参照
- 画像パス: `apps/web/public/cards/` — カードIDとファイル名は連動

### ファイル配置規約

```
packages/shared/       — 型、定数、マスターデータ（全パッケージ共有）
packages/core/         — ゲームロジック（バトル、ルール、AI）
apps/web/src/data/     — データロジック、ストア、純粋関数
apps/web/src/hooks/    — React hooks（UI連携）
apps/web/src/screens/  — 画面コンポーネント
apps/web/src/components/ — 再利用UIコンポーネント
tests/                 — テスト（Vitest）
scripts/               — CLI スクリプト、プロンプト
docs/                  — 設計文書、マスター定義
```
