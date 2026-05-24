export const personalInfo = {
  name: "Arjun Prasad",
  title: "Software Engineer | Backend & Distributed Systems",
  email: "arjunpd1998@gmail.com",
  phone: "+91 8860741978",
  linkedin: "https://linkedin.com/in/arjun-prasad-b3576118b/",
  github: "https://github.com/mr-nastik",
  location: "Pune, India",
  yearsOfExp: 4.5,
  summary:
    "Backend engineer with 4.5+ years building high-throughput payment systems at PhonePe — India's largest digital payments platform serving 500M+ users. Currently on the UPI Core Transactional team handling 20,000+ RPS. Previously owned distributed microservices processing 4M+ transactions daily across BBPS infrastructure. Built greenfield services, reduced infra costs 45% with a custom async framework, and eliminated operational bottlenecks at scale.",
};

export const skills = {
  languages: ["Java 17", "Java 8", "C++"],
  frameworks: ["DropWizard", "Spring Boot", "Hibernate", "JUnit", "Maven"],
  databases: ["MariaDB (Sharded)", "Aerospike", "SQL"],
  infrastructure: ["Microservices", "Active-Active DC", "Docker", "CI/CD", "Nginx", "Linux"],
  messaging: ["RabbitMQ", "MemQ", "Event-driven Processing"],
  practices: ["System Design", "Distributed Systems", "Database Sharding", "REST APIs", "DR/BCP", "Agile"],
};

export const timeline = [
  {
    period: "Jun 2019 – Aug 2019",
    role: "Software Engineer Intern",
    company: "Ziksan Consulting Service",
    location: "India",
    highlights: ["Optimized database operations with SQL — 60% faster data retrieval"],
    type: "intern",
  },
  {
    period: "Jul 2021 – Feb 2022",
    role: "Software Engineer",
    company: "Samsung Research Institute",
    location: "Noida, India",
    highlights: [
      "Reduced audio device setup time by 30% through Bluetooth module optimization (1,000+ devices)",
      "Achieved SWC Professional Test certification (Data Structures & Algorithms)",
    ],
    type: "fulltime",
  },
  {
    period: "Feb 2022 – Feb 2026",
    role: "Software Engineer → SDE-2 (Backend)",
    company: "PhonePe — BBPS Pod",
    location: "Pune, India",
    highlights: [
      "Built UPMS microservice from scratch — 500+ RPS, 20% transaction growth",
      "Created Axon framework — async messaging abstraction achieving 45% infra cost reduction org-wide",
      "Overhauled status-check pipeline — 20,000+ pending/day → <100/day",
      "Migrated Paylink to modern framework — 15% transaction increase",
      "Led Loan API 1.1 — external NPCI communication and spec compliance",
      "Designed Checkin V3 and Error Bottomsheet standardization",
      "Active-Active DC migration planning, MemQ integration",
      "Mentoring 3 engineers, deputy to senior architect",
    ],
    type: "fulltime",
  },
  {
    period: "Mar 2026 – Present",
    role: "SDE-2 (Backend Engineer)",
    company: "PhonePe — UPI Core Transactional Team",
    location: "Pune, India",
    highlights: [
      "Handling 20,000+ RPS on India's highest-traffic payment rail (UPI)",
      "Working on E2C refund flow — enabling status visibility for 2–2.5L daily refunds where users currently have zero in-app tracking (must check bank statements manually)",
      "Ramping up on NPCI contract architecture, UDIR (UPI Dispute Resolution) product & engineering design",
      "Understanding core transactional flows, routing, and settlement infrastructure",
    ],
    type: "fulltime",
  },
];

