import { LinkDef } from "../templates/types";

interface NavBarProps {
  title: string;
  links: LinkDef[];
}

const NavBar = ({ title, links }: NavBarProps) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {title || "BearServers"}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {links &&
              links.map((link) => (
                <li className="nav-item" key={link.href}>
                  <a
                    className="nav-link active"
                    aria-current={link.isCurrent ? "page" : undefined}
                    href={link.href}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
