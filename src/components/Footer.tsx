import polarBearSvg from "../assets/polar_bear.svg";

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5">
          <div className="col mb-3">
            <a
              href="/"
              className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
            >
              <img
                src={polarBearSvg}
                alt="polar bear"
                className="img-fluid"
                width="100"
              />
            </a>
            <p className="text-body-secondary">© bearservers.co.uk 2025</p>
          </div>

          <div className="col mb-3"></div>

          <div className="col mb-3"></div>

          <div className="col mb-3"></div>

          <div className="col mb-3">
            <h5>Links</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-body-secondary">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/gym-tools"
                  className="nav-link p-0 text-body-secondary"
                >
                  gym-tools
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
