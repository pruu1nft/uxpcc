const competitors = [
  {
    id: "ux-pilot",
    name: "UX Pilot + Nodey",
    category: "AI UX/UI Design Platform",
    website: "uxpilot.ai",
    description: "AI design automation platform for product teams, combining UX Pilot Studio with Nodey, a Figma-native AI design agent.",
    icp: ["Product designers", "UX/UI designers", "PMs", "Product teams"],
    positioning: "Ideate, design, refine, and hand off web applications in one place, with Nodey generating native Figma layers inside the team's existing Figma file.",
    pricing: "Free plan with 45 credits; paid plans start at $14/month according to UX Pilot pricing pages and AI instructions.",
    coreFeatures: ["Wireframe to HiFi", "Nodey in Figma", "Design system sync", "Figma export", "Code export", "Predictive heatmaps"],
    aiCapabilities: ["Prompt to UX/UI", "PRD to flows", "Section refinement", "Image/sketch/PDF input", "Simple Sync component reuse"],
    strengths: ["Figma-native Nodey workflow", "Native editable Figma layers", "Real design system reuse through Simple Sync", "Fast design generation", "Wireframe to HiFi workflow"],
    weaknesses: ["Credit-based generation can matter for heavy usage", "Positioning must stay clear against code-first and website-first tools", "Enterprise workflow proof needs continued depth"],
    acquisitionChannels: ["SEO", "Figma plugin ecosystem", "Templates", "Community", "Content"],
    seoStrength: 7,
    productStrength: 8,
    brandStrength: 7,
    aiStrength: 8,
    uxDepth: 9,
    pricingClarity: 8,
    speedToValue: 9,
    collaboration: 7,
    enterpriseReadiness: 6,
    differentiation: 8,
    threatLevel: 0,
    opportunityScore: 9,
    tags: ["Benchmark", "Nodey", "Figma Native"],
    lastReviewed: "2026-06-25",
    sources: [
      { title: "UX Pilot official website", url: "https://uxpilot.ai/", type: "website", date: "2026-06-25", confidence: "high" },
      { title: "Nodey official page", url: "https://uxpilot.ai/nodey", type: "website", date: "2026-06-25", confidence: "high" },
      { title: "UX Pilot infos.pdf", url: "UX Pilot infos.pdf", type: "manual", date: "2026-06-25", confidence: "high" }
    ],
    changelog: ["Official site positions UX Pilot as smarter product design with AI, done in seconds.", "Nodey page validates Figma-native layers, Simple Sync, and same-account UX Pilot workflow."],
    recommendations: ["Validate Figma-native design system reuse with more visible proof.", "Keep positioning focused on product UX workflows, not generic screen generation.", "Be explicit where UX Pilot is weaker than code-first, website-first, or full app-builder competitors."]
  },
  {
    id: "magicpath",
    name: "MagicPath 2.0",
    category: "Agentic Design Workspace",
    website: "magicpath.ai",
    description: "AI design tool built around an infinite canvas, reframed in v2 as a shared workspace for humans and agents.",
    icp: ["Design teams", "Product teams", "AI-native builders"],
    positioning: "A multiplayer, agentic canvas where humans and agents work on multiple tasks simultaneously.",
    pricing: "Pricing not verified in reviewed sources.",
    coreFeatures: ["Infinite canvas", "Multi-agent workspace", "Design system structure", "Figma import/export"],
    aiCapabilities: ["Multi-agent execution", "Parallel tasks", "Design generation", "Workspace automation"],
    strengths: ["Excellent Canva-style interface", "Strong UX and responsiveness", "Multi-agent support", "Structured design system"],
    weaknesses: ["Figma import/export issues", "Some workflows still broken or incomplete", "Not Figma-native like Nodey"],
    acquisitionChannels: ["Product-led launch", "AI design community", "Website"],
    seoStrength: 6,
    productStrength: 9,
    brandStrength: 7,
    aiStrength: 9,
    uxDepth: 8,
    pricingClarity: 4,
    speedToValue: 8,
    collaboration: 9,
    enterpriseReadiness: 6,
    differentiation: 9,
    threatLevel: 9,
    opportunityScore: 8,
    tags: ["9/10 Report", "Multi-agent", "Canvas"],
    lastReviewed: "2026-06-25",
    sources: [{ title: "MagicPath 2.pdf", url: "MagicPath 2.pdf", type: "manual", date: "2026-06-25", confidence: "high" }],
    changelog: ["v2 reframed MagicPath as a shared workspace for humans and agents."],
    recommendations: ["Watch multi-agent UX patterns closely because MagicPath may feel more advanced for parallel creative work.", "Defend UX Pilot with Figma-native workflow and reliable export only where that workflow is clearly superior.", "Consider parallel task patterns without copying the infinite-canvas dependency."]
  },
  {
    id: "framer-3",
    name: "Framer 3.0",
    category: "Website Canvas + AI Agents",
    website: "framer.com",
    description: "Website builder moving AI into the real website canvas with branching, external agents, and community distribution.",
    icp: ["Web designers", "Founders", "Marketing teams", "Agencies"],
    positioning: "AI edits inside the real website canvas with reviewable branches and publishable output.",
    pricing: "AI credits create potential friction for heavy iteration according to the report.",
    coreFeatures: ["Website canvas", "Branching", "External agents", "Community marketplace", "Publishing"],
    aiCapabilities: ["AI website edits", "AI-assisted branching", "External agent inputs", "Wireframer and workshop tools"],
    strengths: ["Strong AI design launch", "Agents inside real canvas", "Branching for review/merge/rollback", "Community as distribution engine"],
    weaknesses: ["Adjacent rather than direct for product app UI", "Website-first scope", "AI credits may create power-user friction"],
    acquisitionChannels: ["Community", "Templates", "SEO", "Creator ecosystem"],
    seoStrength: 9,
    productStrength: 9,
    brandStrength: 9,
    aiStrength: 8,
    uxDepth: 5,
    pricingClarity: 6,
    speedToValue: 8,
    collaboration: 8,
    enterpriseReadiness: 7,
    differentiation: 9,
    threatLevel: 7,
    opportunityScore: 6,
    tags: ["8/10 Report", "Website", "Branching"],
    lastReviewed: "2026-06-25",
    sources: [
      { title: "Framer 3.pdf", url: "Framer 3.pdf", type: "manual", date: "2026-06-25", confidence: "high" },
      { title: "Framer AI Tools.pdf", url: "Framer AI Tools.pdf", type: "manual", date: "2026-06-25", confidence: "high" }
    ],
    changelog: ["Framer 3.0 introduced a stronger agent/canvas story and branching workflow."],
    recommendations: ["Acknowledge Framer's website publishing and ecosystem advantage.", "Borrow the reviewable-branching mental model for design iteration.", "Position UX Pilot around app/product UX and Figma-native design system fidelity where Framer is less direct."]
  },
  {
    id: "magic-patterns",
    name: "Magic Patterns",
    category: "AI Prototyping + Design Systems",
    website: "magicpatterns.com",
    description: "Feature-rich AI prototyping product with design systems, MCP server, multiplayer, Figma/GitHub sync, and publishing.",
    icp: ["Product teams", "Developers", "Design teams"],
    positioning: "Design-system-first prototyping with broad integrations across Figma, GitHub, MCP, and publishing.",
    pricing: "Credit model noted as a friction risk for power users.",
    coreFeatures: ["Design systems", "MCP server", "Multiplayer", "Figma sync", "GitHub sync", "Publishing"],
    aiCapabilities: ["Prompt to prototype", "Agent Mode", "Integration Skill", "MCP-assisted workflows"],
    strengths: ["Broadest feature coverage in the report", "Good team collaboration", "Strong design-system-first positioning", "MCP and GitHub direction"],
    weaknesses: ["Output is still prototype-grade", "NPM path to real components is not self-serve", "Credit friction", "Design system promise can fail in practice"],
    acquisitionChannels: ["SEO", "Docs", "AI/product builder audience"],
    seoStrength: 7,
    productStrength: 8,
    brandStrength: 7,
    aiStrength: 8,
    uxDepth: 6,
    pricingClarity: 6,
    speedToValue: 7,
    collaboration: 8,
    enterpriseReadiness: 7,
    differentiation: 8,
    threatLevel: 8,
    opportunityScore: 7,
    tags: ["7/10 Report", "MCP", "Prototype"],
    lastReviewed: "2026-06-25",
    sources: [{ title: "Magic Patterns.pdf", url: "Magic Patterns.pdf", type: "manual", date: "2026-06-25", confidence: "high" }],
    changelog: ["Roadmap direction reveals emphasis on Agent Mode, MCP, and design-system-first workflows."],
    recommendations: ["Emphasize that Nodey uses real Figma components as native instances.", "Avoid prototype-code claims unless output is production credible.", "Watch MCP adoption as a distribution channel."]
  },
  {
    id: "paper-design",
    name: "Paper Design",
    category: "Agentic Design Canvas",
    website: "paper.design",
    description: "Agentic HTML/CSS design canvas positioned more like a Figma challenger than a UX Pilot replacement.",
    icp: ["Designers", "Product teams", "AI-forward design teams"],
    positioning: "A new HTML/CSS-based canvas where agents, design, and production-oriented artifacts converge.",
    pricing: "Free/Pro/Org; report references Pro around $15/month.",
    coreFeatures: ["Agentic canvas", "HTML/CSS design", "Design system direction", "Prototype artifacts"],
    aiCapabilities: ["Agent-assisted design", "Canvas generation", "Design iteration"],
    strengths: ["Strategically important direction", "Agentic design future", "Potential Figma challenger", "HTML/CSS canvas model"],
    weaknesses: ["Not a one-to-one UX Pilot competitor today", "Requires users to move to a separate canvas", "Less Figma-native than Nodey"],
    acquisitionChannels: ["Design community", "AI design community", "Product-led"],
    seoStrength: 5,
    productStrength: 8,
    brandStrength: 6,
    aiStrength: 8,
    uxDepth: 7,
    pricingClarity: 7,
    speedToValue: 7,
    collaboration: 6,
    enterpriseReadiness: 5,
    differentiation: 8,
    threatLevel: 7,
    opportunityScore: 8,
    tags: ["7.5/10 Report", "Figma Challenger", "Agentic Canvas"],
    lastReviewed: "2026-06-25",
    sources: [{ title: "Paper Design.pdf", url: "Paper Design.pdf", type: "manual", date: "2026-06-25", confidence: "high" }],
    changelog: ["Report frames Paper as strategically important but not a direct one-to-one competitor today."],
    recommendations: ["Use Nodey's in-Figma positioning only when the buyer values existing Figma workflows.", "Track Paper's agentic canvas model as a category signal.", "Study whether Paper's canvas reduces ideation friction better than UX Pilot."]
  },
  {
    id: "aura-build",
    name: "Aura Build",
    category: "AI Design Asset Builder",
    website: "aura.build",
    description: "Focused AI product with design systems library, contextual image generation, and image-to-video animation.",
    icp: ["Designers", "Creators", "Product marketers"],
    positioning: "A narrow but well-executed tool for generating visual assets and motion from contextual inputs.",
    pricing: "Pricing section exists in the report; exact production pricing not captured in this app dataset.",
    coreFeatures: ["Design systems library", "Contextual image generation", "Image-to-video", "Reusable sections"],
    aiCapabilities: ["Image generation", "Image-to-video animation", "Contextual asset generation"],
    strengths: ["Well-executed narrow workflow", "Interesting contextual image generation", "Image-to-video stands out", "Useful overview docs pattern"],
    weaknesses: ["Narrow problem space", "Not a full UX workflow", "Several features are table stakes"],
    acquisitionChannels: ["Website", "Docs/learn content", "AI design audience"],
    seoStrength: 5,
    productStrength: 7,
    brandStrength: 5,
    aiStrength: 8,
    uxDepth: 4,
    pricingClarity: 5,
    speedToValue: 8,
    collaboration: 4,
    enterpriseReadiness: 4,
    differentiation: 7,
    threatLevel: 6,
    opportunityScore: 7,
    tags: ["7/10 Report", "Visual Assets", "Motion"],
    lastReviewed: "2026-06-25",
    sources: [{ title: "Aura Build.pdf", url: "Aura Build.pdf", type: "manual", date: "2026-06-25", confidence: "high" }],
    changelog: ["Report highlights learn/overview documentation as a pattern UX Pilot may want to emulate."],
    recommendations: ["Consider a clearer product overview documentation hub.", "Do not over-index on image generation unless it supports UX flows."]
  },
  {
    id: "lovable",
    name: "Lovable",
    category: "Full-stack AI App Builder",
    website: "lovable.dev",
    description: "Polished AI-to-code platform for generating functional React apps, strongest for founders and non-technical builders.",
    icp: ["Founders", "Non-technical users", "Product engineers"],
    positioning: "Vibe-coding product that generates functional apps with backend rather than design-native assets.",
    pricing: "Report notes enterprise-only design system access and custom pricing; public plan details not captured here.",
    coreFeatures: ["Full-stack app generation", "Visual edits", "Backend", "Reference upload"],
    aiCapabilities: ["Prompt to app", "Code generation", "Visual edits", "Image reference"],
    strengths: ["Strong front-end output", "Polished product persona", "Growing user base", "Functional app generation"],
    weaknesses: ["Wrong tool for design-led workflows", "Slow generation in tests", "Design system integration is mimicry, not real reuse", "No native Figma output"],
    acquisitionChannels: ["Product-led growth", "Founder community", "AI coding community"],
    seoStrength: 8,
    productStrength: 8,
    brandStrength: 8,
    aiStrength: 8,
    uxDepth: 4,
    pricingClarity: 5,
    speedToValue: 5,
    collaboration: 6,
    enterpriseReadiness: 6,
    differentiation: 8,
    threatLevel: 7,
    opportunityScore: 7,
    tags: ["6.5/10 Report", "Code-first", "Full-stack"],
    lastReviewed: "2026-06-25",
    sources: [
      { title: "Lovable.pdf", url: "Lovable.pdf", type: "manual", date: "2026-06-25", confidence: "high" },
      { title: "Lovable Vs UX Pilot + Nodey.pdf", url: "Lovable Vs UX Pilot + Nodey.pdf", type: "manual", date: "2026-06-25", confidence: "high" }
    ],
    changelog: ["Comparison report states Lovable and UX Pilot/Nodey solve different workflow layers."],
    recommendations: ["Be honest that Lovable is stronger when the user wants a working app fast.", "Position UX Pilot as design-first and Figma-native for teams that need product design quality before implementation.", "Clarify when UX Pilot is not the right tool for full-stack app generation."]
  },
  {
    id: "figma-make",
    name: "Figma Make",
    category: "Figma AI Prototyping",
    website: "figma.com",
    description: "Figma's AI prototyping tool, relevant because it sits inside the Figma ecosystem but outputs a separate prototype-style experience.",
    icp: ["Designers", "PMs", "Figma users"],
    positioning: "Generate UI from prompts inside the Figma ecosystem for exploring fresh ideas.",
    pricing: "Report notes high credit usage; two screens consumed 150 credits from a 3,000-credit plan.",
    coreFeatures: ["Prompt to prototype", "Design system kits", "Figma ecosystem", "Prototype generation"],
    aiCapabilities: ["UI generation", "Prototype generation", "Prompted iteration"],
    strengths: ["Strong interface and UX", "Native Figma ecosystem advantage", "Good idea exploration path"],
    weaknesses: ["High credit cost", "Cannot use complex design systems the way Nodey can", "Prototype-grade output compared with native reusable layers"],
    acquisitionChannels: ["Figma ecosystem", "Native platform distribution"],
    seoStrength: 8,
    productStrength: 8,
    brandStrength: 10,
    aiStrength: 8,
    uxDepth: 6,
    pricingClarity: 5,
    speedToValue: 8,
    collaboration: 8,
    enterpriseReadiness: 8,
    differentiation: 8,
    threatLevel: 9,
    opportunityScore: 7,
    tags: ["Figma Native", "Credit Risk", "Prototype"],
    lastReviewed: "2026-06-25",
    sources: [
      { title: "Figma Make Tool.pdf", url: "Figma Make Tool.pdf", type: "manual", date: "2026-06-25", confidence: "high" },
      { title: "Nodey official page", url: "https://uxpilot.ai/nodey", type: "website", date: "2026-06-25", confidence: "high" }
    ],
    changelog: ["Nodey official page compares Nodey against Figma Make on output location, design system reuse, and editability."],
    recommendations: ["Assume Figma Make has a major native-platform advantage and plan against it directly.", "Make Simple Sync and native Figma layer reuse extremely explicit.", "Clarify where Nodey is more practical than Figma Make, and where it is not."]
  },
  {
    id: "claude-design",
    name: "Claude Design",
    category: "Code-first Visual Prototyping",
    website: "claude.ai",
    description: "Claude's code-first visual prototyping canvas, closer to Nodey than before but still outside Figma.",
    icp: ["Founders", "PMs", "Developers", "Prototype builders"],
    positioning: "Fast web/prototype generation through Claude's own canvas and code workflow.",
    pricing: "Report notes expensive credit consumption with Opus 4.7-style workflows.",
    coreFeatures: ["HTML/CSS/JS prototypes", "React output", "Web capture", "Manual editing"],
    aiCapabilities: ["Prompt to prototype", "Code generation", "Visual generation", "Static SVG/code diagrams"],
    strengths: ["Strong general-purpose model", "Useful for code-first prototypes", "Can read codebase/tokens if setup is organized"],
    weaknesses: ["No native Figma integration", "No dedicated multi-screen design canvas", "Heavy setup path", "Expensive credits"],
    acquisitionChannels: ["Claude platform", "AI developer audience", "General AI adoption"],
    seoStrength: 8,
    productStrength: 8,
    brandStrength: 10,
    aiStrength: 10,
    uxDepth: 5,
    pricingClarity: 5,
    speedToValue: 6,
    collaboration: 5,
    enterpriseReadiness: 8,
    differentiation: 8,
    threatLevel: 8,
    opportunityScore: 7,
    tags: ["Code-first", "Claude", "Prototype"],
    lastReviewed: "2026-06-25",
    sources: [
      { title: "Claude Design Vs UX Pilot + Nodey.pdf", url: "Claude Design Vs UX Pilot + Nodey.pdf", type: "manual", date: "2026-06-25", confidence: "high" },
      { title: "Nodey official page", url: "https://uxpilot.ai/nodey", type: "website", date: "2026-06-25", confidence: "high" }
    ],
    changelog: ["Report concludes Claude Design is now closer to Nodey than before but remains weaker for Figma-native product teams."],
    recommendations: ["Treat Claude's reasoning and brand trust as a serious risk.", "Use the 'inside your existing Figma file' argument when native Figma output matters.", "Position Nodey as lower-friction and more practical for design-system teams only after validating output quality."]
  },
  {
    id: "anima-buddy",
    name: "Anima + Buddy",
    category: "Design-to-code + Figma Agent",
    website: "dev.animaapp.com",
    description: "Design-to-code platform with Buddy, a Figma-native agent concept for creating and editing interfaces in the canvas.",
    icp: ["Designers", "Developers", "Teams with Storybook/design systems"],
    positioning: "A broad design-to-code loop spanning prompt, URL, Figma, database/auth, Storybook, and Figma plugin workflows.",
    pricing: "Pricing not verified in reviewed sources.",
    coreFeatures: ["Figma plugin", "Design-to-code", "Storybook loop", "Database/auth", "Prompt and URL generation"],
    aiCapabilities: ["Generate screens", "Edit in Figma", "Bulk edits", "Multiple model support", "Design system integration"],
    strengths: ["Most complete design-to-code loop in report", "Deep Figma plugin", "Design system import", "Storybook loop", "Full-stack-lite breadth"],
    weaknesses: ["Breadth creates complexity", "Agent execution unreliable in tests", "Long prompts produced errors", "Output differs from UX Pilot's design-first workflow"],
    acquisitionChannels: ["Figma plugin", "Developer/design-to-code market", "Docs"],
    seoStrength: 6,
    productStrength: 7,
    brandStrength: 6,
    aiStrength: 6,
    uxDepth: 5,
    pricingClarity: 4,
    speedToValue: 5,
    collaboration: 6,
    enterpriseReadiness: 7,
    differentiation: 7,
    threatLevel: 6,
    opportunityScore: 6,
    tags: ["6.5/10 Report", "Figma Agent", "Design-to-code"],
    lastReviewed: "2026-06-25",
    sources: [
      { title: "Anima app + Buddy (Figma agent).pdf", url: "Anima app + Buddy (Figma agent).pdf", type: "manual", date: "2026-06-25", confidence: "high" },
      { title: "Anima Agent pasted-text.txt", url: "pasted-text.txt", type: "manual", date: "2026-06-25", confidence: "high" }
    ],
    changelog: ["Pasted Anima Agent notes rate execution at 4/10 due to generation errors despite a strong concept."],
    recommendations: ["Emphasize reliability and native editable layer quality where UX Pilot can prove it.", "Watch Storybook/design system workflows as enterprise signals.", "Study Anima's developer handoff strengths as a gap UX Pilot may need to close."]
  },
  {
    id: "flutterflow",
    name: "FlutterFlow Ecosystem",
    category: "Mature App Builder + Design Tooling",
    website: "flutterflow.io",
    description: "Mature builder ecosystem with FlutterFlow Builder and emerging FlutterFlow Design desktop app.",
    icp: ["App builders", "Developers", "Product teams", "No-code/low-code teams"],
    positioning: "A mature engineering-oriented app builder ecosystem moving toward design workflows.",
    pricing: "Pricing not verified in reviewed sources.",
    coreFeatures: ["App builder", "Components", "Design systems", "Desktop design app", "Flutter output"],
    aiCapabilities: ["AI-assisted building", "Design tooling direction"],
    strengths: ["Mature engineering platform", "Well-built builder", "Promising desktop design app", "Strong production app ecosystem"],
    weaknesses: ["Not a direct UX Pilot competitor today", "Designer workflow still has usability issues", "More app-builder than design agent"],
    acquisitionChannels: ["Developer community", "No-code ecosystem", "Docs"],
    seoStrength: 8,
    productStrength: 8,
    brandStrength: 8,
    aiStrength: 5,
    uxDepth: 5,
    pricingClarity: 6,
    speedToValue: 6,
    collaboration: 7,
    enterpriseReadiness: 8,
    differentiation: 8,
    threatLevel: 5,
    opportunityScore: 6,
    tags: ["6/10 Report", "App Builder", "Desktop Trend"],
    lastReviewed: "2026-06-25",
    sources: [{ title: "FlutterFlow Ecosystem.pdf", url: "FlutterFlow Ecosystem.pdf", type: "manual", date: "2026-06-25", confidence: "high" }],
    changelog: ["Report notes desktop app trend among competitors including FlutterFlow Design."],
    recommendations: ["Monitor FlutterFlow's app-builder completeness and ecosystem depth.", "Keep UX Pilot differentiated as design-first rather than app-builder-first.", "Do not understate FlutterFlow for teams that need real cross-platform app delivery."]
  },
  {
    id: "twenty-first",
    name: "21st.dev + Magic Chat",
    category: "Developer Component Library + AI Chat",
    website: "21st.dev",
    description: "Community component library and Magic Chat design creation feature for React developers.",
    icp: ["React developers", "Product engineers", "Frontend teams"],
    positioning: "Move faster with community components, @ context, and MCP-powered developer workflows.",
    pricing: "$20/month Pro plan with 400 credits according to the report.",
    coreFeatures: ["Community library", "Magic Chat", "@ context system", "MCP layer", "React components"],
    aiCapabilities: ["AI code generation", "Context-aware component generation", "MCP-assisted workflows"],
    strengths: ["Useful community library infrastructure", "@ context system is a standout feature", "MCP layer changes distribution", "Good for React developers"],
    weaknesses: ["Developer-specific", "Canvas gap versus design tools", "Credit limits power users", "Not design-led"],
    acquisitionChannels: ["Developer community", "MCP ecosystem", "Component library"],
    seoStrength: 6,
    productStrength: 7,
    brandStrength: 6,
    aiStrength: 7,
    uxDepth: 3,
    pricingClarity: 7,
    speedToValue: 7,
    collaboration: 5,
    enterpriseReadiness: 5,
    differentiation: 7,
    threatLevel: 5,
    opportunityScore: 7,
    tags: ["6/10 Report", "MCP", "Developer"],
    lastReviewed: "2026-06-25",
    sources: [{ title: "21st.pdf", url: "21st.pdf", type: "manual", date: "2026-06-25", confidence: "high" }],
    changelog: ["Report flags MCP adoption as a growing competitive distribution signal."],
    recommendations: ["Watch MCP distribution patterns.", "Keep UX Pilot's canvas and Figma-native strengths distinct from developer component generation."]
  },
  {
    id: "gamma",
    name: "Gamma",
    category: "AI Presentation + Website Artifact",
    website: "gamma.app",
    description: "Impressive AI document, presentation, and website builder whose output is a hosted Gamma artifact.",
    icp: ["Business teams", "Founders", "Marketers", "Educators"],
    positioning: "Generate polished presentations, documents, and websites quickly from prompts.",
    pricing: "Report covers five tiers and upgrade gates; exact prices not carried into this dataset.",
    coreFeatures: ["Presentations", "Documents", "Website builder", "Hosted publishing", "Agent edits"],
    aiCapabilities: ["Prompt to deck", "Tone edits", "Website generation", "Content generation"],
    strengths: ["Impressive product quality", "Fast hosted publishing", "Strong strategic clarity", "Capital and growth"],
    weaknesses: ["Lives in a different workflow than UX Pilot", "Hosted Gamma artifact, not Figma/product design output", "Overlap with UX Pilot is narrow"],
    acquisitionChannels: ["SEO", "Virality", "Business productivity audience"],
    seoStrength: 8,
    productStrength: 8,
    brandStrength: 8,
    aiStrength: 8,
    uxDepth: 3,
    pricingClarity: 6,
    speedToValue: 9,
    collaboration: 7,
    enterpriseReadiness: 7,
    differentiation: 8,
    threatLevel: 4,
    opportunityScore: 6,
    tags: ["6/10 Report", "Hosted Artifact", "Presentation"],
    lastReviewed: "2026-06-25",
    sources: [{ title: "Gamma App.pdf", url: "Gamma App.pdf", type: "manual", date: "2026-06-25", confidence: "high" }],
    changelog: ["Report concludes Gamma is not a direct threat today but has capital, growth, and strategic clarity."],
    recommendations: ["Treat Gamma as adjacent productivity signal.", "Do not compare UX Pilot to hosted document/presentation artifacts."]
  },
  {
    id: "subframe",
    name: "Subframe",
    category: "Code-native Design Tool",
    website: "subframe.com",
    description: "AI-powered visual design tool that generates React code and Tailwind CSS from the start.",
    icp: ["Developers", "Technical teams", "Design-system engineering teams"],
    positioning: "Design in a visual editor where the result is already real React/Tailwind code using real components.",
    pricing: "Pricing not verified in reviewed sources.",
    coreFeatures: ["Visual editor", "React code", "Tailwind CSS", "Real components", "Design system sync"],
    aiCapabilities: ["AI code generation", "Design-to-code", "Component generation"],
    strengths: ["No design-to-code translation step", "Specific target audience", "Real components from the start", "Useful market learning signal"],
    weaknesses: ["Not for everyone by design", "Developer/technical-team bias", "Not a Figma-native design workflow"],
    acquisitionChannels: ["Developer/design-engineering audience", "Docs", "Product-led"],
    seoStrength: 5,
    productStrength: 8,
    brandStrength: 5,
    aiStrength: 7,
    uxDepth: 5,
    pricingClarity: 4,
    speedToValue: 7,
    collaboration: 6,
    enterpriseReadiness: 7,
    differentiation: 8,
    threatLevel: 6,
    opportunityScore: 7,
    tags: ["Code-native", "React", "Tailwind"],
    lastReviewed: "2026-06-25",
    sources: [{ title: "Subframe Review.pdf", url: "Subframe Review.pdf", type: "manual", date: "2026-06-25", confidence: "high" }],
    changelog: ["Report positions Subframe as relevant market indicator and potential learning opportunity."],
    recommendations: ["Use Subframe to study code-native design system workflows.", "Keep Nodey focused on Figma-native design rather than code-native creation.", "Acknowledge Subframe may be stronger for teams that want design decisions expressed directly in code."]
  },
  {
    id: "figr",
    name: "FigR Products",
    category: "Design System + Figma Reference AI",
    website: "figr.design",
    description: "AI design product tested around design systems, Figma frames, and multiple input sources.",
    icp: ["Designers", "Design-system users", "Product teams"],
    positioning: "Generate designs using design systems, Figma frames, websites, and other references.",
    pricing: "Pricing not verified in reviewed sources.",
    coreFeatures: ["Design system input", "Figma frame references", "Website input", "Generated design system"],
    aiCapabilities: ["Reference-based generation", "Design system generation", "Figma frame interpretation"],
    strengths: ["Can use existing Figma frames as direct references", "Supports multiple input types", "Internal design system input is the main strength"],
    weaknesses: ["Not transparent which components are reused", "Not clear that DS logic and patterns are applied", "External DS test produced generic output"],
    acquisitionChannels: ["Product-led", "Design community"],
    seoStrength: 4,
    productStrength: 6,
    brandStrength: 4,
    aiStrength: 6,
    uxDepth: 5,
    pricingClarity: 3,
    speedToValue: 6,
    collaboration: 4,
    enterpriseReadiness: 4,
    differentiation: 6,
    threatLevel: 5,
    opportunityScore: 7,
    tags: ["Figma References", "Design Systems", "Input Flexibility"],
    lastReviewed: "2026-06-25",
    sources: [{ title: "FigR Products.pdf", url: "FigR Products.pdf", type: "manual", date: "2026-06-25", confidence: "medium" }],
    changelog: ["Report highlights ambiguity around whether component reuse and DS logic are truly applied."],
    recommendations: ["Make UX Pilot/Nodey's real component reuse more transparent.", "Show exactly when generated layers reuse synced components.", "Track FigR if it improves multi-source input and Figma frame generation reliability."]
  },
  {
    id: "mobbin-mcp",
    name: "Mobbin MCP",
    category: "Reference Intelligence Layer",
    website: "mobbin.com",
    description: "Mobbin's MCP connects a large library of real app and website screenshots to agents such as Claude Code and Cursor.",
    icp: ["Designers", "Developers", "AI coding users", "Product teams"],
    positioning: "Let agents search real-world interface references while generating UI.",
    pricing: "Pricing not verified in reviewed sources.",
    coreFeatures: ["600k+ screenshots", "Flow references", "MCP integration", "Agent search"],
    aiCapabilities: ["Reference retrieval", "Agent-assisted design research", "Pattern synthesis"],
    strengths: ["Massive real-world screenshot library", "Strong reference workflow", "MCP turns references into agent context", "Relevant product opportunity signal"],
    weaknesses: ["Not a design generation product itself", "Dependency layer rather than full workflow", "Reference quality still needs synthesis"],
    acquisitionChannels: ["Design reference community", "MCP ecosystem", "SEO"],
    seoStrength: 8,
    productStrength: 7,
    brandStrength: 8,
    aiStrength: 6,
    uxDepth: 7,
    pricingClarity: 4,
    speedToValue: 7,
    collaboration: 5,
    enterpriseReadiness: 6,
    differentiation: 8,
    threatLevel: 4,
    opportunityScore: 9,
    tags: ["MCP", "References", "Market Signal"],
    lastReviewed: "2026-06-25",
    sources: [
      { title: "Mobbin MCP Review.pdf", url: "Mobbin MCP Review.pdf", type: "manual", date: "2026-06-25", confidence: "high" },
      { title: "Anything Mobbin feature review PDF", url: "Anything + Mobbin (Feature).pdf", type: "manual", date: "2026-06-25", confidence: "high" }
    ],
    changelog: ["Mobbin MCP demonstrates agents retrieving real-world UI references during generation."],
    recommendations: ["Consider reference fetching as a UX Pilot/Nodey advantage layer.", "Turn reference retrieval into structured evidence, not just visual inspiration."]
  },
  {
    id: "anything",
    name: "Anything",
    category: "AI Web + Mobile App Builder",
    website: "anything.com",
    description: "AI agent for building mobile apps and web apps from conversation, with design, backend, publishing, Figma import, and Mobbin visual references.",
    icp: ["Founders", "App builders", "Non-technical users", "Mobile-first teams"],
    positioning: "Describe an app in chat and Anything builds web or mobile software, including UI, backend functions, integrations, and launch workflows.",
    pricing: "Subscription and credits model documented in Anything account docs; the internal test had limited free-plan visibility.",
    coreFeatures: ["Prompt to app", "Web apps", "Mobile apps", "Backend functions", "Figma import", "Mobbin references", "Publishing", "Export"],
    aiCapabilities: ["Conversational app building", "Design reasoning", "Visual reference grounding", "Backend generation", "Autonomous testing through Max"],
    strengths: ["Broader app-building scope than UX Pilot", "Mobile and web app coverage", "Built-in backend functions", "Figma and Mobbin references", "Real app publishing path"],
    weaknesses: ["Internal test reported slow progress", "Design depth and Figma editability are less clear than dedicated design tools", "May optimize for app output over product UX reasoning", "Free-plan limits made evaluation incomplete"],
    acquisitionChannels: ["AI app builder audience", "Mobile app builders", "Docs", "Launch/publishing workflows"],
    seoStrength: 6,
    productStrength: 7,
    brandStrength: 5,
    aiStrength: 7,
    uxDepth: 5,
    pricingClarity: 5,
    speedToValue: 5,
    collaboration: 5,
    enterpriseReadiness: 4,
    differentiation: 7,
    threatLevel: 6,
    opportunityScore: 7,
    tags: ["App Builder", "Mobile", "Backend"],
    lastReviewed: "2026-06-25",
    sources: [
      { title: "Anything official docs", url: "https://www.anything.com/docs/welcome", type: "website", date: "2026-06-25", confidence: "high" },
      { title: "Anything design docs", url: "https://www.anything.com/docs/apps/design", type: "website", date: "2026-06-25", confidence: "high" },
      { title: "Anything backend docs", url: "https://www.anything.com/docs/apps/backend", type: "website", date: "2026-06-25", confidence: "high" },
      { title: "Anything Mobbin import docs", url: "https://www.anything.com/docs/import/mobbin", type: "website", date: "2026-06-25", confidence: "high" },
      { title: "Anything Mobbin feature review PDF", url: "Anything + Mobbin (Feature).pdf", type: "manual", date: "2026-06-25", confidence: "medium" }
    ],
    changelog: ["Official docs position Anything as an AI agent that builds mobile apps and web apps from conversation.", "Mobbin is treated as an import/reference feature inside Anything, not a separate combined product."],
    recommendations: ["Acknowledge Anything is stronger for teams seeking a working web/mobile app with backend.", "Position UX Pilot around product UX strategy, Figma-native editability, and design-system control.", "Do not overclaim against Anything in full-stack or mobile-app delivery."]
  },
  {
    id: "stitch",
    name: "Google Stitch",
    category: "AI UI Design + Design System Tool",
    website: "stitch.withgoogle.com",
    description: "Google Stitch is an AI design tool where DESIGN.md acts as a persistent design-system instruction layer for visual identity and generation rules.",
    icp: ["Designers", "Builders", "Teams with brand systems"],
    positioning: "Generate and iterate UI with Google-backed AI, using DESIGN.md as a portable style and design-system memory.",
    pricing: "Pricing not verified in reviewed sources.",
    coreFeatures: ["UI generation", "DESIGN.md", "URL import", "Manual brand rules", "Automatic design system pairing"],
    aiCapabilities: ["Design system generation", "Prompt grounding", "URL-based style extraction"],
    strengths: ["Simple mental model", "DESIGN.md travels with every prompt", "Useful pattern for persistent visual identity", "Multiple creation paths"],
    weaknesses: ["URL import not fully optimized in test", "Reported bugs", "May be too lightweight for complex component systems"],
    acquisitionChannels: ["Google ecosystem", "AI design audience"],
    seoStrength: 6,
    productStrength: 6,
    brandStrength: 8,
    aiStrength: 7,
    uxDepth: 5,
    pricingClarity: 3,
    speedToValue: 7,
    collaboration: 4,
    enterpriseReadiness: 5,
    differentiation: 7,
    threatLevel: 6,
    opportunityScore: 8,
    tags: ["Google", "DESIGN.md Feature", "Design Rules"],
    lastReviewed: "2026-06-25",
    sources: [{ title: "Stitch DESIGN.pdf", url: "Stitch DESIGN.pdf", type: "manual", date: "2026-06-25", confidence: "medium" }],
    changelog: ["Report highlights DESIGN.md as a feature of Google Stitch and a useful persistent style instruction pattern."],
    recommendations: ["Consider an equivalent persistent brand/design instructions artifact for UX Pilot.", "Show that UX Pilot handles both design rules and real Figma components.", "Treat Google's distribution and native AI perception as a serious brand risk."]
  }
];

