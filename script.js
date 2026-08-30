const categories = [
  {
    id: "all",
    label: "All lanes",
    blurb: "Everything in one pass.",
    accent: "97, 231, 255",
    order: 0,
  },
  {
    id: "my-apps",
    label: "My Apps",
    blurb: "Your own live projects and personal shortcuts.",
    accent: "124, 255, 196",
    order: 1,
  },
  {
    id: "ai-agents",
    label: "AI & Agents",
    blurb: "Assistants, research, generation, voice, and AI writing tools.",
    accent: "97, 231, 255",
    order: 2,
  },
  {
    id: "creator-studio",
    label: "Creator Studio",
    blurb: "Video, design, motion, and media production tools.",
    accent: "255, 141, 92",
    order: 3,
  },
  {
    id: "build-ship",
    label: "Build & Ship",
    blurb: "Coding, deployment, hosting, and app control panels.",
    accent: "255, 216, 102",
    order: 4,
  },
  {
    id: "github-repos",
    label: "GitHub Repos",
    blurb: "Open-source repos, frameworks, and reference collections worth revisiting.",
    accent: "185, 164, 255",
    order: 5,
  },
  {
    id: "markets-signals",
    label: "Markets & Signals",
    blurb: "Crypto dashboards, alt momentum, and fast market context.",
    accent: "150, 255, 125",
    order: 6,
  },
  {
    id: "travel-flights",
    label: "Travel & Flights",
    blurb: "Flight search, travel timing, and price-check tools in one lane.",
    accent: "115, 216, 255",
    order: 7,
  },
  {
    id: "media-streaming",
    label: "Media & Streaming",
    blurb: "Sports, movies, and external entertainment portals.",
    accent: "255, 114, 114",
    order: 8,
  },
  {
    id: "job-searches",
    label: "Job Searches",
    blurb: "Job hunting, interview prep, work platforms, and career-focused tools.",
    accent: "255, 168, 125",
    order: 9,
  },
  {
    id: "learning-courses",
    label: "Learning & Courses",
    blurb: "Hands-on learning, guided courses, and skill-building platforms.",
    accent: "255, 205, 120",
    order: 10,
  },
  {
    id: "utility-life",
    label: "Utility & Lifestyle",
    blurb: "Useful extras for work, fitness, and everyday tasks.",
    accent: "126, 181, 255",
    order: 11,
  },
];

