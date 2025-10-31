export default function Page() {
  return (
    <main className="container">
      <section className="card header">
        <div className="avatar">
          <img src="/avatar.svg" alt="Avatar" />
        </div>
        <div className="header-text">
          <h1>Your Name</h1>
          <p className="headline">Senior Software Engineer ? Web & AI</p>
          <p className="meta">San Francisco Bay Area ? 10,000+ followers</p>
          <div className="actions">
            <a className="btn primary" href="#connect">Connect</a>
            <a className="btn" href="#message">Message</a>
            <a className="btn" href="#more">More</a>
          </div>
        </div>
      </section>

      <section className="grid">
        <div className="card about">
          <h2>About</h2>
          <p>
            Builder focused on delightful user experiences and pragmatic AI. I ship fast,
            mentor teams, and turn ambiguity into elegant, reliable products.
          </p>
        </div>
        <div className="card highlights">
          <h2>Highlights</h2>
          <ul>
            <li>Leading AI assistant that serves 1M+ users/month</li>
            <li>Cut infra cost by 38% with profiling and caching</li>
            <li>OSS maintainer of a popular React library</li>
          </ul>
        </div>
      </section>

      <section className="card experience">
        <h2>Experience</h2>
        <div className="item">
          <div className="item-title">
            <strong>Staff Engineer</strong> ? Acme AI
          </div>
          <div className="item-meta">2022 ? Present ? San Francisco, CA ? Full-time</div>
          <ul>
            <li>Architected multi-tenant Next.js platform processing 2B+ requests/year.</li>
            <li>Shipped retrieval-augmented generation (RAG) features boosting CSAT by 24%.</li>
            <li>Led migration to React Server Components; 17% faster TTFB.</li>
          </ul>
        </div>
        <div className="item">
          <div className="item-title">
            <strong>Senior Frontend Engineer</strong> ? Globex
          </div>
          <div className="item-meta">2019 ? 2022 ? Remote ? Full-time</div>
          <ul>
            <li>Owned design system across 12 web apps; reduced UI defects by 31%.</li>
            <li>Built performance budgets; cut LCP from 4.3s to 1.7s.</li>
            <li>Mentored 6 engineers; instituted quarterly growth plans.</li>
          </ul>
        </div>
      </section>

      <section className="grid">
        <div className="card education">
          <h2>Education</h2>
          <div className="item">
            <div className="item-title"><strong>State University</strong> ? B.S. Computer Science</div>
            <div className="item-meta">2015 ? 2019</div>
          </div>
        </div>
        <div className="card skills">
          <h2>Skills</h2>
          <div className="chips">
            {[
              "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "PostgreSQL",
              "GraphQL", "Tailwind CSS", "Vercel", "OpenAI APIs", "LangChain"
            ].map((s) => (
              <span key={s} className="chip">{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="card projects">
        <h2>Projects</h2>
        <div className="item">
          <div className="item-title"><strong>InsightBoard</strong> ? Analytics for product teams</div>
          <div className="item-meta">Next.js, tRPC, Postgres</div>
          <p>Built end-to-end dashboards with row-level permissions and near-real-time updates.</p>
        </div>
        <div className="item">
          <div className="item-title"><strong>PromptHub</strong> ? Collaborative prompt management</div>
          <div className="item-meta">React, Vercel, OpenAI</div>
          <p>Versioned prompts, batch tests, and evaluation reports for AI teams.</p>
        </div>
      </section>

      <footer className="footer">
        <a href="mailto:you@example.com">Email</a>
        <a href="https://x.com" target="_blank" rel="noreferrer">X</a>
        <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
      </footer>
    </main>
  );
}
