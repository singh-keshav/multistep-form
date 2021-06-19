import React from "react";
import "./../styles/navbar.css";

export default function Navbar(props) {
  const { currentStep, setCurrentStep } = { ...props };
  console.log(currentStep);

  const links = ["Personal", "Income", "Expense", "Risk", "Liability", "Asset"];

  const linkProvider = () => {};

  return (
    <ul className="nav_ul">
      <li className="nav_li" onClick={() => setCurrentStep(1)}>
        personal
      </li>
      <li className="nav_li" onClick={() => setCurrentStep(2)}>
        Income
      </li>
      <li className="nav_li" onClick={() => setCurrentStep(3)}>
        Expense
      </li>
      <li className="nav_li" onClick={() => setCurrentStep(6)}>
        Risk
      </li>
      <li className="nav_li" onClick={() => setCurrentStep(5)}>
        liability
      </li>
      <li className="nav_li" onClick={() => setCurrentStep(4)}>
        Asset
      </li>
    </ul>
  );
}