const apps = [
  {
    name: "Gmail Agent",
    url: "https://tmammadov17503.github.io/gmail_agent/",
    category: "my-apps",
    role: "Personal app",
    state: "Your build",
    description: "Your own Gmail-focused agent for daily email workflow and automation shortcuts.",
    detail: "Best used as a direct jump into your personal mail assistant without digging through saved tabs.",
    tags: ["gmail", "agent", "automation"],
  },
  {
    name: "Woofer Project",
    url: "https://wooferproject.streamlit.app/",
    category: "my-apps",
    role: "Personal app",
    state: "Your build",
    description: "Your Streamlit workspace for custom tools, experiments, and lightweight workflows.",
    detail: "This gives your own project a first-class place in the dashboard instead of hiding behind bookmarks.",
    tags: ["streamlit", "project", "custom"],
  },
  {
    name: "Baku Pulse",
    url: "https://vercel.com/tt08/baku-pulse",
    category: "my-apps",
    role: "Personal project",
    state: "Your build",
    description: "Your Baku Pulse project dashboard on Vercel for quick access to deployments, domains, logs, and settings.",
    detail: "It stays in My Apps so the project control panel is always one click away alongside your other personal builds.",
    tags: ["baku", "vercel", "project"],
  },
  {
    name: "Kimi",
    url: "https://www.kimi.com",
    category: "ai-agents",
    role: "AI assistant",
    state: "Core AI",
    description: "Long-context AI assistant for research, reading, summarizing, and general work.",
    detail: "Useful when you want an alternative AI workspace for large context and fast idea handling.",
    tags: ["chat", "research", "assistant"],
  },
  {
    name: "ChatGPT",
    url: "https://chatgpt.com",
    category: "ai-agents",
    role: "AI assistant",
    state: "Core AI",
    description: "General-purpose AI chat for writing, planning, coding, and quick thinking.",
    detail: "A reliable front door for daily prompting, drafting, and problem-solving across almost any task.",
    tags: ["chat", "writing", "coding"],
  },
  {
    name: "NotebookLM",
    url: "https://notebooklm.google.com",
    category: "ai-agents",
    role: "Research notebook",
    state: "Research",
    description: "Source-grounded AI notebook for documents, notes, summaries, and study sessions.",
    detail: "Strong fit when you want answers tied to your own uploaded material instead of a generic web chat.",
    tags: ["notes", "documents", "study"],
  },
  {
    name: "Gamma",
    url: "https://gamma.app",
    category: "ai-agents",
    role: "Presentation builder",
    state: "Slides",
    description: "AI presentation and document tool for decks, docs, and landing-style pages.",
    detail: "Great when you need polished visual storytelling without building slides by hand.",
    tags: ["presentations", "docs", "design"],
  },
  {
    name: "Gemini",
    url: "https://gemini.google.com/app?hl=ru",
    category: "ai-agents",
    role: "AI assistant",
    state: "Google AI",
    description: "Google's multimodal AI assistant for chat, ideation, and quick exploration.",
    detail: "Useful as a second opinion lane when you want another AI model in your daily stack.",
    tags: ["chat", "google", "assistant"],
  },
  {
    name: "ElevenLabs",
    url: "https://elevenlabs.io/app/speech-synthesis/text-to-speech",
    category: "ai-agents",
    role: "Voice studio",
    state: "Voice",
    description: "Text-to-speech and voice generation platform for polished audio output.",
    detail: "Best for turning scripts into realistic voiceovers without opening a full editing suite first.",
    tags: ["tts", "voice", "audio"],
  },
  {
    name: "Krea",
    url: "https://www.krea.ai/image",
    category: "ai-agents",
    role: "Image generation",
    state: "Visual AI",
    description: "AI image creation workspace for fast concepts, exploration, and prompt-based visuals.",
    detail: "A fast lane for visual ideation when you want images, moods, or concept frames quickly.",
    tags: ["image", "art", "generation"],
  },
  {
    name: "StealthWriter",
    url: "https://stealthwriter.ai",
    category: "ai-agents",
    role: "Writing tool",
    state: "Rewrite",
    description: "AI text humanizer and rewriting tool for making machine-written text sound more natural.",
    detail: "Useful when you want a second pass on phrasing, tone, and how human the final writing feels.",
    tags: ["writing", "rewrite", "text"],
  },
  {
    name: "Virvid",
    url: "https://virvid.ai/home",
    category: "ai-agents",
    role: "AI video tool",
    state: "Shorts",
    description: "AI shorts generator for faceless social videos and fast content production.",
    detail: "Built for quick social-first content when you want scripts, visuals, and short-form output in one place.",
    tags: ["video", "shorts", "social"],
  },
  {
    name: "OpenAI Platform",
    url: "https://platform.openai.com/home",
    category: "ai-agents",
    role: "API console",
    state: "Platform",
    description: "API dashboard for models, keys, billing, playgrounds, and developer workflows.",
    detail: "A direct jump into the builder side of AI rather than the consumer chat side.",
    tags: ["api", "developer", "models"],
  },
  {
    name: "Claude Platform",
    url: "https://platform.claude.com/settings/billing",
    category: "ai-agents",
    role: "Platform billing",
    state: "Claude Dev",
    description: "Anthropic developer platform billing and settings area for managing Claude usage and account details.",
    detail: "This belongs with the AI platforms because it is part of your Claude developer workflow rather than a general finance tool.",
    tags: ["claude", "billing", "platform"],
  },
  {
    name: "Aidentika",
    url: "https://www.aidentika.com",
    category: "ai-agents",
    role: "Product visuals",
    state: "E-commerce",
    description: "AI product photo and marketplace visual generator for e-commerce content.",
    detail: "Good when you want product imagery and listing visuals without a full shoot or studio setup.",
    tags: ["product", "photos", "ecommerce"],
  },
  {
    name: "MiroFish",
    url: "https://mirofish.homes",
    category: "ai-agents",
    role: "Scenario simulator",
    state: "Forecast",
    description: "AI simulation workspace for running what-if scenarios and future-style prediction flows.",
    detail: "Best for exploring scenarios and generated reports instead of plain chat answers.",
    tags: ["simulation", "forecast", "analysis"],
  },
  {
    name: "Google Jules",
    url: "https://jules.google.com/session",
    category: "ai-agents",
    role: "Coding agent",
    state: "Google Dev",
    description: "Google's AI coding agent workspace for repo-aware development tasks, fixes, and implementation help.",
    detail: "A strong fit for the AI lane because it is an agent-style coding assistant rather than a plain build console.",
    tags: ["coding", "agent", "google"],
  },
  {
    name: "Xiaomi MiMo Studio",
    url: "https://aistudio.xiaomimimo.com/#/c",
    category: "ai-agents",
    role: "AI workspace",
    state: "MiMo",
    description: "Xiaomi MiMo Studio workspace for working with Xiaomi's AI tools and agent-style studio features.",
    detail: "This fits AI & Agents because it is an AI studio workspace rather than a deployment console or generic learning portal.",
    tags: ["ai", "studio", "xiaomi"],
  },
  {
    name: "Skywork",
    url: "https://skywork.ai/",
    category: "ai-agents",
    role: "Workspace agent",
    state: "Research",
    description: "AI workspace agent for turning prompts into docs, slides, sheets, webpages, podcasts, and research-heavy outputs.",
    detail: "A natural AI-lane addition because it acts like a multimodal workspace agent instead of a single-purpose design or coding tool.",
    tags: ["workspace", "research", "slides"],
  },
  {
    name: "There's An AI For That",
    url: "https://theresanaiforthat.com",
    category: "ai-agents",
    role: "AI directory",
    state: "Discovery",
    description: "Searchable directory of AI tools for finding products by task, niche, and use case.",
    detail: "A natural fit for AI & Agents because it helps you discover and compare AI apps rather than do one job itself.",
    tags: ["ai-tools", "directory", "discovery"],
  },
  {
    name: "DataRace",
    url: "https://www.datarace.ai/en/races",
    category: "ai-agents",
    role: "AI competitions",
    state: "Challenges",
    description: "Artificial intelligence competition platform for joining model-building races and competing for prize pools.",
    detail: "It belongs in AI & Agents because it gives you a direct route to practical AI challenges, active races, and competition results.",
    tags: ["ai", "competitions", "models"],
  },
  {
    name: "Firebase Console",
    url: "https://console.firebase.google.com/u/0/?pli=1",
    category: "build-ship",
    role: "Backend console",
    state: "Infra",
    description: "Firebase dashboard for auth, Firestore, storage, hosting, analytics, and project config.",
    detail: "This is your backend nerve center when you need to check app state or service setup fast.",
    tags: ["backend", "firebase", "hosting"],
  },
  {
    name: "Google Colab",
    url: "https://colab.research.google.com",
    category: "build-ship",
    role: "Notebook runtime",
    state: "Python",
    description: "Cloud notebook environment for Python experiments, quick model tests, and shareable code sessions.",
    detail: "A strong Build & Ship fit because it is one of the fastest ways to run notebooks, scripts, and ML experiments.",
    tags: ["python", "notebooks", "colab"],
  },
  {
    name: "Emergent",
    url: "https://app.emergent.sh/home",
    category: "build-ship",
    role: "AI app builder",
    state: "No-code build",
    description: "AI-powered application builder for turning ideas into production-ready web apps, mobile tools, and custom software.",
    detail: "It belongs in Build & Ship because the main outcome is launching applications, even if the workflow starts with AI conversation.",
    tags: ["builder", "apps", "no-code"],
  },
  {
    name: "Replit",
    url: "https://replit.com",
    category: "build-ship",
    role: "Cloud IDE",
    state: "Code",
    description: "Browser-based coding environment for building, testing, and shipping quickly.",
    detail: "Great when you want to jump into code from anywhere without waiting on a local setup.",
    tags: ["coding", "ide", "cloud"],
  },
  {
    name: "Netlify - Polo Residence",
    url: "https://app.netlify.com/projects/poloresidence/overview",
    category: "build-ship",
    role: "Deploy dashboard",
    state: "Deploy",
    description: "Project-specific Netlify control panel for builds, deploys, and site settings.",
    detail: "Kept separate as a direct route into the specific project dashboard you already use.",
    tags: ["netlify", "deployment", "project"],
  },
  {
    name: "ruflo",
    url: "https://github.com/ruvnet/ruflo",
    category: "github-repos",
    role: "Open-source framework",
    state: "Agents",
    description: "Agent orchestration platform for Claude and Codex with swarms, workflow coordination, and RAG-friendly patterns.",
    detail: "Useful as a serious repo to revisit when you want multi-agent workflow ideas or orchestration patterns.",
    tags: ["github", "agents", "orchestration"],
  },
  {
    name: "everything-claude-code",
    url: "https://github.com/affaan-m/everything-claude-code",
    category: "github-repos",
    role: "Repo collection",
    state: "Claude Code",
    description: "Claude Code and agent-harness optimization system covering skills, memory, security, and research-first workflows.",
    detail: "A strong reference repo when you want better patterns for AI coding assistants and agent setup.",
    tags: ["github", "claude-code", "reference"],
  },
  {
    name: "agency-agents",
    url: "https://github.com/msitarzewski/agency-agents",
    category: "github-repos",
    role: "Agent library",
    state: "Team of agents",
    description: "Large collection of specialized AI agents for engineering, design, marketing, product, testing, and more.",
    detail: "Useful when you want inspiration for role-based agents or a broader multi-specialist workflow setup.",
    tags: ["github", "agents", "library"],
  },
  {
    name: "career-ops",
    url: "https://github.com/santifer/career-ops",
    category: "github-repos",
    role: "Career system",
    state: "Job search AI",
    description: "AI-powered job search system built around Claude Code with a dashboard, batch workflows, and PDF generation.",
    detail: "Fits well as a practical repo for automating job search flows and organizing application work.",
    tags: ["github", "job-search", "automation"],
  },
  {
    name: "public-apis",
    url: "https://github.com/public-apis/public-apis",
    category: "github-repos",
    role: "API directory",
    state: "Reference",
    description: "Massive open list of free APIs that is useful for product ideas, integrations, and rapid prototyping.",
    detail: "A handy repo to keep close when you need data sources, integrations, or inspiration for new builds.",
    tags: ["github", "apis", "resources"],
  },
  {
    name: "polymarket-pipeline",
    url: "https://github.com/brodyautomates/polymarket-pipeline",
    category: "github-repos",
    role: "Trading pipeline",
    state: "Polymarket",
    description: "Event-driven AI trading pipeline that watches breaking news, scores market impact, and trades niche Polymarket markets automatically.",
    detail: "This fits the repo lane because it is a reusable open-source system you may want to revisit, study, or borrow ideas from.",
    tags: ["github", "polymarket", "trading"],
  },
  {
    name: "2027 AI College Jobs",
    url: "https://github.com/speedyapply/2027-AI-College-Jobs",
    category: "github-repos",
    role: "Job board repo",
    state: "Internships",
    description: "GitHub-based list of 2027 AI and machine learning internships plus new graduate roles, updated frequently.",
    detail: "It belongs in the repo lane because the source itself is a GitHub job list rather than a normal job platform.",
    tags: ["github", "jobs", "internships"],
  },
  {
    name: "godmode",
    url: "https://github.com/noobygains/godmode",
    category: "github-repos",
    role: "AI dev framework",
    state: "Skills",
    description: "AI development framework with composable skills for Claude Code, Cursor, Codex, and OpenCode workflows.",
    detail: "A clean repo-lane addition because it is a development framework you may want as a reference for agent workflows.",
    tags: ["github", "framework", "agents"],
  },
  {
    name: "Vizard",
    url: "https://vizard.ai/workspace",
    category: "creator-studio",
    role: "Video clipping",
    state: "AI edit",
    description: "AI-powered video clipping and repurposing tool for reels, shorts, and highlights.",
    detail: "Useful when you need to slice longer footage into platform-ready social clips quickly.",
    tags: ["video", "clips", "social"],
  },
  {
    name: "Online Video Cutter",
    url: "https://online-video-cutter.com/remove-logo",
    category: "creator-studio",
    role: "Browser editor",
    state: "Quick fix",
    description: "Fast in-browser video editing for trimming, removing marks, and small utility edits.",
    detail: "A lightweight lane for quick cleanup when opening a full editor would be overkill.",
    tags: ["video", "editing", "utility"],
  },
  {
    name: "Figma",
    url: "https://www.figma.com/login?is_not_gen_0=true",
    category: "creator-studio",
    role: "Design workspace",
    state: "Design",
    description: "Collaborative UI and product design platform for layouts, flows, and prototypes.",
    detail: "Your go-to design board when ideas need a cleaner structure than notes or screenshots.",
    tags: ["ui", "design", "prototype"],
  },
  {
    name: "Canva",
    url: "https://www.canva.com",
    category: "creator-studio",
    role: "Design suite",
    state: "Visuals",
    description: "Visual design platform for presentations, social posts, docs, video assets, and fast branded content.",
    detail: "It fits Creator Studio because it covers practical everyday design work that sits next to Figma, Gamma, and motion tools.",
    tags: ["design", "graphics", "templates"],
  },
  {
    name: "123apps",
    url: "https://123apps.com",
    category: "creator-studio",
    role: "Media utilities",
    state: "Toolbox",
    description: "Collection of browser tools for audio, video, PDF, and file conversion tasks.",
    detail: "Useful as the fast utility lane when you need practical file work without installing software.",
    tags: ["audio", "video", "files"],
  },
  {
    name: "Jitter",
    url: "https://jitter.video/files/",
    category: "creator-studio",
    role: "Motion design",
    state: "Motion",
    description: "Web motion design tool for lightweight animations, brand movement, and fast exports.",
    detail: "A clean motion lane when static design is not enough and you want animated output quickly.",
    tags: ["animation", "motion", "brand"],
  },
  {
    name: "MotionBGS",
    url: "https://motionbgs.com",
    category: "creator-studio",
    role: "Background assets",
    state: "Backgrounds",
    description: "Animated wallpaper and moving background source for videos, screens, and visuals.",
    detail: "Useful when you want fast moving backgrounds or loops to dress up content and pages.",
    tags: ["backgrounds", "wallpapers", "motion"],
  },
  {
    name: "AirHint",
    url: "https://www.airhint.com/ru",
    category: "travel-flights",
    role: "Travel timing",
    state: "Flights",
    description: "Flight price prediction tool for deciding whether to book now or wait.",
    detail: "It now lives with the other flight tools so booking timing and travel search stay together in one place.",
    tags: ["travel", "prices", "prediction"],
  },
  {
    name: "Arkham Intel",
    url: "https://intel.arkm.com",
    category: "markets-signals",
    role: "Crypto intelligence",
    state: "On-chain",
    description: "On-chain intelligence dashboard for wallet tracking, entity data, and market flow context.",
    detail: "A strong fit for following wallet activity and bigger money movements in crypto.",
    tags: ["crypto", "wallets", "intel"],
  },
  {
    name: "Altcoin Season Index",
    url: "https://www.blockchaincenter.net/altcoin-season-index/",
    category: "markets-signals",
    role: "Market indicator",
    state: "Indicator",
    description: "Quick crypto market regime indicator for altcoin-vs-Bitcoin momentum context.",
    detail: "Useful as a fast signal check before going deeper into charts, narratives, or portfolio decisions.",
    tags: ["crypto", "alts", "market"],
  },
  {
    name: "Blossom Social",
    url: "https://www.blossomsocial.com",
    category: "markets-signals",
    role: "Investor community",
    state: "Social investing",
    description: "Social investing community for following portfolios, trades, dividends, and market commentary from other investors.",
    detail: "A natural fit for Markets & Signals because it adds community-driven market ideas and portfolio insight to your finance stack.",
    tags: ["investing", "community", "markets"],
  },
  {
    name: "InvoApp",
    url: "https://app.invoapp.com",
    category: "markets-signals",
    role: "Trading platform",
    state: "Trader workspace",
    description: "Trading-focused workspace for developing market skills and keeping your trader workflow close at hand.",
    detail: "It lives in Markets & Signals as requested, beside your crypto intelligence, indicators, and investing tools.",
    tags: ["trading", "markets", "trader"],
  },
  {
    name: "Skyscanner",
    url: "https://www.skyscanner.net",
    category: "travel-flights",
    role: "Flight search",
    state: "Travel",
    description: "Flight comparison and travel planning platform for exploring routes, prices, and date options.",
    detail: "This is one of the core travel tools, so it anchors the new travel lane alongside booking and prediction links.",
    tags: ["travel", "flights", "search"],
  },
  {
    name: "Google Flights",
    url: "https://www.google.com/travel/flights",
    category: "travel-flights",
    role: "Flight explorer",
    state: "Google Travel",
    description: "Google's flight search and comparison tool for tracking routes, dates, and price changes.",
    detail: "A clean addition to the travel lane because it is one of the fastest ways to compare flights and dates.",
    tags: ["travel", "google", "flights"],
  },
  {
    name: "FootyBite",
    url: "https://live.footybite.to",
    category: "media-streaming",
    role: "Sports portal",
    state: "Live sports",
    description: "Match-day football streaming portal for live game access and quick navigation.",
    detail: "Kept inside the media lane so entertainment links stay separate from your work stack.",
    tags: ["sports", "football", "live"],
  },
  {
    name: "Setanta Sports",
    url: "https://app.setantasports.com/home",
    category: "media-streaming",
    role: "Sports platform",
    state: "Live sports",
    description: "Streaming home for live sports, replays, and match coverage inside the Setanta platform.",
    detail: "This fits naturally beside the other sports and media links so match-day access stays in one lane.",
    tags: ["sports", "streaming", "matches"],
  },
  {
    name: "M4UHD",
    url: "https://streamiloo.to/watch/movie/1339713",
    category: "media-streaming",
    role: "Movie portal",
    state: "Movies",
    description: "Movie and TV streaming portal for quick browsing and watching.",
    detail: "Useful as a direct entertainment jump instead of hunting through search results later.",
    tags: ["movies", "tv", "streaming"],
  },
  {
    name: "CineHD",
    url: "https://cinehd.app",
    category: "media-streaming",
    role: "Streaming guide",
    state: "Watch",
    description: "Movie and streaming portal for browsing titles and opening watch options.",
    detail: "Sits in the media lane as a clean shortcut for film browsing away from the main productivity tools.",
    tags: ["movies", "shows", "watch"],
  },
  {
    name: "Adescargar",
    url: "https://adescargar.net",
    category: "media-streaming",
    role: "Download portal",
    state: "Downloads",
    description: "Android apps, games, and media download portal for quick access to updated files.",
    detail: "Separated into media so it stays easy to find without mixing into the work and AI lanes.",
    tags: ["android", "downloads", "apps"],
  },
  {
    name: "AceInterview AI",
    url: "https://aceinterview.ai/dashboard",
    category: "job-searches",
    role: "Interview prep",
    state: "Case practice",
    description: "AI interviewer for consulting case interview practice with feedback, scoring, and voice-based sessions.",
    detail: "Best for keeping interview prep close by when you want to practice and improve on real-style case prompts.",
    tags: ["interview", "consulting", "practice"],
  },
  {
    name: "Anthropic Courses",
    url: "https://anthropic.skilljar.com",
    category: "ai-agents",
    role: "Learning portal",
    state: "Courses",
    description: "Anthropic's course hub for Claude, Claude Code, MCP, skills, AI fluency, and related learning paths.",
    detail: "A great place to revisit whenever you want official learning material for Claude workflows and tooling.",
    tags: ["learning", "anthropic", "courses"],
  },
  {
    name: "The Forage",
    url: "https://www.theforage.com/dashboard",
    category: "job-searches",
    role: "Career prep",
    state: "Job sims",
    description: "Free job simulations and career preparation platform designed around real company task experiences.",
    detail: "Useful when you want structured career practice, employer-backed tasks, and role discovery in one place.",
    tags: ["career", "job-simulations", "learning"],
  },
  {
    name: "Scholarship Union",
    url: "https://scholarshipunion.com",
    category: "job-searches",
    role: "Opportunities hub",
    state: "Scholarships",
    description: "Scholarship and opportunities platform for scholarships, internships, fellowships, summits, and job openings.",
    detail: "It fits Job Searches because it helps you find real opportunities rather than acting like a course platform.",
    tags: ["scholarships", "internships", "opportunities"],
  },
  {
    name: "ArbiHunter",
    url: "https://arbihunter.com/en",
    category: "job-searches",
    role: "Remote jobs",
    state: "Hiring",
    description: "Remote-first jobs and career platform with roles across digital, AI, crypto, and tech-focused work.",
    detail: "It sits in Job Searches so your application and work-hunting tools stay together instead of being scattered.",
    tags: ["jobs", "remote", "career"],
  },
  {
    name: "DataAnnotation Coding",
    url: "https://www.dataannotation.tech/coding",
    category: "job-searches",
    role: "Work platform",
    state: "Earn",
    description: "Coding and annotation work platform connected to AI training tasks.",
    detail: "Useful as a practical side-work lane when you want to check coding task opportunities quickly.",
    tags: ["work", "coding", "tasks"],
  },
  {
    name: "NextWork",
    url: "https://nextwork.ai",
    category: "learning-courses",
    role: "Hands-on learning",
    state: "Build to learn",
    description: "Hands-on learning platform focused on building projects so you learn technical concepts by doing instead of just reading.",
    detail: "This belongs in Learning & Courses because its main job is guided skill-building rather than serving as a work tool itself.",
    tags: ["learning", "projects", "skills"],
  },
  {
    name: "Kaggle Learn",
    url: "https://www.kaggle.com/learn",
    category: "learning-courses",
    role: "ML learning",
    state: "Data skills",
    description: "Short practical courses for data science, machine learning, Python, SQL, and notebook-based learning.",
    detail: "A strong learning-lane fit because it is focused on structured skill-building through guided lessons and notebooks.",
    tags: ["kaggle", "data-science", "courses"],
  },
  {
    name: "Coursera",
    url: "https://www.coursera.org/",
    category: "learning-courses",
    role: "Course platform",
    state: "Certificates",
    description: "Large online course platform for certificates, university programs, technical skills, and career learning paths.",
    detail: "Useful in the learning lane as a broad source of structured courses when you want deeper long-form study.",
    tags: ["courses", "certificates", "learning"],
  },
  {
    name: "Udemy",
    url: "https://www.udemy.com/",
    category: "learning-courses",
    role: "Course marketplace",
    state: "Skill courses",
    description: "Massive marketplace of practical video courses across software, business, design, AI, and productivity topics.",
    detail: "It belongs with learning because it is a fast way to pick up specific skills through standalone targeted courses.",
    tags: ["courses", "skills", "video"],
  },
  {
    name: "MuscleWiki",
    url: "https://musclewiki.com",
    category: "utility-life",
    role: "Fitness guide",
    state: "Training",
    description: "Exercise reference guide organized by muscle group and movement.",
    detail: "A simple utility lane for training ideas, exercise lookup, and form inspiration.",
    tags: ["fitness", "exercise", "health"],
  },
  {
    name: "iFixit",
    url: "https://www.ifixit.com",
    category: "utility-life",
    role: "Repair guides",
    state: "Fixes",
    description: "Repair manual and parts guide for phones, laptops, gadgets, and home electronics.",
    detail: "A good Utility & Lifestyle fit because it is a practical repair reference you may want quickly outside work tools.",
    tags: ["repair", "hardware", "guides"],
  },
  {
    name: "Goal1",
    url: "https://goal1.live/index.html",
    category: "utility-life",
    role: "Daily utility",
    state: "General use",
    description: "General-purpose daily site added to your personal dashboard for quick repeat access.",
    detail: "I placed this in Utility & Lifestyle because the target page could not be inspected cleanly and it did not clearly fit AI, jobs, markets, travel, or media.",
    tags: ["utility", "daily", "general"],
  },
];

