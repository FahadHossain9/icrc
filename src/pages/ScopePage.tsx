export function ScopePage() {
  return (
    <article className="scope-page">
      <h1>ICRC website redesign — project scope</h1>
      <p className="scope-lead">
        Summary aligned with the Nuvista / ICRC development proposal: migrate from legacy
        XHTML, table layouts, and iframes to a responsive, patient-centric platform for{' '}
        <strong>Infertility Care and Research Center (ICRC), Bangladesh</strong>{' '}
        (icrc-bd.com).
      </p>

      <section>
        <h2>Primary objectives</h2>
        <ul>
          <li>Patient acquisition and trust (local and international)</li>
          <li>Medically reviewed clinical education on infertility, diagnostics, and treatments</li>
          <li>Specialist profiles, facilities, success rates, and credibility content</li>
          <li>International patient services and academic / research visibility</li>
          <li>Lead generation (appointments, inquiries) and sponsor transparency</li>
        </ul>
      </section>

      <section>
        <h2>Proposed information architecture (high level)</h2>
        <ul>
          <li>
            <strong>Home</strong> — hero, service highlights, specialists, stats, testimonials,
            news
          </li>
          <li>
            <strong>About</strong> — mission/vision, history, leadership messages, disclosures
          </li>
          <li>
            <strong>Specialists</strong> — directory and profile pages with booking CTAs
          </li>
          <li>
            <strong>Services</strong> — infertility overview, male/female, diagnostics,
            treatments, embryology
          </li>
          <li>
            <strong>Departments, Facilities, International patients, Academics</strong> — per
            client reference structure
          </li>
        </ul>
      </section>

      <section>
        <h2>Technical direction</h2>
        <p>
          UTF-8, mobile-first responsive layout, modern SEO and structured data, WCAG 2.1 AA
          accessibility, performance and HTTPS. This Vite + React preview replaces the iframe
          shell so legacy content pages can be browsed in one app while the full redesign is
          implemented.
        </p>
      </section>
    </article>
  );
}