const brlToUsdRate = 0.193426;
const pricingBenchmarks = [
  {
    id: "magicpath",
    name: "MagicPath",
    category: "Agentic design workspace",
    entry: "$10/mo",
    summary: "Free; Builder $10/mo; Pro $30/mo; Teams custom.",
    source: "Attached billing screenshot",
    note: "Builder includes unlimited external agent calls; Pro adds larger credit packs and unlimited Figma import/export.",
    plans: [
      ["Free", "$0/mo"],
      ["Builder", "$10/mo"],
      ["Pro", "$30/mo"],
      ["Teams", "Custom"]
    ]
  },
  {
    id: "framer-3",
    name: "Framer",
    category: "Website canvas + publishing",
    entry: "$13.54/mo",
    summary: "Basic ~$13.54/mo; Pro ~$40.62/mo; Enterprise custom. Converted from BRL.",
    source: "Attached billing screenshot",
    note: "Original screenshot shows R$70 Basic and R$210 Pro per month; additional editors R$140/mo (~$27.08).",
    plans: [
      ["Basic", "$13.54/mo"],
      ["Pro", "$40.62/mo"],
      ["Enterprise", "Custom"]
    ]
  },
  {
    id: "magic-patterns",
    name: "Magic Patterns",
    category: "AI prototyping + design systems",
    entry: "$20/seat/mo",
    summary: "Free; Starter $20/seat/mo; Business $100/seat/mo; Enterprise custom.",
    source: "Attached pricing screenshot",
    note: "Starter and Business are shown as monthly, billed monthly.",
    plans: [
      ["Free", "$0/mo"],
      ["Starter", "$20/seat/mo"],
      ["Business", "$100/seat/mo"],
      ["Enterprise", "Custom"]
    ]
  },
  {
    id: "paper-design",
    name: "Paper Design",
    category: "Agentic design canvas",
    entry: "$20/user/mo",
    summary: "Free; Pro $20/user/mo; Organizations custom.",
    source: "Attached pricing screenshot",
    note: "Free includes 100/week MCP tool calls; Pro includes 1M/week MCP tool calls.",
    plans: [
      ["Free", "$0/mo"],
      ["Pro", "$20/user/mo"],
      ["Organizations", "Custom"]
    ]
  },
  {
    id: "aura-build",
    name: "Aura Build",
    category: "AI design asset builder",
    entry: "$25/mo",
    summary: "Free; Pro $25/mo; Max $50/mo; Ultra $100/mo.",
    source: "Attached pricing screenshot",
    note: "Screenshot mentions a 3-day trial and annual promo, but monthly prices are shown here.",
    plans: [
      ["Free", "$0/mo"],
      ["Pro", "$25/mo"],
      ["Max", "$50/mo"],
      ["Ultra", "$100/mo"]
    ]
  },
  {
    id: "lovable",
    name: "Lovable",
    category: "Full-stack AI app builder",
    entry: "$25/mo",
    summary: "Pro $25/mo; Business $50/mo; Enterprise platform fee/custom.",
    source: "Attached billing screenshot",
    note: "Screenshot shows Pro and Business shared across unlimited users, with selected monthly credit packs.",
    plans: [
      ["Pro", "$25/mo"],
      ["Business", "$50/mo"],
      ["Enterprise", "Custom"]
    ]
  },
  {
    id: "figma-make",
    name: "Figma Make AI",
    category: "Figma AI prototyping",
    entry: "$20/full seat/mo",
    summary: "Starter free; Professional full seat $20/mo; Organization full seat $55/mo billed annually; Enterprise full seat $90/mo billed annually.",
    source: "Attached Figma pricing screenshot",
    note: "Pricing is for Figma seats/products including Figma Make; screenshot shows prices in USD.",
    plans: [
      ["Starter", "$0/mo"],
      ["Professional full seat", "$20/mo"],
      ["Organization full seat", "$55/mo"],
      ["Enterprise full seat", "$90/mo"]
    ]
  },
  {
    id: "claude-design",
    name: "Claude Design",
    category: "Code-first visual prototyping",
    entry: "$17.80/mo",
    summary: "Free; Pro ~$17.80/mo with annual discount or ~$21.28/mo monthly; Max from ~$106.38/mo. Converted from BRL.",
    source: "Attached Claude pricing screenshot",
    note: "Screenshot shows R$92 Pro with annual subscription discount, R$110 monthly, and Max from R$550/mo.",
    plans: [
      ["Free", "$0/mo"],
      ["Pro annualized", "$17.80/mo"],
      ["Pro monthly", "$21.28/mo"],
      ["Max", "from $106.38/mo"]
    ]
  },
  {
    id: "anima-buddy",
    name: "Anima App",
    category: "Design-to-code + Figma agent",
    entry: "$25/seat/mo",
    summary: "Free; Starter $25/seat/mo; Pro $50/seat/mo; Business starts at $180/mo.",
    source: "Attached pricing screenshot",
    note: "Paid tiers include Figma to code both ways; Business is shown as starting at $180/mo.",
    plans: [
      ["Free", "$0/mo"],
      ["Starter", "$25/seat/mo"],
      ["Pro", "$50/seat/mo"],
      ["Business", "from $180/mo"]
    ]
  },
  {
    id: "flutterflow",
    name: "FlutterFlow",
    category: "Mature app builder + design tooling",
    entry: "$19.50/mo",
    summary: "Free; Basic $19.50/mo; Growth $40/mo first seat; Business $75/mo first seat.",
    source: "Attached pricing screenshot",
    note: "Growth and Business screenshots show lower pricing for additional seats.",
    plans: [
      ["Free", "$0/mo"],
      ["Basic", "$19.50/mo"],
      ["Growth", "$40/mo first seat"],
      ["Business", "$75/mo first seat"]
    ]
  },
  {
    id: "twenty-first",
    name: "21st.dev + Magic Chat",
    category: "Developer component library + AI chat",
    entry: "$20/mo",
    summary: "Free; Pro $20/mo; Pro Plus $40/mo; Max $100/mo.",
    source: "Attached 21st.dev docs screenshot",
    note: "Screenshot also shows annual equivalents: Pro $16/mo, Pro Plus $32/mo, Max $67/mo when billed yearly.",
    plans: [
      ["Free", "$0/mo"],
      ["Pro", "$20/mo"],
      ["Pro Plus", "$40/mo"],
      ["Max", "$100/mo"]
    ]
  },
  {
    id: "gamma",
    name: "Gamma App",
    category: "AI presentation + website artifact",
    entry: "$7.74/seat/mo",
    summary: "Free; Plus ~$7.74/seat/mo; Pro ~$19.34/seat/mo; Ultra ~$106.38/seat/mo. Converted from BRL.",
    source: "Attached Gamma pricing screenshot",
    note: "Original screenshot shows R$40 Plus, R$100 Pro, and R$550 Ultra per seat/month.",
    plans: [
      ["Free", "$0/mo"],
      ["Plus", "$7.74/seat/mo"],
      ["Pro", "$19.34/seat/mo"],
      ["Ultra", "$106.38/seat/mo"]
    ]
  },
  {
    id: "subframe",
    name: "Subframe",
    category: "Code-native design tool",
    entry: "$29/editor/mo",
    summary: "Free; Pro $29/editor/mo; Custom contact us.",
    source: "Attached Subframe docs screenshot",
    note: "Billing is per team with seat-based pricing.",
    plans: [
      ["Free", "$0/mo"],
      ["Pro", "$29/editor/mo"],
      ["Custom", "Contact us"]
    ]
  },
  {
    id: "figr",
    name: "FigR",
    category: "Design system + Figma reference AI",
    entry: "$19/mo",
    summary: "Free; Starter $19/mo; Max $149/mo; Enterprise custom.",
    source: "Attached pricing screenshot",
    note: "Starter includes 100 credits/month; Max includes 1,000 shared credits/month.",
    plans: [
      ["Free", "$0/mo"],
      ["Starter", "$19/mo"],
      ["Max", "$149/mo"],
      ["Enterprise", "Custom"]
    ]
  },
  {
    id: "mobbin-mcp",
    name: "Mobbin",
    category: "Reference intelligence layer",
    entry: "$14.51/mo",
    summary: "Pro ~$14.51/mo; Team ~$23.21/member/mo. Converted from BRL.",
    source: "Attached Mobbin pricing screenshot",
    note: "Original screenshot shows R$75 Pro and R$120 Team per member/month, billed quarterly.",
    plans: [
      ["Pro", "$14.51/mo"],
      ["Team", "$23.21/member/mo"]
    ]
  },
  {
    id: "anything",
    name: "Anything AI",
    category: "AI web + mobile app builder",
    entry: "$24/mo",
    summary: "Free; Pro 20k $24/mo; Max $239/mo.",
    source: "Attached pricing screenshot",
    note: "Free includes 3K credits; Pro includes 20K credits/month; Max screenshot shows 220K credits/month.",
    plans: [
      ["Free", "$0/mo"],
      ["Pro 20k", "$24/mo"],
      ["Max", "$239/mo"]
    ]
  },
  {
    id: "stitch",
    name: "Google Stitch",
    category: "AI UI design + design-system tool",
    entry: "$4.83/mo",
    summary: "Google AI subscriptions screenshot: AI Plus ~$4.83/mo; AI Pro ~$18.76/mo; AI Ultra from ~$150.85/mo. Converted from BRL.",
    source: "Attached Gemini subscription screenshot",
    note: "Screenshot is for Google AI/Gemini subscriptions, not a Stitch-specific pricing page.",
    plans: [
      ["Google AI Plus", "$4.83/mo"],
      ["Google AI Pro", "$18.76/mo"],
      ["Google AI Ultra", "from $150.85/mo"]
    ]
  }
];