const filterRow = document.getElementById("filterRow");
const laneOverview = document.getElementById("laneOverview");
const toolSections = document.getElementById("toolSections");
const resultSummary = document.getElementById("resultSummary");
const searchInput = document.getElementById("searchInput");
const emptyState = document.getElementById("emptyState");
const randomLaunchButton = document.getElementById("randomLaunch");
const cursorLabel = document.getElementById("cursorLabel");
const searchDock = document.getElementById("searchDock");

const orderedCategories = categories.filter((category) => category.id !== "all");

const state = {
  activeCategory: "all",
  searchTerm: "",
};

function getCategory(categoryId) {
  return categories.find((category) => category.id === categoryId);
}

function cleanDomain(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch (error) {
    return url;
  }
}

function getFaviconUrl(url) {
  return `https://www.google.com/s2/favicons?sz=128&domain_url=${encodeURIComponent(url)}`;
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getFilteredApps() {
  const search = state.searchTerm.trim().toLowerCase();

  return apps.filter((app) => {
    const matchesCategory = state.activeCategory === "all" || app.category === state.activeCategory;
    if (!matchesCategory) {
      return false;
    }

    if (!search) {
      return true;
    }

    const haystack = [
      app.name,
      app.role,
      app.description,
      app.detail,
      app.state,
      getCategory(app.category)?.label || "",
      ...app.tags,
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(search);
  });
}

function scrollToVisibleTools() {
  const firstSection = toolSections.querySelector(".tool-section");
  if (!firstSection) {
    return;
  }

  const dockHeight = searchDock ? searchDock.getBoundingClientRect().height : 0;
  const viewportTop = window.scrollY + firstSection.getBoundingClientRect().top;
  const targetTop = Math.max(viewportTop - dockHeight - 20, 0);

  window.scrollTo({
    top: targetTop,
    behavior: "smooth",
  });
}

function applyCategoryFilter(categoryId, options = {}) {
  state.activeCategory = categoryId;
  renderAppView();

  if (options.scrollToTools) {
    requestAnimationFrame(() => {
      scrollToVisibleTools();
    });
  }
}

function renderFilters() {
  filterRow.innerHTML = categories
    .map((category) => {
      const isActive = category.id === state.activeCategory;
      return `
        <button
          class="filter-button ${isActive ? "is-active" : ""}"
          type="button"
          data-filter="${category.id}"
        >
          ${escapeHtml(category.label)}
        </button>
      `;
    })
    .join("");

  filterRow.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      applyCategoryFilter(button.dataset.filter, {
        scrollToTools: button.dataset.filter !== "all",
      });
    });
  });
}

