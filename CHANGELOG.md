# 変更履歴 (CHANGELOG)

このファイルは、Chemythology v2 プロジェクトのすべての重要な変更を記録します。

## 記録ルール

- すべての重要な変更を記録してください
- 日付順（新しいものが上）
- フォーマット: `## YYYY-MM-DD - [担当者名]`
- カテゴリ: Added, Changed, Fixed, Removed
- 詳細は [document_master_list.md](docs/document_master_list.md#-変更履歴の記録方法) を参照

---

## 2026-01-04 - Claude (Opus 4.5)

### Changed
- **economy.md v13→v14（統合版・claud3評価対応）**
  - サブスクリプション特典をeconomy.md + vip_master.mdで統一（全機能統合）
  - F2P月間収入を4,200ジェムに統一（mission_master.md準拠）
  - 天井コストを16,200ジェムに統一（10連割引適用）
  - 変更履歴をeconomy_changelog.mdに分離（冗長性解消）
  - 付録N簡略化、参照リンク統一

- **vip_master.md v6→v7**
  - サブスクリプション特典をeconomy.md v14統合版に統一
  - ジェム特典（日次60/100/150、即時300/500/1,000）を追加
  - 月間ジェム価値と価値倍率を追加

### Added
- **economy.md v14 新機能追加（claud3提案採用）**
  - シーズンパスプラス（¥2,980）：バトルパス+競技パス統合パック
  - ギルド投資システム：共同貯金→ギルド専用ガチャ→ギルド限定キャラ
  - イベント経済総合シミュレーション（月間/年間報酬シミュレーション）
  - ゴールド経済シミュレーション（Phase別設計、収支バランス表）
  - 新規プレイヤー離脱防止KPI（目標値、モニタリング指標）

- **economy_changelog.md（新規作成）**
  - economy.mdの変更履歴を分離・一元管理

### Fixed
- **economy.md 整合性修正（claud3評価72点→100点目標）**
  - サブスクリプション特典の不一致（-8点）→ 統合版に統一
  - F2P月収の不一致（-4点）→ 4,200ジェムに統一
  - 天井コスト計算方式不一致（-3点）→ 16,200ジェムに統一
  - イベント経済の具体的数値不足（-3点）→ シミュレーション追加
  - ゴールドシンク具体値の不足（-2点）→ Phase別設計追加
  - 新規プレイヤー離脱防止策の定量化不足（-3点）→ KPI追加
  - 変更履歴の冗長性（-2点）→ 外部ファイルに分離
  - 重複セクションの整理不足（-2点）→ 付録N簡略化
  - 付録の構成（-1点）→ v14追加、最終更新日更新

### 関連ドキュメント
- [economy.md](docs/economy.md)
- [economy_changelog.md](docs/economy_changelog.md)
- [vip_master.md](docs/vip_master.md)
- [mission_master.md](docs/mission_master.md)
- [gacha_master.md](docs/gacha_master.md)

---

## 2026-01-04 - Claude (Opus 4.5)

### Fixed
- **economy.md v8→v9**
  - 全神話フェス天井ポイント引継ぎ率を30%→50%に修正（gacha_master.md v6との整合性確保）
  - 系統判定を「特殊系統（フェス専用）」→「全系統扱い」に統一
  - ※4名の評価者（claud2/claud3/claud4/antigravity）全員が指摘した重要な不整合を修正

### Added
- **economy.md v9 新機能追加**
  - 【claud4採用】MVP優先度マトリックスにスコープ定義（含む/含まない）を全機能に追加
  - 【antigravity採用】FTUE経済フロー詳細セクション（初回24時間の経済目標、課金転換設計）
  - 【claud3採用】ポイント引継ぎ可視化UI設計（リアルタイム表示、引継ぎ先プレビュー）
  - 【claud3採用】系統診断機能設計（5問診断、神話体系マッピング）
  - 【claud4採用】全神話フェス経済影響分析（ジェム消費予測、通常バナー影響、収益モデル）
  - 【claud3採用】Phase 2機能：全神話フェス専用報酬設計
  - 【claud3採用】Phase 2機能：引継ぎ増幅イベント設計（50%→75%ブースト）
  - 【claud2採用】Phase 2-3機能：神話年鑑設計（SNS共有機能付き）
  - MVP Phase 1チェックリストにポイント引継ぎ可視化UI、系統診断を追加
  - FTUE・オンボーディング経済カテゴリをMVPマトリックスに追加

### 評価者提案の採否（v9判定）
- **claud2（94点）**: 観測者の予言→不採用、神話の絆共闘ガチャ→不採用、天井保険→不採用、**神話年鑑→採用（Phase 2-3）**
- **claud3（98点）**: **ポイント引継ぎ可視化UI→採用（Phase 1-2）**、**全神話フェス専用報酬→採用（Phase 2）**、**引継ぎ増幅イベント→採用（Phase 2）**、**系統診断→採用（Phase 1-2）**
- **claud4（80点）**: PvP経済統合→不採用、**全神話フェス経済影響分析→採用（Phase 1-2）**、**MVP機能スコープ明確化→採用（Phase 1）**
- **antigravity（98点）**: **FTUE詳細フロー追加→採用（Phase 1）**

### Changed
- **economy.md v7→v8**
  - MVP優先度マトリックス追加（antigravity提案採用）
  - 旧サブスクリプション情報の整理（6種→3プランに統一完了）
  - 通貨フロー分析の重複修正（5,800ジェム/月に統一）
  - 地域別月額サブスク価格を新3プラン体系に更新
  - ARPU改善施策「ダブルパス」→「プレミアムプラン誘導」に修正

- **vip_master.md v5→v6**
  - サブスクリプション体系をeconomy.md v7に完全統一（ベーシック/スタンダード/プレミアム）
  - 旧サブスク情報（スタミナパス/プレミアムパス/ダブルパス）を削除
  - VIP特典一覧画面UIからP2W表記「天井-10連」を削除
  - ARPU対応策「ダブルパス」→「プレミアムプラン誘導」に修正

- **gacha_master.md v5→v6**
  - 全神話フェスの系統判定ルール追加（全系統扱い、任意系統へ50%引継ぎ）

### 評価者提案の判断
- **claud3（100点）**: リアルタイム経済調整→Phase 2、スキン経済→Phase 2、ギルド経済圏→現状維持、実績ベース価格→不採用、復帰パッケージ→Phase 2
- **claud4（84点）**: PvPランク報酬分析→現状維持、PvP実装ロードマップ→pvp_master.mdで管理、天井ポイント連携→不採用
- **antigravity（97点）**: FTUE経済フロー→現状維持、MVP優先度マトリックス→採用・実装完了、初回ガチャ天井緩和→不採用、インフレ対策指標→Phase 2

### 関連ドキュメント
- [economy.md](docs/economy.md)
- [vip_master.md](docs/vip_master.md)
- [gacha_master.md](docs/gacha_master.md)

---

## 2026-01-03 - Claude (Opus 4.5)

### Changed
- **Godレベルシステム協議事項の決定**
  - B案採用: Lv50維持、Lv10で戦闘ステータス完成
  - 重複処理: 採用しない（神の欠片に変換）
  - 適用範囲: ハイブリッド（PvEはレベル反映、PvPはLv固定）

- **god_level_discussion.md**
  - 決定事項記録欄を更新（B案 + 重複非採用 + ハイブリッド）
  - 正典度を「作業用」→「正典」に昇格

- **god_growth_master.md**
  - 協議事項セクションを決定済みセクションに変更
  - B案の詳細（Lv10で戦闘ステ完成）を明記
  - ハイブリッド適用ルール表を追加

- **economy.md**
  - God重複時の変換セクションを追加（神の欠片システム）
  - レアリティ別変換レート、神の欠片ショップ商品を定義

- **battle_system_design.md**
  - マルチゴッド戦闘ステータスセクションを追加
  - Godステータス決定を今後の課題から完了に変更

- **document_master_list.md**
  - god_level_discussion.md の正典度を「作業用」→「正典」に変更

### 関連ドキュメント
- [god_level_discussion.md](docs/god_level_discussion.md)
- [god_growth_master.md](docs/god_growth_master.md)
- [economy.md](docs/economy.md)
- [battle_system_design.md](docs/battle_system_design.md)

---

## 2026-01-03 - Claude (Sonnet 4.5)

### Added
- **README.md（プロジェクトルート）**
  - チーム全体のエントリーポイント
  - document_master_list.md への誘導
  - クイックリンク集
  - 環境セットアップ手順
  - 毎日の作業フロー

- **カード追加エラー防止システム**
  - `scripts/validate_card_data.js`: 包括的検証スクリプト（7つの自動チェック）
    - CSV-JSON 同期チェック
    - 重複カードチェック（ID・名前）
    - カードID形式チェック（ゼロパディング検出）
    - エンコーディングチェック
    - レアリティバランスチェック
    - 必須フィールドチェック
    - ドキュメント整合性チェック
  - `scripts/add_custom_cards_template.js`: カード追加テンプレート
    - ID自動生成機能
    - 重複チェック機能
    - バックアップ自動作成
  - `docs/CARD_ADDITION_WORKFLOW.md`: カード追加標準手順ガイド
    - 過去の問題分析（4つの典型的エラー）
    - CSV編集・スクリプト追加の2つの方法
    - 検証チェックリスト
    - よくあるミス6例と対処法
    - 緊急時の復旧手順
  - `docs/card_addition_error_prevention_report_2026-01-03.md`: エラー防止対策完了レポート

- **チームワークフロー体制**
  - `docs/document_master_list.md`: オンボーディング・作業フローセクション追加
    - 新メンバー向け3日間オンボーディングプラン
    - 作業開始前チェックリスト
    - 作業完了後チェックリスト
    - CHANGELOG 記録フォーマット
  - `CHANGELOG.md`: 変更履歴ファイル（本ファイル）

### Changed
- `docs/README_MASTER_INDEX.md`
  - 「🃏 カード追加の手順」セクション追加（115行）
  - クイックスタート（方法A・B）
  - よくあるミス4例
  - 関連ドキュメントリンク

- `docs/document_master_list.md`
  - カード関連セクションに3つのドキュメント追加
    - CARD_ADDITION_WORKFLOW.md（正典）
    - card_implementation_complete_report_2026-01-02.md（作業用）
    - card_addition_error_prevention_report_2026-01-03.md（作業用）
  - 「このドキュメントの使い方」セクション追加
  - 「新メンバー向けオンボーディング」セクション追加（4ステップ）
  - 「チーム作業フロー」セクション追加
  - 「変更履歴の記録方法」セクション追加
  - 最終更新日: 2026-01-02 → 2026-01-03

- `scripts/validate_card_data.js`
  - 有効なプレフィックスに `F`（従者カード）を追加
  - gacha_master.md のカンマ区切り数値（1,204種）に対応

### 関連ドキュメント
- [CARD_ADDITION_WORKFLOW.md](docs/CARD_ADDITION_WORKFLOW.md)
- [card_addition_error_prevention_report_2026-01-03.md](docs/card_addition_error_prevention_report_2026-01-03.md)
- [document_master_list.md](docs/document_master_list.md)
- [README_MASTER_INDEX.md](docs/README_MASTER_INDEX.md)

---

## 2026-01-02 - Claude (Sonnet 4.5)

### Added
- **カード実装完了**
  - カードマスターデータ: 894種 → 1,204種（+310種）
  - ストーリー関連カード310種追加（涙ポイント、チュートリアル、メインストーリー、エンディング）
  - `scripts/add_missing_cards.js`: ストーリー関連カード追加スクリプト（3,271行）
  - `packages/shared/master/story_card_master.json`: ストーリー章別カード紐づけデータ
  - `packages/shared/master/boss_deck_master.json`: ボス戦デッキ構成・AI設定データ

- **CSV-JSON 双方向変換システム**
  - `scripts/csv_to_json_converter.js`: CSV → JSON 変換スクリプト
  - `scripts/json_to_csv_converter.js`: JSON → CSV 変換スクリプト
  - `scripts/remove_duplicate_cards.js`: 重複カード検出・削除スクリプト
  - `scripts/verify_card_coverage.js`: カードカバレッジ検証スクリプト

- **レポート**
  - `docs/card_implementation_complete_report_2026-01-02.md`: カード実装完了レポート
  - `docs/card_addition_completion_report_2026-01-02.md`: カード追加完了レポート
  - `missing_cards_report.md`: 不足カード分析レポート

### Changed
- `docs/phase1_card_roster.csv`: 894種 → 1,204種
- `packages/shared/master/card_master.json`: 894種 → 1,204種
  - UTF-8エンコーディング修復（文字化け解消）
  - すべてのカードに `obtainable: true` 設定

- `docs/gacha_master.md`
  - 総カード数: 1,174種 → 1,204種
  - Common: 175種 → 205種
  - カード追加完了を記録

- `scripts/check_implementation_integrity.js`
  - 期待値更新: 総数 1174 → 1204、Common 175 → 205

### Fixed
- card_master.json の文字化け問題（エンコーディング修復）
- CSV-JSON 同期不一致問題（双方向変換スクリプト作成）

### 関連ドキュメント
- [card_implementation_complete_report_2026-01-02.md](docs/card_implementation_complete_report_2026-01-02.md)
- [gacha_master.md](docs/gacha_master.md)

---

## それ以前の変更

それ以前の変更履歴は以下のドキュメントを参照してください：
- [design_audit_2026-01-02.md](docs/design_audit_2026-01-02.md) - 設計監査レポート
- [implementation_master_files.md](docs/implementation_master_files.md) - 設計ドキュメント分類
- [implementation_files_master.md](docs/implementation_files_master.md) - 実装ファイル完全記録

---

## フォーマット説明

### Added
新規に追加された機能、ファイル、ドキュメント

### Changed
既存のファイルやドキュメントの変更

### Fixed
バグ修正、問題解決

### Removed
削除された機能、ファイル

---

最終更新: 2026-01-03