const pricingById = new Map(pricingBenchmarks.map((item) => [item.id, item]));
competitors.forEach((competitor) => {
  const pricing = pricingById.get(competitor.id);
  if (pricing) competitor.pricing = pricing.summary;
});

const featureColumns = [
  ["wireframes", "Wireframes"],
  ["hifi", "Hi-Fi UI"],
  ["flows", "Flow / multi-screen"],
  ["editing", "Element editing"],
  ["exportFigma", "Export Figma"],
  ["importFigma", "Import Figma"],
  ["code", "Generate code"],
  ["collaboration", "Team collaboration"],
  ["designSystem", "Design system"],
  ["backend", "Backend / app logic"],
  ["publishing", "Publishing / hosting"],
  ["references", "Reference import"],
  ["mcp", "MCP"]
];

const featureDefaults = {
  wireframes: "unknown",
  hifi: "unknown",
  flows: "unknown",
  editing: "unknown",
  exportFigma: "unknown",
  importFigma: "unknown",
  code: "unknown",
  collaboration: "unknown",
  designSystem: "unknown",
  backend: "unknown",
  publishing: "unknown",
  references: "unknown",
  mcp: "unknown"
};

const featureOverrides = {
  "ux-pilot": { mcpEvidence: "No verified public UX Pilot/Nodey MCP documentation found; official UX Pilot pages verify Figma, Nodey, React export, heatmaps, and design-system workflows.", features: { wireframes: "yes", hifi: "yes", flows: "yes", editing: "yes", exportFigma: "yes", importFigma: "yes", code: "yes", collaboration: "partial", designSystem: "yes", backend: "partial", publishing: "partial", references: "yes", mcp: "unknown" } },
  "magicpath": { mcpEvidence: "Official MagicPath docs verify Figma import and code export; no verified public MagicPath MCP docs found.", features: { wireframes: "yes", hifi: "yes", flows: "partial", editing: "yes", exportFigma: "partial", importFigma: "yes", code: "yes", collaboration: "yes", designSystem: "yes", backend: "partial", publishing: "partial", references: "yes", mcp: "unknown" } },
  "framer-3": { mcpEvidence: "Official Framer 3.0 material verifies agents, branching, community, and website workflow; MCP/external-agent evidence is treated as partial unless confirmed in official docs.", features: { wireframes: "partial", hifi: "yes", flows: "partial", editing: "yes", exportFigma: "no", importFigma: "unknown", code: "partial", collaboration: "yes", designSystem: "partial", backend: "no", publishing: "yes", references: "partial", mcp: "partial" } },
  "magic-patterns": { mcpEvidence: "Official Magic Patterns docs verify Figma import, GitHub sync, downloadable code, publishing, and MCP/Claude connector support.", features: { wireframes: "partial", hifi: "yes", flows: "partial", editing: "yes", exportFigma: "no", importFigma: "yes", code: "yes", collaboration: "yes", designSystem: "yes", backend: "no", publishing: "yes", references: "yes", mcp: "yes" } },
  "paper-design": { mcpEvidence: "Official Paper docs verify read/write MCP through Paper Desktop, Figma/HTML paste, code-oriented exports, and token workflows.", features: { wireframes: "partial", hifi: "yes", flows: "partial", editing: "yes", exportFigma: "no", importFigma: "yes", code: "yes", collaboration: "yes", designSystem: "partial", backend: "no", publishing: "partial", references: "yes", mcp: "yes" } },
  "aura-build": { mcpEvidence: "Internal Aura report verifies Figma import via API token, HTML/JS/React output, Figma export, DESIGN.md import, and asset generation; no MCP evidence found.", features: { wireframes: "no", hifi: "yes", flows: "partial", editing: "yes", exportFigma: "yes", importFigma: "yes", code: "yes", collaboration: "unknown", designSystem: "yes", backend: "no", publishing: "partial", references: "yes", mcp: "unknown" } },
  "lovable": { mcpEvidence: "Internal Lovable reports and public partner material verify Figma-as-reference, GitHub/code workflows, and full-stack app generation; no verified Lovable MCP docs found.", features: { wireframes: "no", hifi: "yes", flows: "no", editing: "yes", exportFigma: "no", importFigma: "partial", code: "yes", collaboration: "partial", designSystem: "partial", backend: "yes", publishing: "yes", references: "yes", mcp: "unknown" } },
  "figma-make": { mcpEvidence: "Figma docs verify Figma Make import from Figma and Figma MCP; treat this as Figma ecosystem MCP rather than a standalone Make-only MCP.", features: { wireframes: "no", hifi: "yes", flows: "partial", editing: "yes", exportFigma: "yes", importFigma: "yes", code: "yes", collaboration: "yes", designSystem: "partial", backend: "partial", publishing: "partial", references: "yes", mcp: "yes" } },
  "claude-design": { mcpEvidence: "Claude supports MCP broadly, but no verified Claude Design-specific design canvas MCP was found in the reviewed material.", features: { wireframes: "partial", hifi: "yes", flows: "partial", editing: "yes", exportFigma: "no", importFigma: "no", code: "yes", collaboration: "partial", designSystem: "partial", backend: "partial", publishing: "partial", references: "yes", mcp: "unknown" } },
  "anima-buddy": { mcpEvidence: "Internal Anima/Buddy report verifies Figma plugin, design-to-code, Storybook/design-system direction, and app/backend breadth; no verified MCP evidence found.", features: { wireframes: "partial", hifi: "yes", flows: "partial", editing: "yes", exportFigma: "yes", importFigma: "yes", code: "yes", collaboration: "partial", designSystem: "yes", backend: "partial", publishing: "partial", references: "yes", mcp: "unknown" } },
  "flutterflow": { mcpEvidence: "FlutterFlow docs verify an AI MCP setup path and Designer MCP Calls; FlutterFlow remains stronger for app-building than Figma-native product design.", features: { wireframes: "no", hifi: "yes", flows: "yes", editing: "yes", exportFigma: "no", importFigma: "no", code: "yes", collaboration: "yes", designSystem: "yes", backend: "yes", publishing: "yes", references: "partial", mcp: "yes" } },
  "twenty-first": { mcpEvidence: "Internal 21st.dev report verifies MCP-layer positioning for developer component workflows.", features: { wireframes: "no", hifi: "partial", flows: "no", editing: "partial", exportFigma: "no", importFigma: "no", code: "yes", collaboration: "partial", designSystem: "yes", backend: "no", publishing: "no", references: "yes", mcp: "yes" } },
  "gamma": { mcpEvidence: "Internal Gamma report verifies documents, presentations, websites, hosted publishing, and agent edits; no verified MCP evidence found.", features: { wireframes: "no", hifi: "partial", flows: "no", editing: "yes", exportFigma: "no", importFigma: "no", code: "no", collaboration: "yes", designSystem: "partial", backend: "no", publishing: "yes", references: "partial", mcp: "unknown" } },
  "subframe": { mcpEvidence: "Official Subframe docs verify an MCP server that gives AI coding assistants direct access to Subframe projects.", features: { wireframes: "no", hifi: "yes", flows: "partial", editing: "yes", exportFigma: "no", importFigma: "unknown", code: "yes", collaboration: "partial", designSystem: "yes", backend: "no", publishing: "partial", references: "partial", mcp: "yes" } },
  "figr": { mcpEvidence: "Internal FigR report verifies Figma frame references, website/reference inputs, and design-system input; no verified MCP evidence found.", features: { wireframes: "partial", hifi: "yes", flows: "partial", editing: "partial", exportFigma: "unknown", importFigma: "yes", code: "unknown", collaboration: "unknown", designSystem: "yes", backend: "no", publishing: "unknown", references: "yes", mcp: "unknown" } },
  "mobbin-mcp": { mcpEvidence: "Internal Mobbin MCP report verifies MCP-based reference retrieval for agents; Mobbin is a reference layer, not a UI generation product.", features: { wireframes: "no", hifi: "no", flows: "no", editing: "no", exportFigma: "partial", importFigma: "no", code: "no", collaboration: "partial", designSystem: "no", backend: "no", publishing: "no", references: "yes", mcp: "yes" } },
  "anything": { mcpEvidence: "Anything docs verify web/mobile app building, backend functions, publishing, Figma import, and Mobbin references; no verified Anything MCP docs found.", features: { wireframes: "no", hifi: "yes", flows: "partial", editing: "partial", exportFigma: "no", importFigma: "yes", code: "yes", collaboration: "partial", designSystem: "partial", backend: "yes", publishing: "yes", references: "yes", mcp: "unknown" } },
  "stitch": { mcpEvidence: "Google Stitch and DESIGN.md sources verify UI generation, DESIGN.md rules, and Stitch MCP/agent workflows; backend depth is not verified.", features: { wireframes: "no", hifi: "yes", flows: "partial", editing: "yes", exportFigma: "partial", importFigma: "no", code: "partial", collaboration: "partial", designSystem: "yes", backend: "no", publishing: "partial", references: "yes", mcp: "yes" } }
};