export const projects = [
  {
    title: "UPMS — Unified Presentment & Management System",
    period: "Oct 2023 – Mar 2024",
    tag: "Greenfield Microservice",
    problem:
      "PhonePe relied on expensive polling-based bill fetching from BBPS. NPCI introduced a push-based model. No existing service could handle it.",
    solution:
      "Independently designed and built a new microservice from scratch — architecture, sharded DB schema, proxy layer, recon system, biller kill-switches. Completed NPCI certification and data migration from monolith.",
    impact: [
      { metric: "Service RPS", before: "0 (didn't exist)", after: "500+ RPS" },
      { metric: "Transaction Growth", before: "Baseline", after: "+20%" },
      { metric: "Bill Availability", before: "Polling (delayed)", after: "Push-based (real-time)" },
      { metric: "Architecture", before: "Monolithic", after: "Independent microservice" },
      { metric: "Time to Production", before: "N/A", after: "5 months (zero to live)" },
    ],
    techStack: ["Java 17", "DropWizard", "MariaDB (Sharded)", "Aerospike", "RabbitMQ", "Nginx"],
  },
  {
    title: "Status Check Pipeline Overhaul",
    period: "Jul 2023 – Jun 2024",
    tag: "System Redesign",
    problem:
      "After BBPS deprecated status-check failure responses, 20,000–25,000 transactions/day got stuck in pending state. Manual resolution took 9+ hours with human errors and wrong refunds.",
    solution:
      "Analyzed pipeline, identified 4 categories of orphan checks. Eliminated dead code, enforced txnReferenceId validation, automated terminal-state resolution, and split status check into independent service module.",
    impact: [
      { metric: "Daily Pending Txns", before: "20,000–25,000", after: "<100" },
      { metric: "Resolution Time", before: "9+ hours (manual)", after: "<10 minutes (automated)" },
      { metric: "Manual Ops Effort", before: "100%", after: "10% (90% reduction)" },
      { metric: "Wrong Refund Risk", before: "Present", after: "Eliminated" },
    ],
    techStack: ["Java", "MariaDB", "Grafana", "Event Pipeline"],
  },
  {
    title: "Paylink & ClickPay — Framework Migration",
    period: "Jul 2023 – Jun 2024",
    tag: "Platform Upgrade",
    problem:
      "Bill payment links (Paylink) were running on deprecated framework, pinned to single BBPS instance, with no monitoring and outdated API spec (v1.2).",
    solution:
      "Migrated entire flow to modern framework. Added WhatsApp support, multi-instance routing, spec upgrade to v1.6 with plan selection, and full monitoring pipeline.",
    impact: [
      { metric: "Monthly Transactions", before: "Baseline", after: "+15% increase" },
      { metric: "Framework", before: "Deprecated (FFV1)", after: "Current (FFV3)" },
      { metric: "API Spec", before: "v1.2", after: "v1.6" },
      { metric: "Routing", before: "Single instance", after: "Multi-instance load balanced" },
      { metric: "Downtime", before: "N/A", after: "Zero during migration" },
    ],
    techStack: ["Java", "DropWizard", "WhatsApp API", "BBPS Protocol"],
  },
  {
    title: "Loan Repayment API 1.1",
    period: "Jul 2024 – Present",
    tag: "Delivered",
    problem:
      "BBPS introduced API 1.1 for loan payments with advance payment support, EMI steppers, and partial pay — requiring significant backend changes and external coordination with NPCI.",
    solution:
      "Leading end-to-end backend implementation: spec parsing, validation rules, routing, response mapping. Independently managing communication with NPCI to resolve spec deviations.",
    impact: [
      { metric: "Epics Delivered", before: "N/A", after: "3 (26 subtasks)" },
      { metric: "External Communication", before: "Via manager", after: "Independent ownership" },
      { metric: "Spec Compliance", before: "Deviations present", after: "Issues identified & escalated" },
    ],
    techStack: ["Java 17", "BBPS API 1.1", "XSD", "MariaDB"],
  },
  {
    title: "BBPS Active-Active Data Center Migration",
    period: "Sep 2025 – Feb 2026",
    tag: "Infrastructure Reliability",
    problem:
      "BBPS services ran in a single active data center with passive DR — any DC failure meant full downtime for bill payments affecting millions of users. RabbitMQ couldn't work cross-DC, and all async processing was tightly coupled to a single DC.",
    solution:
      "Led the Active-Active migration: redesigned DB schema for circular replication compatibility across data centers, resolved replication conflicts, migrated async workers from RabbitMQ to MemQ (DC-aware queue), validated cross-DC routing, wrote architecture docs, and conducted DR drills to certify readiness.",
    impact: [
      { metric: "DC Architecture", before: "Active-Passive (single DC)", after: "Active-Active (multi-DC)" },
      { metric: "Availability", before: "DC failure = full downtime", after: "Zero-downtime DC failover" },
      { metric: "DB Replication", before: "Single-master writes", after: "Circular replication (multi-master)" },
      { metric: "Queue System", before: "RabbitMQ (single-DC only)", after: "MemQ (DC-aware, partitioned)" },
      { metric: "Blast Radius", before: "100% (all users affected)", after: "~50% (single DC scoped)" },
    ],
    techStack: ["Java 17", "MariaDB (Circular Replication)", "MemQ", "RabbitMQ", "Active-Active DC", "DR Drills"],
  },
  {
    title: "Axon — Async Messaging Framework",
    period: "May 2025 – Present",
    tag: "Greenfield Platform Library",
    problem:
      "PhonePe's backend services each implemented their own RabbitMQ/MemQ integration — duplicated boilerplate, inconsistent retry/fallback logic, and expensive infra due to over-provisioned queues with no shared resource management.",
    solution:
      "Designed and built Axon from scratch — a lightweight async messaging framework abstracting RMQ and MemQ with unified publish API, configurable routing strategies, MemQ→RMQ fallback, dynamic worker buckets, and shared connection pooling. Published as reusable Dropwizard bundle adopted across teams.",
    impact: [
      { metric: "Infra Cost", before: "Baseline", after: "45% reduction across PhonePe" },
      { metric: "Integration Effort", before: "Days (per service)", after: "Minutes (bundle plug-in)" },
      { metric: "Queue Management", before: "Manual per-service", after: "Config-driven with validation" },
      { metric: "Fault Tolerance", before: "No fallback", after: "MemQ→RMQ automatic fallback" },
      { metric: "Adoption", before: "0 services", after: "Multiple teams org-wide" },
    ],
    techStack: ["Java 17", "Dropwizard", "RabbitMQ", "MemQ", "Builder Pattern", "Lifecycle Management"],
  },
  {
    title: "Category Onboarding (6 Categories)",
    period: "2022 – 2024",
    tag: "Process Innovation",
    problem:
      "Each new bill payment category required full engineering involvement (solution design, coding, testing, security, accounting) — blocking other work.",
    solution:
      "Led 6 category launches (Hospitals, NCMC, Recurring Deposits, Rentals, NPS, You Broadband). Then created a reusable Category Onboarding SOP that eliminated engineering dependency entirely.",
    impact: [
      { metric: "User Transaction Growth", before: "Baseline", after: "+5%" },
      { metric: "Engineering Time Per Category", before: "2-4 weeks", after: "0 (SOP-based)" },
      { metric: "Categories Launched by Ops (no eng)", before: "0", after: "2 (Rentals, NPS)" },
    ],
    techStack: ["Java", "BBPS Protocol", "Catalogue Service", "Process Design"],
  },
  {
    title: "Piped Gas Meter Reading via Camera",
    period: "2025 (1 week sprint)",
    tag: "Hackathon-style Delivery",
    problem:
      "Piped gas billers relied on manual door-to-door meter reading — sending field agents to every customer's house to note readings before generating bills. Costly, slow, and error-prone.",
    solution:
      "Built end-to-end integration in 1 week (contract finalization to production): camera-based meter reading capture in PhonePe app → submit to biller → biller generates bill → user pays instantly. First-of-its-kind integration — only PhonePe supports this flow.",
    impact: [
      { metric: "Time to Production", before: "N/A", after: "1 week (contract to live)" },
      { metric: "Manual Labor", before: "Field agents visit every home", after: "Eliminated (user self-service)" },
      { metric: "Industry Recognition", before: "N/A", after: "Demonstrated at GFF 2025 (Global Fintech Festival)" },
      { metric: "Market Position", before: "No app supported this", after: "PhonePe-exclusive integration" },
    ],
    techStack: ["Java", "BBPS Protocol", "Camera Integration", "Biller API", "Production Deploy"],
  },
  {
    title: "E2C Refund Status Visibility",
    period: "Mar 2026 – Present",
    tag: "In Progress",
    problem:
      "2–2.5 lakh daily UPI refunds from external merchant PSPs (GPay→PhonePe) have zero in-app visibility. Users must manually check bank statements to know if a refund succeeded or failed — causing support tickets and poor user experience.",
    solution:
      "Building end-to-end refund status tracking: integrating with NPCI refund callbacks, surfacing real-time refund state in PhonePe app, handling edge cases for failed/partial refunds across external PSP flows.",
    impact: [
      { metric: "Daily Refunds Affected", before: "2–2.5L (no visibility)", after: "Full in-app status tracking" },
      { metric: "User Experience", before: "Check bank statement manually", after: "Real-time refund status in app" },
      { metric: "Support Tickets", before: "High (refund queries)", after: "Expected significant reduction" },
    ],
    techStack: ["Java", "UPI Protocol", "NPCI Integration", "Event Pipeline"],
  },
];

