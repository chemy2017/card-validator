import { defineConfig, devices } from "@playwright/test";

/**
 * Playwright config for Chemythology e2e tests.
 *
 * Tests run against the local dev server (npm run dev → vite on :5173).
 * The webServer block auto-starts the dev server, but in CI/local you can
 * also run it manually and skip auto-start.
 */
export default defineConfig({
  testDir: "./e2e",
  fullyParallel: false,  // BattleDemo state-heavy → keep serial for stability
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: 1,
  reporter: process.env.CI ? "github" : "list",
  use: {
    baseURL: "http://localhost:5173",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: {
    command: "npm run dev --workspace=apps/web",
    url: "http://localhost:5173",
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
});