function renderLaneOverview() {
  laneOverview.innerHTML = orderedCategories
    .map((category, index) => {
      const laneApps = apps.filter((app) => app.category === category.id);
      const previewTags = laneApps.slice(0, 3).map((app) => `<span>${escapeHtml(app.name)}</span>`).join("");

      return `
        <article class="lane-card" style="--accent: ${category.accent}">
          <div class="lane-card-header">
            <span class="lane-index">Lane ${String(index + 1).padStart(2, "0")}</span>
            <span class="lane-count">${laneApps.length} tools</span>
          </div>
          <h3>${escapeHtml(category.label)}</h3>
          <p>${escapeHtml(category.blurb)}</p>
          <div class="lane-card-tags">${previewTags}</div>
          <button class="lane-card-button" type="button" data-lane-filter="${category.id}">Open lane</button>
        </article>
      `;
    })
    .join("");

  laneOverview.querySelectorAll("[data-lane-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      applyCategoryFilter(button.dataset.laneFilter, {
        scrollToTools: true,
      });
    });
  });
}

function renderSections(filteredApps) {
  const sections = orderedCategories
    .map((category, index) => {
      const laneApps = filteredApps.filter((app) => app.category === category.id);
      if (!laneApps.length) {
        return "";
      }

      const cards = laneApps
        .map((app) => {
          const domain = cleanDomain(app.url);
          const accent = category.accent;
          const initial = app.name.charAt(0).toUpperCase();

          const tags = app.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("");

          return `
            <article
              class="tool-card"
              style="--accent: ${accent}"
              data-name="${escapeHtml(app.name)}"
              data-lane="${escapeHtml(category.label)}"
            >
              <div class="tool-card-head">
                <div class="tool-card-title">
                  <div class="tool-logo">
                    <span class="tool-logo-fallback">${escapeHtml(initial)}</span>
                    <img src="${getFaviconUrl(app.url)}" alt="" loading="lazy" />
                  </div>

                  <div class="tool-meta">
                    <p class="tool-role">${escapeHtml(app.role)}</p>
                    <h3>${escapeHtml(app.name)}</h3>
                    <p class="tool-domain">${escapeHtml(domain)}</p>
                  </div>
                </div>

                <span class="tool-state">${escapeHtml(app.state)}</span>
              </div>

              <p class="tool-description">${escapeHtml(app.description)}</p>

              <div class="tool-about">
                <span>Why it lives here</span>
                <p>${escapeHtml(app.detail)}</p>
              </div>

              <div class="tool-tags">${tags}</div>

              <div class="tool-footer">
                <span class="tool-category-pill">${escapeHtml(category.label)}</span>
                <a class="tool-link" href="${app.url}" target="_blank" rel="noreferrer noopener">Open site</a>
              </div>
            </article>
          `;
        })
        .join("");

      return `
        <section class="tool-section" style="--accent: ${category.accent}">
          <div class="section-head">
            <div>
              <span class="lane-index">Lane ${String(index + 1).padStart(2, "0")}</span>
              <h2>${escapeHtml(category.label)}</h2>
              <p>${escapeHtml(category.blurb)}</p>
            </div>
            <span class="section-count">${laneApps.length} shown</span>
          </div>

          <div class="tool-grid">
            ${cards}
          </div>
        </section>
      `;
    })
    .join("");

  toolSections.innerHTML = sections;

  toolSections.querySelectorAll(".tool-logo img").forEach((image) => {
    image.addEventListener("error", () => {
      image.remove();
    });
  });
}