export const metrics = {
  mergeRequests: {
    total: 345,
    byYear: [
      { year: "2022", count: 19, focus: "Onboarding, Enhancement 13" },
      { year: "2023", count: 90, focus: "Categories, UPMS, Status Check" },
      { year: "2024", count: 126, focus: "UPMS live, Paylink, Checkin V3, Loan 1.1" },
      { year: "2025", count: 89, focus: "MemQ, Active-Active, Axon, Refactoring" },
      { year: "2026", count: 21, focus: "Category Core, Confirm API" },
    ],
    byRepo: [
      { repo: "nexus-bbps", count: 101, role: "Primary Owner" },
      { repo: "nexus", count: 70, role: "Major Contributor" },
      { repo: "nexus-billpay", count: 62, role: "Major Contributor" },
      { repo: "bbps-models", count: 45, role: "Owner" },
      { repo: "nexus-modules", count: 23, role: "Contributor" },
      { repo: "bbps-upms", count: 18, role: "Creator & Owner" },
      { repo: "nexus-recon", count: 6, role: "Contributor" },
      { repo: "axon", count: 5, role: "Creator & Owner" },
      { repo: "upi-client", count: 5, role: "Contributor" },
      { repo: "catalogue-service", count: 5, role: "Contributor" },
      { repo: "bill-manager", count: 3, role: "Contributor" },
      { repo: "others", count: 2, role: "Contributor" },
    ],
  },
  engineeringTasks: {
    total: 605,
    completed: 479,
    completionRate: 79,
    breakdown: [
      { type: "Epics", count: 8, status: "All completed" },
      { type: "Features", count: 12, status: "All shipped" },
      { type: "Tasks", count: 321, status: "79% done" },
      { type: "Bugs Fixed", count: 76, status: "All resolved" },
      { type: "Sub-tasks", count: 176, status: "Across 28 projects" },
    ],
  },
  codeReviews: 117,
  documentation: 356,
  drDrills: 6,
};