const featureMatrix = competitors.map((c) => {
  const override = featureOverrides[c.id] || {};
  return {
    name: c.name,
    category: c.category,
    note: override.note || c.recommendations[0],
    mcpEvidence: override.mcpEvidence || "No verified public MCP evidence found in the reviewed material.",
    features: { ...featureDefaults, ...(override.features || {}) }
  };
});

const battleCategories = [
  ["Product Depth", "productStrength"],
  ["AI Capability", "aiStrength"],
  ["UX Thinking", "uxDepth"],
  ["UI Generation", "aiStrength"],
  ["SEO Strength", "seoStrength"],
  ["Brand Strength", "brandStrength"],
  ["Pricing Clarity", "pricingClarity"],
  ["Speed to Value", "speedToValue"],
  ["Collaboration", "collaboration"],
  ["Enterprise Readiness", "enterpriseReadiness"],
  ["Differentiation", "differentiation"],
  ["Risk to UX Pilot", "threatLevel"]
];

const state = {
  route: "home",
  search: "",
  category: "all",
  threat: "all",
  profileId: "magicpath",
  arenaSelected: ["ux-pilot", "magicpath"]
};

const els = {
  navList: document.getElementById("navList"),
  pageTitle: document.getElementById("pageTitle"),
  searchInput: document.getElementById("searchInput"),
  categoryFilter: document.getElementById("categoryFilter"),
  threatFilter: document.getElementById("threatFilter"),
  filterControls: document.getElementById("filterControls"),
  heroMetrics: document.getElementById("heroMetrics"),
  toast: document.getElementById("toast"),
  mobileMenu: document.getElementById("mobileMenu"),
  sidebarToggle: document.getElementById("sidebarToggle"),
  appShell: document.querySelector(".app-shell")
};