function renderSummary(filteredApps) {
  const category = getCategory(state.activeCategory);
  const laneCount = orderedCategories.filter((item) => filteredApps.some((app) => app.category === item.id)).length;

  if (state.activeCategory === "all") {
    resultSummary.textContent = `Showing ${filteredApps.length} tools across ${laneCount} lanes.`;
    return;
  }

  resultSummary.textContent = `Showing ${filteredApps.length} tools in ${category.label}.`;
}

function updateHeroStats() {
  const total = apps.length;
  const personal = apps.filter((app) => app.category === "my-apps").length;

  document.getElementById("heroTotal").textContent = String(total);
  document.getElementById("heroCategories").textContent = String(orderedCategories.length);
  document.getElementById("heroPersonal").textContent = String(personal);
}

function bindCardMotion() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  toolSections.querySelectorAll(".tool-card").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const relativeX = (event.clientX - rect.left) / rect.width;
      const relativeY = (event.clientY - rect.top) / rect.height;
      const rotateY = (relativeX - 0.5) * 12;
      const rotateX = (0.5 - relativeY) * 12;

      card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });
}

function renderAppView() {
  renderFilters();

  const filteredApps = getFilteredApps();
  renderSummary(filteredApps);
  renderSections(filteredApps);
  bindCardMotion();

  emptyState.classList.toggle("hidden", filteredApps.length !== 0);
}

