const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const catalogSource = fs.readFileSync(
  path.join(__dirname, "..", "script.js"),
  "utf8",
);

function expectCatalogEntry({ name, url, category }) {
  const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const escapedUrl = url.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const escapedCategory = category.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const entryPattern = new RegExp(
    `name:\\s*"${escapedName}"[\\s\\S]*?url:\\s*"${escapedUrl}"[\\s\\S]*?category:\\s*"${escapedCategory}"`,
  );

  assert.match(catalogSource, entryPattern);
}

test("DataRace is listed in AI & Agents", () => {
  expectCatalogEntry({
    name: "DataRace",
    url: "https://www.datarace.ai/en/races",
    category: "ai-agents",
  });
});

test("InvoApp is listed in Markets & Signals", () => {
  expectCatalogEntry({
    name: "InvoApp",
    url: "https://app.invoapp.com",
    category: "markets-signals",
  });
});

test("Baku Pulse is listed in My Apps", () => {
  expectCatalogEntry({
    name: "Baku Pulse",
    url: "https://vercel.com/tt08/baku-pulse",
    category: "my-apps",
  });
});
