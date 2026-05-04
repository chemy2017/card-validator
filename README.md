# Chemythology v2

神話×化学の戦略カードゲーム

---

# 🚨 作業を始める前に必読

## **👉 [docs/document_master_list.md](docs/document_master_list.md) を見てください**

このファイルを見れば、すべての流れが分かります：
- ✅ 新メンバーが何から始めるべきか
- ✅ 作業開始前に何を確認すべきか
- ✅ 作業完了後に何を記録すべきか
- ✅ どのドキュメントが正典（信頼できる情報源）か
- ✅ 誰がどのファイルを更新できるか

**チーム全体のエントリーポイントです。迷ったらここに戻ってください。**

---

# 📚 クイックリンク

## 新メンバー向け
- **[新メンバー向けオンボーディング](docs/document_master_list.md#-新メンバー向けオンボーディング)** - 3日間で戦力になる

## よく使うドキュメント
- **[README_MASTER_INDEX.md](docs/README_MASTER_INDEX.md)** - 設計・実装統合マスターインデックス
- **[CHANGELOG.md](CHANGELOG.md)** - 変更履歴（作業完了時に記録）
- **[design_audit_2026-01-02.md](docs/design_audit_2026-01-02.md)** - 設計監査レポート（品質スコア 100/100）

## 作業フロー
- **[作業開始前チェックリスト](docs/document_master_list.md#作業開始前必須)**
- **[作業完了後チェックリスト](docs/document_master_list.md#作業完了後必須)**

## カード追加
- **[カード追加ワークフロー](docs/CARD_ADDITION_WORKFLOW.md)** - カード追加の標準手順

---

# 🚀 環境セットアップ（初回のみ）

```bash
# 1. リポジトリクローン
git clone [リポジトリURL]
cd chemythology-v2

# 2. 依存関係インストール
npm install

# 3. 検証（環境確認）
node scripts/validate_card_data.js
node scripts/check_implementation_integrity.js
```

**期待結果**: すべて ✅ になること

---

# 📋 毎日の作業フロー

## 作業開始前
```bash
git pull
# CHANGELOG.md を確認（最近の変更を把握）
node scripts/validate_card_data.js  # ベースライン確認
```

## 作業完了後
```bash
node scripts/validate_card_data.js  # 検証
# CHANGELOG.md に記録（重要！）
git add .
git commit -m "説明"
git push
```

---

# 📖 プロジェクト概要

## ゲームコンセプト
- ジャンル: 戦略カードゲーム
- テーマ: 神話 × 化学
- プラットフォーム: Web, Mobile, Steam

## 現在の状態
- **カード総数**: 1,204種
- **ストーリー**: Act 0-9（全200章）
- **品質スコア**: 100/100（設計監査クリア）

## 技術スタック
- Frontend: React + TypeScript
- Backend: Node.js
- Build: Vite
- Monorepo: Turborepo

---

# 🤝 チーム体制

- **6〜10人体制**
- 作業前に必ず [document_master_list.md](docs/document_master_list.md) を確認
- 作業後に必ず [CHANGELOG.md](CHANGELOG.md) に記録

---

# ⚠️ 重要なルール

## 絶対に守ること
1. **作業前**: [document_master_list.md](docs/document_master_list.md) の作業開始前チェックリストを確認
2. **作業後**: [CHANGELOG.md](CHANGELOG.md) に変更を記録
3. **カード追加**: [CARD_ADDITION_WORKFLOW.md](docs/CARD_ADDITION_WORKFLOW.md) の手順に従う
4. **検証**: 作業完了後に必ず `node scripts/validate_card_data.js` を実行

## 困ったとき
1. [document_master_list.md](docs/document_master_list.md) を確認
2. [README_MASTER_INDEX.md](docs/README_MASTER_INDEX.md) で該当セクションを探す
3. チームに質問

---

# 📚 ドキュメント構造

```
chemythology-v2/
├── README.md                          ← このファイル（エントリーポイント）
├── CHANGELOG.md                       ← 変更履歴（必ず記録）
├── docs/
│   ├── document_master_list.md        ← チーム作業の起点（必読）
│   ├── README_MASTER_INDEX.md         ← 設計・実装統合インデックス
│   ├── CARD_ADDITION_WORKFLOW.md      ← カード追加手順
│   ├── design_audit_2026-01-02.md     ← 設計監査レポート
│   └── ...（その他の正典ドキュメント）
├── packages/
│   ├── core/                          ← ゲームロジック
│   ├── shared/                        ← 共通型・マスターデータ
│   └── web/                           ← Webアプリ
└── scripts/
    ├── validate_card_data.js          ← カードデータ検証
    ├── check_implementation_integrity.js  ← 整合性チェック
    └── ...（その他のスクリプト）
```

---

# 🎯 次のステップ

## 新メンバーの方
**[docs/document_master_list.md](docs/document_master_list.md#-新メンバー向けオンボーディング)** のオンボーディングに従ってください（3日で戦力になります）

## 既存メンバーの方
**[docs/document_master_list.md](docs/document_master_list.md#-チーム作業フロー)** のチーム作業フローを確認してください

---

最終更新: 2026-01-03
