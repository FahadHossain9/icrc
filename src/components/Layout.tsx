import { NavLink, Outlet } from 'react-router-dom';
import { SidebarNav } from './SidebarNav';
import { Slideshow } from './Slideshow';

function navTopClass({ isActive }: { isActive: boolean }) {
  return isActive ? 'nav-top__link nav-top__link--active' : 'nav-top__link';
}

function navTopSubClass({ isActive }: { isActive: boolean }) {
  return isActive ? 'nav-top__sublink is-active' : 'nav-top__sublink';
}

export function Layout() {
  return (
    <div className="icrc-shell">
      <header className="icrc-header">
        <div className="icrc-header__brand">
          <img className="icrc-logo" src="/images/logo.gif" width={63} height={78} alt="ICRC" />
          <div>
            <p className="icrc-tagline">Infertility Care and Research Center</p>
            <p className="icrc-neon" aria-label="Tagline">
              Helping you to fulfill your dream ...
            </p>
          </div>
        </div>
      </header>

      <section className="icrc-hero" style={{ backgroundImage: 'url(/images/777.jpg)' }}>
        <Slideshow />
      </section>

      <nav className="icrc-topnav menu" aria-label="Primary">
        <ul>
          <li>
            <NavLink to="/" end className={navTopClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/aboutus" className={navTopClass}>
              About us
            </NavLink>
          </li>
          <li>
            <span className="menu-placeholder">Message</span>
          </li>
          <li>
            <NavLink to="/ourteam" className={navTopClass}>
              Our Team
            </NavLink>
            <ul>
              <li>
                <NavLink to="/chiefconsultant" className={navTopSubClass}>
                  Chief Consultant
                </NavLink>
              </li>
              <li>
                <NavLink to="/consultant" className={navTopSubClass}>
                  Consultant
                </NavLink>
              </li>
              <li>
                <NavLink to="/chiefmbryologist" className={navTopSubClass}>
                  Chief Embryologist
                </NavLink>
              </li>
              <li>
                <NavLink to="/embyologist" className={navTopSubClass}>
                  Embryologist
                </NavLink>
              </li>
              <li>
                <NavLink to="/mofficer" className={navTopSubClass}>
                  Medical Officer
                </NavLink>
              </li>
              <li>
                <NavLink to="/altechnician" className={navTopSubClass}>
                  ART Lab Technician
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/contactus" className={navTopClass}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/scope"
              className={({ isActive }) =>
                isActive ? 'nav-top__link nav-top__link--scope-active' : 'nav-top__link'
              }
            >
              Project scope
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="icrc-body">
        <aside className="icrc-sidebar">
          <SidebarNav />
          <div className="news-panel">
            <h2 className="news-panel__title">News &amp; Events</h2>
            <div className="news-panel__body">
              <p className="news-item">
                <span className="news-item__date">10.04.2011</span>
                <br />
                suvo nobo borso 1418...
              </p>
            </div>
          </div>
        </aside>

        <main className="icrc-main">
          <Outlet />
        </main>
      </div>

      <footer className="icrc-footer">
        <div className="icrc-footer__links">
          <NavLink to="/" end>
            Home
          </NavLink>
          {' | '}
          <NavLink to="/aboutus">About us</NavLink>
          {' | '}
          <NavLink to="/ourteam">Our Team</NavLink>
          {' | '}
          <NavLink to="/contactus">Contact us</NavLink>
          {' | '}
          <a href="http://mail.google.com/a/icrc-bd.com" target="_blank" rel="noreferrer">
            Webmail
          </a>
        </div>
        <p className="icrc-footer__copy">
          Copyright © 2010 ICRC — All rights reserved. Legacy preview powered by React + Vite.
        </p>
      </footer>
    </div>
  );
}
