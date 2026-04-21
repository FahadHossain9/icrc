import { NavLink } from 'react-router-dom';

const item = (to: string, label: string, end?: boolean) => (
  <li>
    <NavLink to={to} end={end} className={({ isActive }) => (isActive ? 'is-active' : undefined)}>
      {label}
    </NavLink>
  </li>
);

const sub = (links: { to: string; label: string }[]) => (
  <ul>
    {links.map(({ to, label }) => (
      <li key={to}>
        <NavLink to={to} className={({ isActive }) => (isActive ? 'is-active' : undefined)}>
          {label}
        </NavLink>
      </li>
    ))}
  </ul>
);

export function SidebarNav() {
  return (
    <nav className="sidebar-nav glossymenu" aria-label="Clinical sections">
      <ul id="verticalmenu">
        <li>
          <div className="sidebar-nav__banner menu">
            <img src="/images/mn.gif" width={186} height={53} alt="" />
          </div>
        </li>
        {item('/', 'Home', true)}
        <li>
          <NavLink to="/infertility">
            <strong>Infertility</strong>
          </NavLink>
          {sub([
            { to: '/maleinfertility', label: 'Male Infertility' },
            { to: '/femaleinfertility', label: 'Female Infertility' },
          ])}
        </li>
        <li>
          <span className="sidebar-nav__nolink">Testing</span>
          {sub([
            { to: '/tmaleie', label: 'Male infertility and Evaluation' },
            { to: '/tfemaleie', label: 'Female infertility and Evaluation' },
            { to: '/hsg', label: 'Hysterosalpingogram' },
            { to: '/laparoscopy', label: 'Laparoscopy' },
          ])}
        </li>
        <li>
          <span className="sidebar-nav__nolink">Treatment options</span>
          {sub([
            { to: '/tmale', label: 'Treatment options for Male' },
            { to: '/tfemale', label: 'Treatment options for Female' },
          ])}
        </li>
        {item('/pcos', 'Polycystic Ovarian')}
        {item('/iui', 'Intrauterine Insemination')}
        {item('/ivfertilization', 'In Vitro Fertilization')}
        {item('/agingninfertility', 'Aging and infertility')}
        {item('/eccysts', 'Endometriosis and chocolate cysts')}
        {item('/ftreatments', 'Fertility Treatments')}
        {item('/uterinetumours', 'Uterine Tumours')}
        <li>
          <span className="sidebar-nav__nolink">Embryology</span>
          {sub([
            { to: '/lab', label: 'Lab tour' },
            { to: '/embryoc', label: 'Embryo Cryopreservation' },
          ])}
        </li>
        {item('/successrates', 'Success Rates')}
        {item('/testfeedback', 'Testimonials and Feedback')}
      </ul>
    </nav>
  );
}