const accessHashParts = [
  "73fa6e585777cfad",
  "b5a34fa97afb16ab",
  "155eeb69e7f2d6f8",
  "1a73d24ea1a4a1ed"
];
const accessSessionKey = "uxp-command-center-access";
let appHasRendered = false;

const titles = {
  home: "Command Center",
  radar: "Competitive Radar",
  features: "Feature Matrix",
  pricing: "Pricing Benchmark",
  profiles: "Competitor Profiles",
  battlecards: "Internal Battlecards",
  arena: "Battle Arena",
  insights: "Strategic Insights"
};

const savedSidebar = localStorage.getItem("uxp-sidebar") || "expanded";
if (savedSidebar === "collapsed") els.appShell.classList.add("sidebar-collapsed");

function isAccessGranted() {
  return localStorage.getItem(accessSessionKey) === "granted";
}

async function digestInput(value) {
  const payload = new TextEncoder().encode(value);
  const buffer = await crypto.subtle.digest("SHA-256", payload);
  return [...new Uint8Array(buffer)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

function fixedTimeMatch(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i += 1) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

function createAccessGate() {
  if (document.getElementById("accessGate")) return;
  const gate = document.createElement("section");
  gate.className = "access-gate";
  gate.id = "accessGate";
  gate.setAttribute("aria-label", "Private access");
  gate.innerHTML = `
    <div class="access-card">
      <div class="access-copy">
        <div>
          <div class="access-brand">
            <img src="./assets/brand/ux-pilot-mascot-green.png" alt="" />
            <span>
              <strong>UX Pilot</strong>
              <small>Command Center</small>
            </span>
          </div>
          <h1>Internal Intelligence Access</h1>
          <p>Private competitor research dashboard for UX Pilot strategy, product marketing, and growth decisions.</p>
        </div>
        <div class="access-meta">
          <span>Research Dashboard</span>
          <span>Team Only</span>
          <span>Protected View</span>
        </div>
      </div>
      <div class="access-form-wrap">
        <form class="access-form" id="accessForm" autocomplete="off">
          <label>
            <span>Access Password</span>
            <input id="accessPassword" type="password" inputmode="text" autocomplete="current-password" autofocus />
          </label>
          <button type="submit">Unlock Dashboard</button>
          <p class="access-error" id="accessError" role="alert" aria-live="polite"></p>
        </form>
      </div>
    </div>
  `;
  document.body.prepend(gate);
}

function unlockApp() {
  document.getElementById("accessGate")?.remove();
  document.body.classList.remove("auth-locked");
  if (!appHasRendered) {
    initFilters();
    renderAll();
    appHasRendered = true;
  }
}

function initAccessGate() {
  if (isAccessGranted()) {
    unlockApp();
    return;
  }
  document.body.classList.add("auth-locked");
  createAccessGate();
  const form = document.getElementById("accessForm");
  const input = document.getElementById("accessPassword");
  const error = document.getElementById("accessError");
  input?.focus();
  form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    error.textContent = "";
    const submittedHash = await digestInput(input.value);
    const expectedHash = accessHashParts.join("");
    if (fixedTimeMatch(submittedHash, expectedHash)) {
      localStorage.setItem(accessSessionKey, "granted");
      input.value = "";
      unlockApp();
      return;
    }
    input.value = "";
    error.textContent = "Invalid password. Please try again.";
    input.focus();
  });
}

