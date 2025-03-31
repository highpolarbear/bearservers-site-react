import polarBearSvg from "../../assets/polar_bear.svg";

const HomePage = () => {
  return (
    <body
      className="bg-dark text-light container-fluid d-flex justify-content-center align-items-center"
      style={{ height: "100vh", margin: 0 }}
    >
      <div className="text-center">
        <div className="">
          <img src={polarBearSvg} />
          <div className="title">
            <h1>BearServers</h1>
            <p>The North Pole</p>
          </div>
        </div>
      </div>

      <footer className="text-center">
        <p>&copy; 2025 BearServers.co.uk | All Rights Reserved</p>
      </footer>
    </body>
  );
};

export default HomePage;
