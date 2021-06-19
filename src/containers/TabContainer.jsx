import { set } from "mongoose";
import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import Assets from "../components/Assets";
import Expense from "../components/Expense";
import Income from "../components/Income";
import Liablity from "../components/Liablity";
import Personal from "../components/Personal";
import PersonalForm from "../components/PersonalForm";
import PersonalList from "../components/PersonalList";
import Risk from "../components/Risk";
import "./../styles/tabcontainer.css";
import Navbar from "./Navbar";

export default function TabContainer() {
  const [currentStep, setCurrentStep] = useState(1);
  const nextStep = () => {
    currentStep >= 6 ? setCurrentStep(6) : setCurrentStep(currentStep + 1);
  };
  const prevStep = () => {
    currentStep <= 1 ? setCurrentStep(1) : setCurrentStep(currentStep - 1);
  };
  return (
    <div className="tab-container">
      <Navbar currentStep={currentStep} setCurrentStep={setCurrentStep} />
      <div className="content">
        <Personal
          currentStep={currentStep}
          nextStep={nextStep}
          prevStep={prevStep}
        />
        <Income
          currentStep={currentStep}
          nextStep={nextStep}
          prevStep={prevStep}
        />
        <Expense
          currentStep={currentStep}
          nextStep={nextStep}
          prevStep={prevStep}
        />
        <Assets
          currentStep={currentStep}
          nextStep={nextStep}
          prevStep={prevStep}
        />
        <Liablity
          currentStep={currentStep}
          nextStep={nextStep}
          prevStep={prevStep}
        />
        <Risk
          currentStep={currentStep}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      </div>
    </div>
  );
}