function score(c, keys) {
  return Math.round(keys.reduce((sum, key) => sum + c[key], 0) / keys.length);
}

function powerScore(c) {
  return score(c, ["productStrength", "aiStrength", "uxDepth", "seoStrength", "brandStrength", "differentiation"]);
}

function filteredCompetitors(includeBenchmark = false) {
  return competitors.filter((c) => {
    if (!includeBenchmark && c.id === "ux-pilot") return false;
    const haystack = [c.name, c.category, c.positioning, c.description, ...c.tags, ...c.strengths, ...c.weaknesses].join(" ").toLowerCase();
    const matchesSearch = haystack.includes(state.search.toLowerCase());
    const matchesCategory = state.category === "all" || c.category === state.category;
    const matchesThreat = state.threat === "all" || (state.threat === "0" ? c.threatLevel < 6 : c.threatLevel >= Number(state.threat));
    return matchesSearch && matchesCategory && matchesThreat;
  });
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  clearTimeout(els.toast.timer);
  els.toast.timer = setTimeout(() => els.toast.classList.remove("show"), 2400);
}

function updateChromeControls() {
  const isCollapsed = els.appShell.classList.contains("sidebar-collapsed");
  els.sidebarToggle.innerHTML = `<span aria-hidden="true">${isCollapsed ? "›" : "‹"}</span>`;
  els.sidebarToggle.setAttribute("aria-label", isCollapsed ? "Expand sidebar" : "Minimize sidebar");
  els.sidebarToggle.title = isCollapsed ? "Expand sidebar" : "Minimize sidebar";
}

function renderMetrics() {
  const nonUx = competitors.filter((c) => c.id !== "ux-pilot");
  const highThreat = nonUx.filter((c) => c.threatLevel >= 8).length;
  const avgOpportunity = Math.round(nonUx.reduce((sum, c) => sum + c.opportunityScore, 0) / nonUx.length);
  const heroMetrics = document.getElementById("heroMetrics");
  if (!heroMetrics) return;
  heroMetrics.innerHTML = [
    ["Tracked Tools", nonUx.length],
    ["High Risk", highThreat],
    ["Avg Opportunity", `${avgOpportunity}/10`],
    ["Research Sources", nonUx.reduce((sum, c) => sum + c.sources.length, 0)]
  ].map(([label, value]) => `<article class="metric"><span class="caption">${label}</span><strong>${value}</strong></article>`).join("");
}

function tagMarkup(tags) {
  return `<div class="tag-row">${tags.map((tag, i) => `<span class="tag ${i === 0 ? "purple" : i === 1 ? "lime" : ""}">${tag}</span>`).join("")}</div>`;
}

function scoreRows(c) {
  return [
    ["Risk", c.threatLevel],
    ["Opportunity", c.opportunityScore],
    ["AI", c.aiStrength],
    ["UX Depth", c.uxDepth],
    ["SEO", c.seoStrength]
  ].map(([label, value]) => `
    <div class="score-row">
      <span class="score-label">${label}</span>
      <div class="bar"><span style="width:${value * 10}%"></span></div>
      <span class="score-label">${value}</span>
    </div>
  `).join("");
}

