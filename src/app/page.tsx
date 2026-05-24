"use client";

import { personalInfo, education, skills, timeline, projects, metrics, performanceRatings, leadership } from "./data/portfolio";
import { useState } from "react";

function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = ["About", "Skills", "Timeline", "Projects", "Analytics", "Performance", "Contact"];
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#0f172a]/80 border-b border-[#334155]">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        <span className="font-bold text-lg gradient-text">AP</span>
        <div className="hidden md:flex gap-6">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-[#94a3b8] hover:text-[#38bdf8] transition-colors">
              {l}
            </a>
          ))}
        </div>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-[#94a3b8] text-xl">
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden border-t border-[#334155] bg-[#0f172a] px-6 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMobileOpen(false)} className="text-sm text-[#94a3b8] hover:text-[#38bdf8]">
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section id="about" className="pt-24 md:pt-28 pb-12 md:pb-16 px-4 md:px-6 max-w-6xl mx-auto">
      <div className="fade-in">
        <p className="text-[#38bdf8] font-mono text-sm mb-2">Hello, I&apos;m</p>
        <h1 className="text-3xl md:text-5xl font-bold mb-3">{personalInfo.name}</h1>
        <p className="text-lg md:text-xl text-[#94a3b8] mb-4 md:mb-6">{personalInfo.title}</p>
        <p className="text-sm md:text-base text-[#cbd5e1] max-w-3xl leading-relaxed mb-6 md:mb-8">{personalInfo.summary}</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
          {[
            { label: "Current RPS (UPI)", value: "20K+" },
            { label: "UPI Txns/Day", value: "500M+" },
            { label: "Billpay Txns/Day", value: "4M+" },
            { label: "Years of Exp", value: "4.5+" },
          ].map((s) => (
            <div key={s.label} className="bg-[#1e293b] border border-[#334155] rounded-lg p-3 md:p-4 text-center card-hover">
              <div className="text-xl md:text-2xl font-bold text-[#38bdf8]">{s.value}</div>
              <div className="text-[10px] md:text-xs text-[#94a3b8] mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="flex gap-3 md:gap-4 flex-wrap">
          <a href="/portfolio/Arjun_Prasad_Resume.pdf" download className="px-5 md:px-6 py-2.5 md:py-3 bg-[#38bdf8] text-[#0f172a] font-bold rounded-lg hover:bg-[#7dd3fc] transition-colors text-sm md:text-base shadow-lg shadow-[#38bdf8]/20 animate-pulse hover:animate-none">
            Download Resume
          </a>
          <a href={personalInfo.linkedin} target="_blank" className="px-4 md:px-5 py-2.5 border border-[#334155] text-[#e2e8f0] rounded-lg hover:border-[#38bdf8] transition-colors text-sm">
            LinkedIn
          </a>
          <a href={personalInfo.github} target="_blank" className="px-4 md:px-5 py-2.5 border border-[#334155] text-[#e2e8f0] rounded-lg hover:border-[#38bdf8] transition-colors text-sm">
            GitHub
          </a>
          <a href="#contact" className="px-4 md:px-5 py-2.5 border border-[#334155] text-[#e2e8f0] rounded-lg hover:border-[#38bdf8] transition-colors text-sm">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-10 md:py-12 px-4 md:px-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Technical Stack</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="bg-[#1e293b] border border-[#334155] rounded-lg p-4">
            <h3 className="text-sm font-semibold text-[#38bdf8] uppercase tracking-wide mb-3">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span key={item} className="text-xs bg-[#0f172a] border border-[#334155] px-2.5 py-1 rounded-full text-[#cbd5e1]">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="mt-8 bg-[#1e293b] border border-[#334155] rounded-lg p-5">
        <h3 className="text-sm font-semibold text-[#38bdf8] uppercase tracking-wide mb-3">Education</h3>
        <div className="flex flex-wrap justify-between items-start">
          <div>
            <p className="font-medium">{education.degree}</p>
            <p className="text-sm text-[#94a3b8]">{education.university}</p>
          </div>
          <span className="text-xs text-[#94a3b8] bg-[#0f172a] border border-[#334155] px-3 py-1 rounded-full">{education.period}</span>
        </div>
        {education.achievements.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {education.achievements.map((a) => (
              <span key={a} className="text-xs text-[#4ade80] bg-[#4ade80]/10 border border-[#4ade80]/20 px-2.5 py-1 rounded-full">{a}</span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section id="timeline" className="py-12 md:py-16 px-4 md:px-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-2">Career Timeline</h2>
      <p className="text-[#94a3b8] mb-8 text-sm md:text-base">My professional journey from intern to owning critical payment infrastructure</p>

      <div className="relative">
        {timeline.map((item, i) => (
          <div key={i} className="relative pl-8 md:pl-12 pb-10 last:pb-0">
            {i < timeline.length - 1 && <div className="timeline-line" />}
            <div className="absolute left-0 top-1 w-6 h-6 md:w-10 md:h-10 rounded-full bg-[#1e293b] border-2 border-[#38bdf8] flex items-center justify-center">
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#38bdf8]" />
            </div>
            <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 md:p-5 card-hover">
              <div className="flex flex-col md:flex-row md:flex-wrap justify-between items-start gap-1 md:gap-2 mb-2">
                <div>
                  <h3 className="font-semibold text-base md:text-lg">{item.role}</h3>
                  <p className="text-[#38bdf8] text-xs md:text-sm">{item.company} — {item.location}</p>
                </div>
                <span className="text-xs bg-[#0f172a] border border-[#334155] px-2 md:px-3 py-0.5 md:py-1 rounded-full text-[#94a3b8]">
                  {item.period}
                </span>
              </div>
              <ul className="mt-3 space-y-1.5">
                {item.highlights.map((h, j) => (
                  <li key={j} className="text-xs md:text-sm text-[#cbd5e1] flex items-start gap-2">
                    <span className="text-[#38bdf8] mt-0.5 shrink-0">›</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const [expanded, setExpanded] = useState<Set<number>>(new Set([0, 1, 2]));

  return (
    <section id="projects" className="py-12 md:py-16 px-4 md:px-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-2">Key Projects</h2>
      <p className="text-[#94a3b8] mb-6 md:mb-8 text-sm md:text-base">Production systems I designed, built, or significantly improved</p>

      <div className="space-y-3 md:space-y-4">
        {projects.map((project, i) => (
          <div key={i} className="bg-[#1e293b] border border-[#334155] rounded-lg overflow-hidden card-hover">
            <button
              onClick={() => {
                const next = new Set(expanded);
                if (next.has(i)) next.delete(i); else next.add(i);
                setExpanded(next);
              }}
              className="w-full text-left p-4 md:p-5 flex justify-between items-start"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-1">
                  <h3 className="font-semibold text-base md:text-lg">{project.title}</h3>
                  <span className="text-[10px] md:text-xs bg-[#38bdf8]/10 text-[#38bdf8] px-2 py-0.5 rounded-full border border-[#38bdf8]/30">
                    {project.tag}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-[#94a3b8]">{project.period}</p>
              </div>
              <span className={`text-[#94a3b8] text-xl shrink-0 ml-2 transition-transform duration-300 ${expanded.has(i) ? "rotate-180" : ""}`}>&#x25BE;</span>
            </button>

            {expanded.has(i) && (
              <div className="px-4 md:px-5 pb-4 md:pb-5 border-t border-[#334155] pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-[#f87171] mb-2">Problem</h4>
                    <p className="text-sm text-[#cbd5e1]">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#4ade80] mb-2">Solution</h4>
                    <p className="text-sm text-[#cbd5e1]">{project.solution}</p>
                  </div>
                </div>

                <div className="mt-5">
                  <h4 className="text-sm font-semibold text-[#38bdf8] mb-3">Impact</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {project.impact.map((imp, j) => (
                      <div key={j} className="bg-[#0f172a] rounded-lg p-3 border border-[#334155]">
                        <div className="text-xs text-[#94a3b8] mb-1">{imp.metric}</div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-[#f87171] line-through">{imp.before}</span>
                          <span className="text-[#94a3b8]">→</span>
                          <span className="text-sm font-semibold text-[#4ade80]">{imp.after}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="text-xs bg-[#0f172a] border border-[#334155] px-2 py-1 rounded text-[#94a3b8]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function Analytics() {
  const maxMR = Math.max(...metrics.mergeRequests.byYear.map((y) => y.count));

  return (
    <section id="analytics" className="py-12 md:py-16 px-4 md:px-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-2">Engineering Output</h2>
      <p className="text-[#94a3b8] mb-6 md:mb-8 text-sm md:text-base">Data-backed evidence of consistent delivery across 4+ years</p>

      {/* Summary Stats */}
      <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 mb-8 md:mb-10">
        {[
          { label: "Merge Requests", value: metrics.mergeRequests.total },
          { label: "Tasks Delivered", value: metrics.engineeringTasks.total },
          { label: "Code Reviews", value: metrics.codeReviews },
          { label: "Docs Authored", value: metrics.documentation },
          { label: "DR Drills", value: metrics.drDrills },
        ].map((s) => (
          <div key={s.label} className="bg-[#1e293b] border border-[#334155] rounded-lg p-3 md:p-4 text-center">
            <div className="text-lg md:text-2xl font-bold text-[#38bdf8] stat-animate">{s.value}</div>
            <div className="text-[10px] md:text-xs text-[#94a3b8] mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* MR Chart */}
      <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 md:p-6 mb-4 md:mb-6">
        <h3 className="font-semibold mb-4">Merge Requests by Year</h3>
        <div className="space-y-3">
          {metrics.mergeRequests.byYear.map((year) => (
            <div key={year.year} className="flex items-center gap-2 md:gap-4">
              <span className="text-xs md:text-sm text-[#94a3b8] w-8 md:w-10 shrink-0">{year.year}</span>
              <div className="flex-1 bg-[#0f172a] rounded-full h-6 md:h-7 overflow-hidden relative">
                <div
                  className="h-full bg-gradient-to-r from-[#0ea5e9] to-[#38bdf8] rounded-full flex items-center justify-end pr-2 md:pr-3 transition-all duration-700"
                  style={{ width: `${(year.count / maxMR) * 100}%` }}
                >
                  <span className="text-[10px] md:text-xs font-bold text-[#0f172a]">{year.count}</span>
                </div>
              </div>
              <span className="text-[10px] md:text-xs text-[#94a3b8] w-32 md:w-48 hidden sm:block truncate">{year.focus}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Repo Breakdown */}
      <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 md:p-6 mb-4 md:mb-6">
        <h3 className="font-semibold mb-4">Repository Contributions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {metrics.mergeRequests.byRepo.slice(0, 8).map((repo) => (
            <div key={repo.repo} className="flex items-center justify-between bg-[#0f172a] rounded-lg px-3 md:px-4 py-2 md:py-2.5 border border-[#334155]">
              <div className="min-w-0 flex-1">
                <span className="text-xs md:text-sm font-medium truncate block">{repo.repo}</span>
                <span className={`text-[10px] md:text-xs px-1.5 md:px-2 py-0.5 rounded-full ${
                  repo.role === "Primary Owner" || repo.role === "Creator & Owner"
                    ? "bg-[#38bdf8]/10 text-[#38bdf8]"
                    : repo.role === "Owner" || repo.role === "Major Contributor"
                    ? "bg-[#818cf8]/10 text-[#818cf8]"
                    : "bg-[#334155] text-[#94a3b8]"
                }`}>
                  {repo.role}
                </span>
              </div>
              <span className="font-bold text-[#38bdf8] ml-2 shrink-0">{repo.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Task Breakdown */}
      <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 md:p-6">
        <h3 className="font-semibold mb-4">Engineering Task Delivery</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 md:gap-3">
          {metrics.engineeringTasks.breakdown.map((item) => (
            <div key={item.type} className="bg-[#0f172a] rounded-lg p-2.5 md:p-3 border border-[#334155] text-center">
              <div className="text-lg md:text-xl font-bold text-[#e2e8f0]">{item.count}</div>
              <div className="text-[10px] md:text-xs text-[#94a3b8] mt-0.5">{item.type}</div>
              <div className="text-[10px] md:text-xs text-[#4ade80] mt-1">{item.status}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Performance() {
  return (
    <section id="performance" className="py-12 md:py-16 px-4 md:px-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-2">Performance & Recognition</h2>
      <p className="text-[#94a3b8] mb-6 md:mb-8 text-sm md:text-base">Consistently rated performer with highest distinction in FY23-24</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
        {performanceRatings.map((rating) => (
          <div
            key={rating.cycle}
            className={`bg-[#1e293b] border rounded-lg p-5 ${
              rating.isHighest ? "border-[#38bdf8] ring-1 ring-[#38bdf8]/30" : "border-[#334155]"
            }`}
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-semibold">{rating.cycle}</h3>
                <p className="text-xs text-[#94a3b8]">{rating.highlights}</p>
              </div>
              <span className={`text-sm font-bold px-3 py-1 rounded-full ${
                rating.isHighest
                  ? "bg-[#38bdf8]/20 text-[#38bdf8] border border-[#38bdf8]/30"
                  : "bg-[#334155] text-[#94a3b8]"
              }`}>
                {rating.rating}
              </span>
            </div>
            {rating.quote && (
              <blockquote className="mt-3 pl-3 border-l-2 border-[#38bdf8]/50 text-sm text-[#cbd5e1] italic">
                {rating.quote}
                <footer className="text-xs text-[#94a3b8] mt-1 not-italic">— {rating.quotedBy}</footer>
              </blockquote>
            )}
          </div>
        ))}
      </div>

      {/* Leadership */}
      <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 md:p-6">
        <h3 className="font-semibold mb-4 md:mb-6 text-lg">Leadership & Impact</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {leadership.map((item) => (
            <div key={item.activity} className="bg-[#0f172a] border border-[#334155] rounded-lg p-3 md:p-4 hover:border-[#38bdf8]/50 transition-colors">
              <div className="flex items-center gap-2 mb-1.5 md:mb-2">
                <span className="text-lg md:text-xl">{item.icon}</span>
                <span className="font-semibold text-xs md:text-sm text-[#e2e8f0]">{item.activity}</span>
              </div>
              {item.metric && (
                <div className="text-xl md:text-2xl font-bold text-[#38bdf8] mb-1">{item.metric}</div>
              )}
              <p className="text-[10px] md:text-xs text-[#94a3b8] leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-12 md:py-16 px-4 md:px-6 max-w-6xl mx-auto">
      <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-6 md:p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">Let&apos;s Connect</h2>
        <p className="text-[#94a3b8] mb-6 max-w-lg mx-auto">
          Looking for <span className="text-[#e2e8f0] font-medium">Senior Backend Engineer</span> roles at product-focused companies.
          Passionate about distributed systems, high-throughput infrastructure, and building reliable payment platforms at scale.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href={`mailto:${personalInfo.email}`} className="px-5 py-2.5 bg-[#38bdf8] text-[#0f172a] font-medium rounded-lg hover:bg-[#7dd3fc] transition-colors text-sm">
            {personalInfo.email}
          </a>
          <a href={personalInfo.linkedin} target="_blank" className="px-5 py-2.5 border border-[#334155] text-[#e2e8f0] rounded-lg hover:border-[#38bdf8] transition-colors text-sm">
            LinkedIn
          </a>
          <a href={personalInfo.github} target="_blank" className="px-5 py-2.5 border border-[#334155] text-[#e2e8f0] rounded-lg hover:border-[#38bdf8] transition-colors text-sm">
            GitHub
          </a>
        </div>
        <p className="text-xs text-[#64748b] mt-6">Phone: {personalInfo.phone} | Location: {personalInfo.location}</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#334155] py-6 px-6 text-center text-xs text-[#64748b]">
      <p>Designed & engineered by Arjun Prasad • No mock data — just 4.5 years of shipping at scale</p>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Skills />
      <Timeline />
      <Projects />
      <Analytics />
      <Performance />
      <Contact />
      <Footer />
    </main>
  );
}