function setupSearch() {
  searchInput.addEventListener("input", (event) => {
    state.searchTerm = event.target.value;
    renderAppView();
  });
}

function setupRandomLaunch() {
  randomLaunchButton.addEventListener("click", () => {
    const filteredApps = getFilteredApps();
    const source = filteredApps.length ? filteredApps : apps;
    const randomApp = source[Math.floor(Math.random() * source.length)];
    window.open(randomApp.url, "_blank", "noopener,noreferrer");
  });
}

function setupPointerEffects() {
  document.addEventListener("pointermove", (event) => {
    document.body.style.setProperty("--mouse-x", `${event.clientX}px`);
    document.body.style.setProperty("--mouse-y", `${event.clientY}px`);

    const card = event.target.closest(".tool-card");

    if (window.innerWidth <= 860 || !card) {
      cursorLabel.classList.remove("is-active");
      return;
    }

    cursorLabel.style.transform = `translate3d(${event.clientX + 16}px, ${event.clientY + 16}px, 0)`;
    cursorLabel.textContent = `${card.dataset.name} | ${card.dataset.lane}`;
    cursorLabel.classList.add("is-active");
  });
}

function init() {
  updateHeroStats();
  renderLaneOverview();
  renderAppView();
  setupSearch();
  setupRandomLaunch();
  setupPointerEffects();
}

init();
