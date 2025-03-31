import polarBearSvg from "../assets/polar_bear.svg";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5 mt-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/gym-tools" className="text-white">
                  gym-tools
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <br />
          </div>
          <div className="col-md-4">
            <img
              src={polarBearSvg}
              alt="polar bear"
              className="img-fluid float-end"
              width="100"
            />
          </div>
        </div>
        <div className="text-center">
          <small>&copy; 2025 BearServers.co.uk | All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
