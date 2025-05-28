import { BaseCard } from "../../components/BaseCard";
import { Container } from "../../components/Container";
import GymToolsBase from "../../templates/GymToolsBase";
import polarBearSvg from "../../assets/polar_bear.svg";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";
import { useEffect, useRef } from "react";

// Register required Chart.js components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

const datapoints_1 = [5, 45, 12, 62, 75, 36, 34];
const datapoints_2 = [1, 4, 2, 5, 1, 4, 6, 3];

const data1 = {
  labels,
  datasets: [
    {
      data: datapoints_1,
    },
  ],
};

const data2 = {
  labels,
  datasets: [
    {
      data: datapoints_2,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
    },
  },
};

export const UserPage = () => {
  const chartRef = useRef<ChartJS | null>(null);

  useEffect(() => {
    // Cleanup function to destroy the chart instance
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, []);

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

          <div className="col">
            <Line
              options={options}
              data={data1}
              ref={(chart) => {
                if (chart) chartRef.current = chart;
              }}
            />
          </div>

          <div className="col">
            {" "}
            <Line
              options={options}
              data={data2}
              ref={(chart) => {
                if (chart) chartRef.current = chart;
              }}
            />
          </div>
        </div>
      </Container>
    </GymToolsBase>
  );
};