function renderRadar() {
  const list = filteredCompetitors();
  document.getElementById("radar").innerHTML = `
    <div class="radar-grid">
      ${list.map((c) => `
        <article class="competitor-card">
          <div class="card-header">
            <div>
              <p class="caption">${c.category}</p>
              <h3>${c.name}</h3>
            </div>
            <span class="power-score">${powerScore(c)}</span>
          </div>
          ${tagMarkup(c.tags)}
          <p class="small-copy">${c.description}</p>
          <div class="score-stack">${scoreRows(c)}</div>
          <div class="row-between" style="margin-top:16px">
            <span class="caption">Reviewed ${c.lastReviewed}</span>
            <button class="secondary-btn" type="button" data-open-profile="${c.id}">Open Profile</button>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function renderHome() {
  document.getElementById("home").innerHTML = `
    <section class="hero-band">
      <div>
        <p class="caption">Mission Control</p>
        <h2>Turn competitor research into decisions.</h2>
        <p class="hero-copy">An internal intelligence workspace for mapping real competitor research, finding positioning white space, and turning UX Pilot's product knowledge into structured decisions.</p>
      </div>
      <div class="hero-metrics" id="heroMetrics"></div>
    </section>

    <section class="insight-grid">
      <article class="dark-card">
        <p class="caption">Start Here</p>
        <h3>Read the market fast</h3>
        <p class="small-copy" style="margin-top:10px">Use Radar for risk scanning, Feature Matrix for capability gaps, Pricing for subscription context, Battlecards for commercial context, and Battle Arena for head-to-head strategic reviews.</p>
      </article>
      <article class="dark-card">
        <p class="caption">Operating Goal</p>
        <h3>Move from notes to action</h3>
        <p class="small-copy" style="margin-top:10px">This internal command center turns research docs into scores, battlecards, arena verdicts, and product/growth decisions.</p>
      </article>
      <article class="dark-card">
        <p class="caption">Data Standard</p>
        <h3>Facts first, scores second</h3>
        <p class="small-copy" style="margin-top:10px">Product claims come from attached reports or official sources. Scores are internal estimates and should be recalibrated when new evidence appears.</p>
      </article>
    </section>
  `;
}

function featureValueWeight(value) {
  return value === "yes" ? 1 : value === "partial" ? 0.55 : value === "limited" ? 0.35 : 0;
}

function featureCoverage(row) {
  const total = featureColumns.reduce((sum, [key]) => sum + featureValueWeight(row.features[key]), 0);
  return Math.round((total / featureColumns.length) * 100);
}

function featureStatusCell(value) {
  const labels = {
    yes: "Yes",
    no: "No",
    partial: "Partial",
    limited: "Limited",
    unknown: "Unknown"
  };
  return `<span class="feature-status ${value}">${labels[value] || "Unknown"}</span>`;
}

function renderFeatureMatrix() {
  const sorted = [...featureMatrix].sort((a, b) => (a.name.startsWith("UX Pilot") ? -1 : b.name.startsWith("UX Pilot") ? 1 : featureCoverage(b) - featureCoverage(a)));
  const uxPilot = featureMatrix.find((row) => row.name.startsWith("UX Pilot"));
  const strongest = sorted.filter((row) => row.name !== "UX Pilot").slice(0, 3);
  const unknownCount = featureMatrix.reduce((sum, row) => sum + Object.values(row.features).filter((value) => value === "unknown").length, 0);
  document.getElementById("features").innerHTML = `
    <section class="feature-matrix-hero">
      <div>
        <p class="caption">Feature Coverage</p>
        <h2>UX Pilot vs. market capabilities</h2>
        <p class="small-copy">Directional feature matrix for product and growth analysis. Use this as an internal visibility layer, not as public-facing claims without source verification.</p>
      </div>
      <div class="feature-summary">
        <article>
          <span class="caption">UX Pilot Coverage</span>
          <strong>${featureCoverage(uxPilot)}%</strong>
        </article>
        <article>
          <span class="caption">Tracked Tools</span>
          <strong>${featureMatrix.length}</strong>
        </article>
        <article>
          <span class="caption">Needs Verification</span>
          <strong>${unknownCount}</strong>
        </article>
      </div>
    </section>

    <section class="feature-legend">
      <span>${featureStatusCell("yes")} Available</span>
      <span>${featureStatusCell("partial")} Partial / indirect</span>
      <span>${featureStatusCell("limited")} Limited / risky</span>
      <span>${featureStatusCell("no")} Not available</span>
      <span>${featureStatusCell("unknown")} Unknown</span>
    </section>

    <section class="table-summary feature-leaders">
      ${strongest.map((row) => `
        <article>
          <span class="caption">High Coverage Competitor</span>
          <strong>${row.name}</strong>
          <small>${featureCoverage(row)}% coverage · ${row.category}</small>
        </article>
      `).join("")}
    </section>

    <div class="table-wrap feature-matrix-wrap">
      <table class="feature-matrix-table">
        <thead>
          <tr>
            <th>Competitor</th>
            <th>Coverage</th>
            ${featureColumns.map(([, label]) => `<th>${label}</th>`).join("")}
            <th>MCP Evidence</th>
            <th>Critical Note</th>
          </tr>
        </thead>
        <tbody>
          ${sorted.map((row) => `
            <tr class="${row.name.startsWith("UX Pilot") ? "benchmark-row" : ""}">
              <td class="feature-company">
                <strong>${row.name}</strong>
                <span>${row.category}</span>
              </td>
              <td class="feature-coverage">
                <strong>${featureCoverage(row)}%</strong>
                <div class="coverage-bar"><i style="width:${featureCoverage(row)}%"></i></div>
              </td>
              ${featureColumns.map(([key]) => `<td>${featureStatusCell(row.features[key])}</td>`).join("")}
              <td class="feature-note mcp-evidence">${row.mcpEvidence || "No verified public MCP evidence found."}</td>
              <td class="feature-note">${row.note}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderPricing() {
  const paidItems = pricingBenchmarks.filter((item) => !item.entry.startsWith("$0"));
  const customCount = pricingBenchmarks.filter((item) => item.plans.some(([, price]) => /custom|contact/i.test(price))).length;
  document.getElementById("pricing").innerHTML = `
    <section class="pricing-hero">
      <div>
        <p class="caption">Subscription Benchmark</p>
        <h2>Pricing across the competitive set</h2>
      </div>
      <div class="pricing-kpis">
        <article><span class="caption">Tracked tools</span><strong>${pricingBenchmarks.length}</strong></article>
        <article><span class="caption">Paid entry from</span><strong>${paidItems[0]?.entry || "N/A"}</strong></article>
        <article><span class="caption">Custom plans</span><strong>${customCount}</strong></article>
      </div>
    </section>

    <section class="pricing-grid">
      ${pricingBenchmarks.map((item) => `
        <article class="pricing-card">
          <div>
            <p class="caption">${item.category}</p>
            <h3>${item.name}</h3>
          </div>
          <strong class="pricing-entry">${item.entry}</strong>
          <div class="pricing-plan-list">
            ${item.plans.map(([plan, price]) => `
              <div>
                <span>${plan}</span>
                <strong>${price}</strong>
              </div>
            `).join("")}
          </div>
          <p class="pricing-note">${item.note}</p>
          <span class="pricing-source">${item.source}</span>
        </article>
      `).join("")}
    </section>
  `;
}

function renderProfiles() {
  const active = competitors.find((c) => c.id === state.profileId) || competitors[1];
  const list = filteredCompetitors();
  document.getElementById("profiles").innerHTML = `
    <div class="profile-grid">
      <aside class="profile-panel">
        <p class="caption">Competitor Dossiers</p>
        <div class="profile-list" style="margin-top:14px">
          ${list.map((c) => `<button class="profile-select ${active.id === c.id ? "active" : ""}" type="button" data-profile-id="${c.id}">${c.name}<br><span class="caption">${c.category}</span></button>`).join("")}
        </div>
      </aside>
      <article class="profile-panel">
        <div class="card-header">
          <div>
            <p class="caption">${active.category}</p>
            <h3>${active.name}</h3>
          </div>
          <span class="power-score">${powerScore(active)}</span>
        </div>
        ${tagMarkup(active.tags)}
        <p class="small-copy">${active.positioning}</p>
        <div class="two-col" style="margin-top:18px">
          ${infoBlock("Strengths", active.strengths)}
          ${infoBlock("Weaknesses", active.weaknesses)}
          ${infoBlock("Internal Assessment", [`Risk score ${active.threatLevel}/10 based on this research set`, `Opportunity score ${active.opportunityScore}/10`, `Primary observed channels: ${active.acquisitionChannels.join(", ")}`])}
          ${infoBlock("Strategic Implications", active.recommendations)}
        </div>
      </article>
    </div>
  `;
}

function infoBlock(title, items) {
  return `<section class="dark-card"><h3>${title}</h3><ul class="clean">${items.map((item) => `<li>${item}</li>`).join("")}</ul></section>`;
}

function compactList(items, limit = 3) {
  return `<ul>${items.slice(0, limit).map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function evidenceList(c, limit = 3) {
  return `<ul>${c.sources.slice(0, limit).map((s) => `<li>${s.title} · ${s.type} · ${s.confidence} confidence</li>`).join("")}</ul>`;
}

function battlecardTile(title, content, variant = "") {
  return `
    <div class="battlecard-tile ${variant}">
      <span class="caption">${title}</span>
      ${content}
    </div>
  `;
}

function renderBattlecards() {
  const list = filteredCompetitors();
  document.getElementById("battlecards").innerHTML = `
    <section class="battlecards-hero">
      <div>
        <p class="caption">Sales + Product Enablement</p>
        <h2>Competitor battlecards</h2>
        <p class="small-copy">Fast-access competitor cards for understanding how each product is positioned, where they are strong, where they are weak, and how UX Pilot should respond realistically.</p>
      </div>
      <div class="battlecard-purpose">
        <strong>Use these cards as evidence-backed working notes. Scores are internal assessments from the reviewed research, not external market facts.</strong>
      </div>
    </section>
    <div class="battlecard-grid">
      ${list.map((c) => `
        <article class="battle-card battlecard-template">
          <div class="battlecard-head">
            <div>
              <p class="caption">Internal Battlecard</p>
              <h3>${c.name}</h3>
              <p class="small-copy">${c.category}</p>
            </div>
            <div class="battlecard-threat">
              <span class="caption">Internal Risk</span>
              <strong>${c.threatLevel}/10</strong>
            </div>
          </div>
          ${tagMarkup(c.tags)}
          <div class="battlecard-layout">
            ${battlecardTile("Market Position", `<h4>${c.category}</h4><p>${c.positioning}</p>`, "span-2 outline")}
            ${battlecardTile("Customer / Pricing", `<h4>${c.icp.slice(0, 2).join(" · ")}</h4><p>${c.pricing}</p>`, "span-2 muted")}
            ${battlecardTile("Verified Capabilities", compactList(c.coreFeatures, 4), "dark")}
            ${battlecardTile("Strengths", compactList(c.strengths), "aqua")}
            ${battlecardTile("Limits / Risks", compactList(c.weaknesses), "soft")}
            ${battlecardTile("UX Pilot Response", compactList(c.recommendations), "span-2 purple")}
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function renderArena() {
  const duelIds = state.arenaSelected.includes("ux-pilot")
    ? ["ux-pilot", state.arenaSelected.find((id) => id !== "ux-pilot") || "magicpath"]
    : state.arenaSelected.slice(0, 2);
  state.arenaSelected = duelIds;
  const refreshed = duelIds.map((id) => competitors.find((c) => c.id === id)).filter(Boolean);
  const [left, right] = refreshed;
  const rounds = battleCategories.slice(0, 10).map(([label, key], index) => {
    const winner = left[key] >= right[key] ? left : right;
    const rationale = winner.id === left.id
      ? `${left.name} has the stronger ${label.toLowerCase()} signal.`
      : `${right.name} has the stronger ${label.toLowerCase()} signal.`;
    return { label, key, index: index + 1, winner, rationale };
  });
  const leftWins = rounds.filter((round) => round.winner.id === left.id).length;
  const rightWins = rounds.length - leftWins;
  const overall = leftWins >= rightWins ? left : right;
  const mostDangerous = [left, right].filter((c) => c.id !== "ux-pilot").sort((a, b) => b.threatLevel - a.threatLevel)[0] || right;
  document.getElementById("arena").innerHTML = `
    <section class="arena-command">
      <div>
        <p class="caption">Select competitors and enter the arena</p>
        <h2>Battle <span>Arena</span></h2>
        <p class="small-copy">Head-to-head strategic analysis using internal scores from the current research set. Treat winners as review prompts, not absolute market facts.</p>
      </div>
      <div class="combatant-strip">
        <span class="caption">Select Combatants</span>
        <div class="checkbox-grid">
          ${competitors.map((c) => `
            <label class="check-chip ${state.arenaSelected.includes(c.id) ? "selected" : ""}">
              <input type="checkbox" data-arena-id="${c.id}" ${state.arenaSelected.includes(c.id) ? "checked" : ""}>
              <span>${c.name}</span>
            </label>
          `).join("")}
        </div>
        <button class="primary-btn" type="button" data-enter-arena>Enter Arena</button>
      </div>
    </section>

    <div class="duel-board">
      ${renderDuelCard(left, "left")}
      <div class="vs-rail"><span>VS</span></div>
      ${renderDuelCard(right, "right")}
    </div>
    <div class="round-analysis">
      <h3>Round-by-round <span>Analysis</span></h3>
      <div class="round-table-wrap">
        <table class="round-table">
          <thead>
            <tr><th>Round</th><th>Category</th><th>${left.name}</th><th>${right.name}</th><th>Winner</th><th>Rationale</th></tr>
          </thead>
          <tbody>
            ${rounds.map((r) => `
              <tr>
                <td>Round ${String(r.index).padStart(2, "0")}</td>
                <td><strong>${r.label}</strong></td>
                <td class="${r.winner.id === left.id ? "score-win" : ""}">${left[r.key]}</td>
                <td class="${r.winner.id === right.id ? "score-win" : ""}">${right[r.key]}</td>
                <td><span class="winner-chip ${r.winner.id === "ux-pilot" ? "lime" : "red"}">${r.winner.name}</span></td>
                <td><em>${r.rationale}</em></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </div>
    ${renderResultPanel(overall, mostDangerous, leftWins, rightWins)}
  `;
}

function renderDuelCard(c, side) {
  const strongest = c.strengths.slice(0, 3);
  const weakest = c.weaknesses.slice(0, 3);
  const bestFit = c.icp.slice(0, 2).join(" & ");
  return `
    <article class="duel-card ${side}">
      <div class="duel-card-top">
        <div>
          <p class="caption">${c.category}</p>
          <h3>${c.name}</h3>
        </div>
        ${c.id === "ux-pilot" ? `<span class="tag lime">Benchmark</span>` : ""}
      </div>
      <p class="small-copy">${c.positioning}</p>
      <div class="duel-stats">
        <div><span class="caption">Risk Score</span><strong>${c.id === "ux-pilot" ? "N/A" : c.threatLevel}</strong></div>
        <div><span class="caption">Power Score</span><strong>${(powerScore(c) / 1).toFixed(1)}</strong></div>
        <div><span class="caption">Opportunity</span><strong>${c.opportunityScore}</strong></div>
      </div>
      <div class="duel-section">
        <p class="caption lime-text">Strongest Areas</p>
        <div class="mini-tags">${strongest.map((item) => `<span>${item}</span>`).join("")}</div>
      </div>
      <div class="duel-section">
        <p class="caption">Weakest Areas</p>
        <div class="mini-tags muted-tags">${weakest.map((item) => `<span>${item}</span>`).join("")}</div>
      </div>
      <div class="duel-footer">
        <div>
          <span class="caption">Best Fit Customer</span>
          <strong>${bestFit}</strong>
        </div>
        <div class="duel-win-loss">
          <p><span>Where Wins</span>${c.strengths[0]}</p>
          <p><span>Where Loses</span>${c.weaknesses[0]}</p>
        </div>
      </div>
    </article>
  `;
}

function renderResultPanel(overall, mostDangerous, leftWins = 0, rightWins = 0) {
  const ux = competitors.find((c) => c.id === "ux-pilot");
  const comparisonTarget = mostDangerous.id === "ux-pilot"
    ? competitors.filter((c) => c.id !== "ux-pilot").sort((a, b) => b.threatLevel - a.threatLevel)[0]
    : mostDangerous;
  const uxAdvantages = ux && comparisonTarget
    ? battleCategories.filter(([, key]) => ux[key] > comparisonTarget[key]).slice(0, 3).map(([label]) => label)
    : ["Validated strengths"];
  const uxRisks = ux && comparisonTarget
    ? battleCategories.filter(([, key]) => ux[key] < comparisonTarget[key]).slice(0, 3).map(([label]) => label)
    : ["Unvalidated gaps"];
  const uxWon = overall.id === "ux-pilot";
  const verdictCopy = uxWon
    ? `${comparisonTarget.name} still leads UX Pilot in ${uxRisks.join(", ") || "some market signals"}. UX Pilot wins this specific arena only where the buying context values ${uxAdvantages.join(", ").toLowerCase()} over ${comparisonTarget.coreFeatures[0].toLowerCase()}.`
    : `${comparisonTarget.name} wins this arena on the current scoring model. UX Pilot should treat ${uxRisks.join(", ").toLowerCase() || "the competitor's stronger areas"} as concrete product and growth gaps, not only positioning objections.`;
  return `
    <section class="arena-verdict">
      <h3><span>Arena Result</span> Strategic Verdict</h3>
      <div class="verdict-grid">
        <div>
          <p class="caption">Overall Winner</p>
          <strong class="verdict-winner">${overall.name}</strong>
          <small>${leftWins || rightWins ? `${leftWins}-${rightWins} round split` : "Tournament leader"}</small>
        </div>
        <div>
          <p class="caption">Highest Risk Competitor</p>
          <strong class="danger-name">${mostDangerous.name}</strong>
          <small>${mostDangerous.tags[0]} pressure</small>
        </div>
        <div>
          <p class="caption lime-text">UX Pilot Leads On</p>
          <ul class="verdict-list">
            ${uxAdvantages.length ? uxAdvantages.map((item) => `<li>${item}</li>`).join("") : "<li>No clear lead in this matchup</li>"}
          </ul>
        </div>
        <div>
          <p class="caption danger-text">UX Pilot Trails On</p>
          <ul class="verdict-list danger">
            ${uxRisks.length ? uxRisks.map((item) => `<li>${item}</li>`).join("") : "<li>No clear scoring deficit</li>"}
          </ul>
        </div>
      </div>
      <div class="verdict-bottom">
        <div>
          <p>${verdictCopy}</p>
        </div>
      </div>
    </section>
  `;
}

function renderInsights() {
  const topThreats = [...competitors].filter((c) => c.id !== "ux-pilot").sort((a, b) => b.threatLevel - a.threatLevel).slice(0, 5);
  const productAdjacencies = [...competitors]
    .filter((c) => c.id !== "ux-pilot")
    .map((c) => ({ ...c, proximity: score(c, ["aiStrength", "uxDepth", "productStrength", "speedToValue"]) }))
    .sort((a, b) => b.proximity - a.proximity)
    .slice(0, 4);
  const appBuilders = competitors.filter((c) => ["lovable", "anything", "flutterflow"].includes(c.id));
  const figmaNativeRisks = competitors.filter((c) => ["figma-make", "claude-design", "anima-buddy", "stitch"].includes(c.id));
  const marketingTargets = ["magicpath", "figma-make", "lovable", "paper-design"].map((id) => competitors.find((c) => c.id === id)).filter(Boolean);
  document.getElementById("insights").innerHTML = `
    <section class="insights-hero">
      <div>
        <p class="caption">Product Marketing Brief</p>
        <h2>Focus the story around Figma-native product UX.</h2>
        <p class="small-copy">The clearest GTM lane is not “AI makes screens.” It is: UX Pilot helps teams turn product intent into editable, design-system-aware Figma work faster, while staying honest about where app builders, website tools, and native Figma AI are stronger.</p>
      </div>
      <div class="insight-scorecard">
        <div><span class="caption">Core Message</span><strong>Product UX before production code</strong></div>
        <div><span class="caption">Primary Buyer</span><strong>Product designers + PMs</strong></div>
        <div><span class="caption">Do Not Claim</span><strong>Full-stack parity with app builders</strong></div>
      </div>
    </section>

    <section class="pmm-grid">
      <article class="dark-card pmm-card pmm-priority">
        <p class="caption">Executive Readout</p>
        <h3>The market is splitting into three buyer promises</h3>
        <div class="pmm-readout">
          <div><strong>Design-native AI</strong><span>Figma Make, Nodey, Anima, Stitch</span></div>
          <div><strong>App builders</strong><span>Lovable, Anything, FlutterFlow</span></div>
          <div><strong>Agentic canvases</strong><span>MagicPath, Paper, Magic Patterns</span></div>
        </div>
        <p class="small-copy">UX Pilot should win where teams need product UX quality, editable Figma output, and design-system control before engineering commitment.</p>
      </article>

      <article class="dark-card pmm-card">
        <p class="caption">Marketing Input</p>
        <h3>Message pillars to test</h3>
        <ul class="clean">
          <li>From PRD or rough idea to product-ready Figma flows.</li>
          <li>Generate with your real design system, not generic UI kits.</li>
          <li>Use Nodey when the team already lives in Figma and needs editable layers.</li>
        </ul>
      </article>

      <article class="dark-card pmm-card">
        <p class="caption">Product Input</p>
        <h3>Proof points that need to be visible</h3>
        <ul class="clean">
          <li>Show when generated layers reuse synced components.</li>
          <li>Expose flow logic and screen rationale, not only visual output.</li>
          <li>Make design-system fidelity measurable inside the product experience.</li>
        </ul>
      </article>

      <article class="dark-card pmm-card">
        <p class="caption">Sales Input</p>
        <h3>Qualification guardrails</h3>
        <ul class="clean">
          <li>If buyer wants working backend/mobile app first, compare carefully against Anything, Lovable, and FlutterFlow.</li>
          <li>If buyer wants website publishing, Framer and Gamma may be better positioned.</li>
          <li>If buyer wants Figma-native product design, lead with Nodey and Simple Sync.</li>
        </ul>
      </article>

      <article class="dark-card pmm-card pmm-wide">
        <p class="caption">Competitive Watchlist</p>
        <h3>What each group means for GTM</h3>
        <div class="pmm-table">
          ${[
            ["Figma-native risk", figmaNativeRisks, "Defend editability, component reuse, and workflow fit inside existing Figma files."],
            ["App-builder risk", appBuilders, "Do not overclaim full-stack delivery; position UX Pilot as the product design layer before build."],
            ["Positioning targets", marketingTargets, "Build comparison pages only around provable workflow differences, not generic better/worse claims."]
          ].map(([label, items, action]) => `
            <div>
              <strong>${label}</strong>
              <span>${items.map((c) => c.name).join(" · ")}</span>
              <small>${action}</small>
            </div>
          `).join("")}
        </div>
      </article>

      <article class="dark-card pmm-card pmm-wide">
        <p class="caption">Highest Internal Risk</p>
        <h3>Competitors requiring active monitoring</h3>
        <div class="rank-list">
          ${topThreats.map((c, index) => `
            <div class="rank-row">
              <span>${String(index + 1).padStart(2, "0")}</span>
              <div>
                <strong>${c.name}</strong>
                <small>${c.category} · internal risk ${c.threatLevel}/10</small>
              </div>
              <em>${c.recommendations[0]}</em>
            </div>
          `).join("")}
        </div>
      </article>

      <article class="dark-card pmm-card pmm-wide">
        <p class="caption">Next PMM Experiments</p>
        <h3>Use these as the next campaign and enablement inputs</h3>
        <div class="mini-table">
          ${[
            ["Landing page", "Figma-native AI design agent", "Target teams comparing Figma Make, Nodey, and Claude-style prototyping."],
            ["Sales asset", "App builder qualification", "Clarify when UX Pilot is the right step before Lovable, Anything, or FlutterFlow."],
            ["Product proof", "Design-system reuse demo", "Show synced components becoming real generated Figma layers."],
            ["Content test", "PRD to Figma flow", "Measure whether PMs understand UX Pilot as a product-thinking accelerator."]
          ].map(([type, title, detail]) => `
            <div>
              <strong>${type}</strong>
              <span>${title}</span>
              <small>${detail}</small>
            </div>
          `).join("")}
        </div>
      </article>
    </section>
  `;
}

function renderAll() {
  els.pageTitle.textContent = titles[state.route];
  document.querySelectorAll(".view").forEach((view) => view.classList.toggle("active", view.id === state.route));
  document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.route === state.route));
  els.filterControls.hidden = !["radar", "profiles", "battlecards"].includes(state.route);
  renderHome();
  renderMetrics();
  renderRadar();
  renderFeatureMatrix();
  renderPricing();
  renderProfiles();
  renderBattlecards();
  renderArena();
  renderInsights();
  updateChromeControls();
}

function initFilters() {
  const categories = ["all", ...new Set(competitors.filter((c) => c.id !== "ux-pilot").map((c) => c.category))];
  els.categoryFilter.innerHTML = categories.map((c) => `<option value="${c}">${c === "all" ? "All categories" : c}</option>`).join("");
}

document.addEventListener("click", (event) => {
  const route = event.target.closest("[data-route]")?.dataset.route;
  const profileId = event.target.closest("[data-profile-id]")?.dataset.profileId;
  const openProfile = event.target.closest("[data-open-profile]")?.dataset.openProfile;
  if (route) {
    state.route = route;
    document.querySelector(".sidebar").classList.remove("open");
    renderAll();
  }
  if (profileId || openProfile) {
    state.profileId = profileId || openProfile;
    state.route = "profiles";
    renderAll();
  }
  if (event.target.matches("[data-enter-arena]")) {
    showToast("Duel staged. Round-by-round analysis refreshed.");
  }
  const toastTrigger = event.target.closest("[data-toast]");
  if (toastTrigger) {
    showToast(toastTrigger.dataset.toast);
  }
});

els.sidebarToggle.addEventListener("click", () => {
  els.appShell.classList.toggle("sidebar-collapsed");
  localStorage.setItem("uxp-sidebar", els.appShell.classList.contains("sidebar-collapsed") ? "collapsed" : "expanded");
  updateChromeControls();
});

document.addEventListener("change", (event) => {
  if (event.target.id === "categoryFilter") state.category = event.target.value;
  if (event.target.id === "threatFilter") state.threat = event.target.value;
  if (event.target.matches("[data-arena-id]")) {
    const id = event.target.dataset.arenaId;
    if (id === "ux-pilot") {
      state.arenaSelected = event.target.checked ? ["ux-pilot", state.arenaSelected.find((selectedId) => selectedId !== "ux-pilot") || "magicpath"] : ["magicpath", "framer-3"];
    } else if (event.target.checked) {
      state.arenaSelected = ["ux-pilot", id];
    } else {
      state.arenaSelected = state.arenaSelected.filter((selectedId) => selectedId !== id);
    }
    if (state.arenaSelected.length < 2) state.arenaSelected = ["ux-pilot", "magicpath"];
  }
  renderAll();
});

els.searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderAll();
});

els.mobileMenu.addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("open");
});

initAccessGate();
