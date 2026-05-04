# Chemythology Agent Operating Contract

このリポジトリで作業するAIは、単にコードを変えるだけでなく、会社体制に沿って担当を選び、記録を残すこと。

## 最初に必ず読む

1. `CLAUDE.md`
2. `.claude/memories/company.md`
3. `.claude/knowledge/README.md`
4. 自分の実行に必要な `.claude/knowledge/*.md` または `.claude/agents/*.md`
5. `docs/task_board.md`
6. `docs/agent_dispatch_log.md`

## 必須運用

- 依頼ごとに `担当社員` を 1 人決める。必要なら補助社員を 1 人まで追加する。
- **★着手前に dispatch を記録する（省略禁止）**:
  1. `docs/agent_dispatch_log.md` に `担当社員 / 実行AI / 参照メモリ / 状態` を追加する。
  2. `docs/task_board.md` に `IN_PROGRESS` 行を追加する。
  3. **dispatch記録なしでのコード変更・プロンプト生成・監査は禁止。**
- `claude` と各エージェントは、自分の担当範囲で `内部監査` と `監査修正` を行ってよい。
- `codex` は `独立監査機関` として必要時のみ起用する。ユーザーが第三者監査、最終裏取り、独立監査を求めた時だけ依頼する。
- `claude` は `codex` 名義の独立監査を代行しない。`codex監査済み` と記載する時は、`実行AI = codex` の dispatch 記録が必須。
- 非自明な変更をしたら `docs/walkthrough.md` に変更と検証を残す。
- `claude` 主導タスクでは `.claude/memories/claude.md` も更新する。
- 作業完了前に `npm run ops:check` を実行し、運用文書の整合性を確認する。

## エージェント間連携

- 同時編集禁止ファイル（card_master/ability_master/job_master等）は1セッション1エージェントのみ
- 変更が他エージェントに波及する場合は `[波及通知]` を walkthrough に記載する
- 詳細は `.claude/AGENT_PROTOCOL.md` を参照

## 記録の役割

- `.claude/memories/company.md`: 会社体制と担当表
- `.claude/knowledge/README.md`: 専門家メモリ索引
- `docs/agent_dispatch_log.md`: 誰を選んだか、なぜ選んだか
- `docs/task_board.md`: 状態管理
- `docs/walkthrough.md`: 実装・検証ログ

## 禁止

- 担当社員を決めずに大きな作業へ入ること
- コードだけ変えて台帳を残さないこと
- 古い `Opus / Antigravity` 体制を現行運用として扱うこと
