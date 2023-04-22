import "./styles.css";
import "./App.css";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { useState } from "react";

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [firstStepOption, setFirstStepOption] = useState("initial");
  const [secondStepOption, setSecondStepOption] = useState("second");

  return (
    <div className="backgroundImg">
      <div className="whiteRectangle">
        {currentPage === 1 && (
          <Step1
            setValue={setFirstStepOption}
            nextPage={() => setCurrentPage(2)}
          />
        )}
        {currentPage === 2 && (
          <Step2
            setValue={setSecondStepOption}
            nextPage={() => setCurrentPage(3)}
          />
        )}
        {currentPage === 3 && (
          <Step3
            diet={firstStepOption}
            culture={secondStepOption}
            nextPage={() => setCurrentPage(1)}
          />
        )}
      </div>
    </div>
  );
}
