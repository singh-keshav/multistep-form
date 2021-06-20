import React from "react";
import "./../styles/navbar.css";

export default function Navbar(props) {
  const { currentStep, setCurrentStep } = { ...props };
  console.log(currentStep);

  const underlinePosition = `${(currentStep - 1) * 16.66}%`;

  const links = ["Personal", "Income", "Expense", "Risk", "Liability", "Asset"];

  const linkProvider = () => {
    const taps = links.map((link, index) => {
      return (
        <div
          onClick={() => setCurrentStep(index + 1)}
          className="link_container"
        >
          <div
            className="link_number"
            style={
              index + 1 === currentStep
                ? { backgroundColor: "rgb(69 166 243 / 100%)" }
                : null
            }
          >
            {index + 1}
          </div>
          <div
            className="link_name"
            style={
              index + 1 === currentStep
                ? { color: "rgb(69 166 243 / 100%)" }
                : null
            }
          >
            {link}
          </div>
        </div>
      );
    });
    return taps;
  };

  return (
    <div>
      <div className="navbar">{linkProvider()}</div>
      <div className="underline">
        <div className="active_tab" style={{ left: underlinePosition }}></div>
      </div>
    </div>
    // <ul className="nav_ul">
    //   <li className="nav_li" onClick={() => setCurrentStep(1)}>
    //     personal
    //   </li>
    //   <li className="nav_li" onClick={() => setCurrentStep(2)}>
    //     Income
    //   </li>
    //   <li className="nav_li" onClick={() => setCurrentStep(3)}>
    //     Expense
    //   </li>
    //   <li className="nav_li" onClick={() => setCurrentStep(6)}>
    //     Risk
    //   </li>
    //   <li className="nav_li" onClick={() => setCurrentStep(5)}>
    //     liability
    //   </li>
    //   <li className="nav_li" onClick={() => setCurrentStep(4)}>
    //     Asset
    //   </li>
    // </ul>
  );
}
