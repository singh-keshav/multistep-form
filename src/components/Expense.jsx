import React from "react";

export default function Expense(props) {
  if (props.currentStep !== 3) return null;
  return <div>Expense</div>;
}
