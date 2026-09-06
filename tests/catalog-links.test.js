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

test("new personal projects are listed in My Apps", () => {
  expectCatalogEntry({
    name: "GEZ Walks",
    url: "https://tmammadov17503.github.io/gez_walks/",
    category: "my-apps",
  });
  expectCatalogEntry({
    name: "OTUR",
    url: "https://tmammadov17503.github.io/otur/",
    category: "my-apps",
  });
});

test("Genspark is listed in AI & Agents", () => {
  expectCatalogEntry({
    name: "Genspark Super Agent",
    url: "https://www.genspark.ai/agents?type=super_agent",
    category: "ai-agents",
  });
});

test("new repositories are listed in GitHub Repos", () => {
  expectCatalogEntry({
    name: "Kronos",
    url: "https://github.com/shiyu-coder/Kronos",
    category: "github-repos",
  });
  expectCatalogEntry({
    name: "Vibe-Trading",
    url: "https://github.com/HKUDS/Vibe-Trading",
    category: "github-repos",
  });
});

test("new study tools are listed in Learning & Courses", () => {
  expectCatalogEntry({
    name: "Notova",
    url: "https://notova.ai",
    category: "learning-courses",
  });
  expectCatalogEntry({
    name: "HigherEd by Whop",
    url: "https://edu.whop.com",
    category: "learning-courses",
  });
});

test("BYOjet is listed in Travel & Flights without tracking parameters", () => {
  expectCatalogEntry({
    name: "BYOjet",
    url: "https://home.byojet.com/?country=au",
    category: "travel-flights",
  });
  assert.doesNotMatch(catalogSource, /_gcl_|_ga=/);
});