export const performanceRatings = [
  {
    cycle: "FY 2021-22",
    rating: "Achieved",
    ratingLevel: "A",
    highlights: "Rapid onboarding, domain depth in BBPS, first category launch",
  },
  {
    cycle: "FY 2022-23",
    rating: "Achieved",
    ratingLevel: "A",
    highlights: "Category launches (HSP, RD), operational ownership, audit compliance, SOPs",
  },
  {
    cycle: "FY 2023-24",
    rating: "Distinguished",
    ratingLevel: "D",
    highlights: "UPMS from scratch, Status Check revamp, 10+ projects delivered",
    isHighest: true,
    quote:
      '"Arjun has shown remarkable ownership through the year, for everything BBPS. UPMS project was completely managed by Arjun, with minimal review comments. He completed the implementation flawlessly and quite quickly."',
    quotedBy: "Ketan Arun Daithankar, Engineering Manager",
  },
  {
    cycle: "FY 2024-25",
    rating: "Achieved",
    ratingLevel: "A",
    highlights: "Checkin V3, Loan 1.1, Error Bottomsheet, deputy architect role",
    quote:
      '"The BBPS POD can depend on Arjun to pick up any complex tasks now. He has earned the trust of his team as a person who can help and get things done."',
    quotedBy: "Ketan Arun Daithankar, Engineering Manager",
  },
];

export const leadership = [
  { activity: "Mentoring", detail: "Mentoring 3 junior engineers — code reviews, architecture guidance, ownership delegation" },
  { activity: "Code Reviews", detail: "117 MRs reviewed — ensuring quality, design consistency, and knowledge sharing" },
  { activity: "Deputy Architect", detail: "Acting as deputy for senior architect — design decisions, production triage, unblocking" },
  { activity: "External Representation", detail: "Independently representing PhonePe in BBPS/NPCI meetings — spec discussions, issue escalation" },
  { activity: "Hiring", detail: "Created problem statements for campus hiring; shadowing interview panels" },
  { activity: "Documentation", detail: "356 pages authored — SOPs, system designs, flow diagrams, onboarding guides" },
];
