import GymToolsBase from "../../templates/GymToolsBase";

const GymToolsHomePage = () => {
  return (
    <GymToolsBase path="/gym-tools">
      <div className="container mb-5">
        <h1 className="">Gym tools</h1>
        <p className="mb-4">Gym tools making gym easier for the bros</p>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              I'm cutting: <strong>Cut weight calculator</strong>
            </h5>
            <p className="card-text">
              Calculate how long it takes to reach your desired body fat %
              goals, how much you'd theoretically weight post-cut, and how long
              it would take
            </p>
            <a href="/gym-tools/weight-cut" className="btn btn-primary">
              Cut weight calculator
            </a>
          </div>
        </div>
      </div>
    </GymToolsBase>
  );
};

export default GymToolsHomePage;
