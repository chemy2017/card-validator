import { defineConfig } from "vitest/config";
import { execSync } from "child_process";

// Auto-sync master data to dist before tests run
// (vitestはdist経由でJSONを読むため、同期しないと古いデータでテストが実行される)
try {
  execSync("cp packages/shared/master/*.json packages/shared/dist/master/", { stdio: "ignore" });
} catch {
  // Ignore errors (e.g., if dist doesn't exist yet)
}

export default defineConfig({
  test: {
    environment: "node",
    pool: "vmThreads",
    setupFiles: ["./vitest.setup.ts"],
    // 監査修正(第9次): vitest 4.0.16 + Node 24 で default reporter の
    // loadCustomReporterModule 経路が壊れる現象を回避するため明示指定
    // (reporter未指定→ "No test suite found in file" で全183ファイル空扱いになる)
    reporters: ["verbose"],
    exclude: [
      "**/node_modules/**",
      "**/.claude/worktrees/**",
      "**/dist/**",
    ],
  },
});
