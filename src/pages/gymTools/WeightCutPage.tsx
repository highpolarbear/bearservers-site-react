import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import GymToolsBase from "../../templates/GymToolsBase";

const WeightCutPage = () => {
  const [hasEdit, setHasEdit] = useState<boolean>(false);
  const [initWeight, setInitWeight] = useState<number | undefined>();
  const [initBodyFat, setInitBodyFat] = useState<number | undefined>();
  const [targetBodyFat, setTargetBodyFat] = useState<number | undefined>();

  const [resultWeight, setResultWeight] = useState<number | undefined>();
  const [timePer25loss, setTimePer25loss] = useState<number | undefined>();
  const [timePer50loss, setTimePer50loss] = useState<number | undefined>();

  useEffect(() => {
    handleCalc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initWeight, initBodyFat, targetBodyFat]);

  const convertWeeksToMonthsAndWeeks = (weeks: number) => {
    // const months = Math.floor(weeks / 4.345); // Calculate whole months
    // const remainingWeeks = Math.round(weeks % 4.345); // Calculate remaining weeks

    const months = Math.floor(weeks / 4); // Calculate whole months
    const remainingWeeks = Math.round(weeks % 4); // Calculate remaining weeks
    return `${months} Month(s) and ${remainingWeeks} week(s)`;
  };

  const getAppoxTimeline = (lower: number, upper: number) => {
    return `${(lower / 4).toFixed(2)} - ${(upper / 4).toFixed(2)} Month(s)`;
  };

  const handleInput = (
    e: ChangeEvent<HTMLInputElement>,
    setFunc: Dispatch<SetStateAction<undefined | number>>
  ) => {
    if (isNaN(e.target.value as any)) {
      setFunc(undefined);
      return;
    }
    setFunc(Number(e.target.value));
    setHasEdit(true);
  };

  const handleCalc = () => {
    if (!initWeight || !initBodyFat || !targetBodyFat) {
      setResultWeight(undefined);
      setTimePer25loss(undefined);
      setTimePer50loss(undefined);
      return;
    }

    if (
      initWeight > 700 ||
      targetBodyFat >= initBodyFat ||
      targetBodyFat >= 100 ||
      initBodyFat >= 100 ||
      targetBodyFat <= 0 ||
      initBodyFat <= 0
    ) {
      setTimePer25loss(undefined);
      setTimePer50loss(undefined);
      setResultWeight(undefined);
      return;
    }

    const [bfp, tbf] = [initBodyFat * 0.01, targetBodyFat * 0.01];
    const targetWeight = (initWeight * (1 - bfp)) / (1 - tbf);
    const timePer25loss = (initWeight - targetWeight) / 0.25;
    const timePer50loss = (initWeight - targetWeight) / 0.5;

    setTimePer25loss(timePer25loss);
    setTimePer50loss(timePer50loss);
    setResultWeight(targetWeight);
  };

  return (
    <GymToolsBase path="/gym-tools/weight-cut">
      <h1>Cut weight calculator</h1>

      <p className="fst-italic mb-2">
        This tool helps you calculate how much weight you need to lose going on
        a cut and the time it takes to reach there.
      </p>
      <p className="font-weight-lighter font-italic">
        Note: This utility is designed to be used as a tool for humans, going on
        a cut at the gym.
      </p>

      <div className="form-group mt-4">
        <label htmlFor="userInput">Initial Weight (kg)</label>

        <div className="input-group has-validation mt-1">
          <input
            type="text"
            className={`form-control ${
              ((hasEdit && isNaN(initWeight)) || initWeight > 700) &&
              "is-invalid"
            }`}
            id="initWeight"
            placeholder="..kg"
            onChange={(e) => handleInput(e, setInitWeight)}
          />
          <span className="input-group-text">KG</span>
          <div className="invalid-feedback">Please enter a valid weight</div>
        </div>
      </div>

      <div className="form-group pt-2">
        <label htmlFor="userInput">Initial Body Fat %</label>

        <div className="input-group has-validation mt-1">
          <input
            type="text"
            className={`form-control ${
              (hasEdit && isNaN(initBodyFat)) ||
              initBodyFat >= 100 ||
              initBodyFat <= 0
                ? "is-invalid"
                : ""
            }`}
            id="initBodyFat"
            placeholder="..%"
            onChange={(e) => handleInput(e, setInitBodyFat)}
          />
          <span className="input-group-text">%</span>
          <div className="invalid-feedback">
            Please enter a valid percentage
          </div>
        </div>
      </div>

      <div className="form-group pt-2">
        <label htmlFor="userInput">Target Body Fat %</label>
        <div className="input-group has-validation mt-1">
          <input
            type="text"
            className={`form-control ${
              (hasEdit && isNaN(targetBodyFat)) ||
              targetBodyFat >= initBodyFat ||
              targetBodyFat >= 100 ||
              targetBodyFat <= 0
                ? "is-invalid"
                : ""
            }`}
            id="targetBodyFat"
            placeholder="..%"
            onChange={(e) => handleInput(e, setTargetBodyFat)}
          />
          <span className="input-group-text">%</span>
          <div className="invalid-feedback">
            {hasEdit && isNaN(targetBodyFat)
              ? "Please enter a valid percentage"
              : hasEdit && targetBodyFat && targetBodyFat >= initBodyFat
              ? "Target body fat % cannot be larger or equal than initial body fat"
              : "Please enter a valid percentage"}
          </div>
        </div>
      </div>

      <div className="card mt-4 mb-4">
        <div className="card-body">
          <div className="d-flex flex-row mb-3 pt-4">
            <i className="bi bi-patch-minus-fill pe-3"></i>
            <div>
              <h5 className="card-title">Your target weight would be</h5>
              <strong id="results">
                {resultWeight
                  ? `~${resultWeight.toFixed(2)} KG`
                  : "Please complete the above values"}
              </strong>
            </div>
          </div>

          <div className="d-flex flex-row mb-3 pt-4">
            <i className="bi bi-calendar-date pe-3"></i>

            <div>
              <h5 className="card-title">It will take you about</h5>
              <strong id="resultsApproxTime">
                {timePer50loss && timePer25loss
                  ? getAppoxTimeline(timePer50loss, timePer25loss)
                  : "..."}
              </strong>
              <p className="pb-2">to reach your goal</p>
            </div>
          </div>

          <hr />

          <h6 className="card-title pt-2">
            On a cut with a loss of 0.25kg/week, it would take
          </h6>
          <strong id="results_twenty_five">
            {timePer25loss
              ? convertWeeksToMonthsAndWeeks(timePer25loss)
              : "..."}
          </strong>
          <p>to reach your goal</p>

          <h6 className="card-title pt-4">
            On a cut with a loss of 0.5kg/week, it would take{" "}
          </h6>
          <strong id="results_fifty">
            {" "}
            {timePer50loss
              ? convertWeeksToMonthsAndWeeks(timePer50loss)
              : "..."}{" "}
          </strong>
          <p>to reach your goal</p>
        </div>
      </div>
      <p className="small text-secondary">
        <strong>(!) Please note:</strong> this tool provides theoretical
        calculations, which may not always reflect real-world outcomes. While it
        is designed to assist, I cannot be held responsible for any results or
        consequences from its use. For the best advice tailored to your needs,
        always consult with a professional before making any changes to your
        diet or exercise routine.
      </p>
    </GymToolsBase>
  );
};

export default WeightCutPage;
