import React, { useState } from "react";
import PersonalForm from "./PersonalForm";
import PersonalList from "./PersonalList";

export default function Personal(props) {
  const formInitialData = {
    name: "",
    date: new Date(),
    email: "",
    location: "",
    occupation: "",
    phone: "",
    sex: "",
    facebook: "",
    twitter: "",
    linkdin: "",
    photo: [],
    sign: [],
  };
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState(formInitialData);

  const [members, setMembers] = useState([]);

  const [currIndex, setCurrIndex] = useState(0);

  if (props.currentStep !== 1) return null;

  console.log("inside personal");

  const toggelStep = () => {
    setCurrentStep((c) => (c + 1) % 2);
  };

  const onNext = () => {
    currentStep ? toggelStep() : props.nextStep();
  };

  const createMember = () => {
    setFormData(formInitialData);
    toggelStep();
    setCurrIndex(members.length + 1);
  };

  const editMember = (id) => {
    toggelStep();
    setFormData(members[id]);
    setCurrIndex(id);
  };

  const deleteMember = (id) => {
    const newMembers = members.filter((m, index) => index !== id);
    setMembers(newMembers);
  };

  const reset = () => {
    setFormData(formInitialData);
  };

  const onChange = (e) => {
    // e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currIndex < members.length) {
      const temp = [...members];
      temp[currIndex] = formData;
      setMembers(temp);
    } else {
      setMembers([...members, formData]);
    }
    console.log(members);

    reset();

    onNext();
  };

  const handleFileUpload = (e, destination) => {
    const data = { ...formData };
    data[destination] = e.target.files[0];
    setFormData(data);
  };

  return (
    <div>
      <PersonalForm
        currentStep={currentStep}
        formData={formData}
        onChange={onChange}
        handleSubmit={handleSubmit}
        handleFileUpload={handleFileUpload}
      />
      <PersonalList
        edit={editMember}
        deleteMember={deleteMember}
        members={members}
        currentStep={currentStep}
        create={createMember}
      />
      <div className="form_buttons">
        {currentStep ? <button onClick={handleSubmit}> SUBMIT</button> : null}
        <button onClick={onNext}>NEXT</button>
      </div>
    </div>
  );
}
