import { BaseCard } from "../../components/BaseCard";
import { Container } from "../../components/Container";
import GymToolsBase from "../../templates/GymToolsBase";
import polarBearSvg from "../../assets/polar_bear.svg";

export const UserPage = () => {
  return (
    <GymToolsBase path="/user">
      <Container>
        <div className="row">
          <div className="col">
            <BaseCard style={{ height: "10rem", width: "20rem" }}>
              <div
                className="d-flex justify-content-between"
                style={{ height: "100%" }}
              >
                <div className="card d-flex justify-content-center align-items-center">
                  <img src={polarBearSvg} alt="User" />
                </div>

                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                  <h5 className="card-title">User User</h5>
                </div>
              </div>
            </BaseCard>
          </div>
          <div className="col">Column</div>
          <div className="col">Column</div>
        </div>
      </Container>
    </GymToolsBase>
  );
};
