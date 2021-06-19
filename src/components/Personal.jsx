import React, { useState } from "react";
import { Route } from "react-router";
import PersonalForm from "./PersonalForm";
import PersonalList from "./PersonalList";

// const Member = (memberData) => {
//   const index = memberData.id;
//   const name = memberData.name;
//   const email = memberData.email;
// };

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

  const listNext = () => {
    //send data to redux store
    props.nextStep();
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
      // setMembers([...members, (members[currIndex] = formData)]);
      const temp = [...members];
      temp[currIndex] = formData;
      setMembers(temp);
      console.log("if");
    } else {
      setMembers([...members, formData]);
      console.log("else block");
    }
    console.log(members);
    reset();
  };

  const handleFileUpload = (e, destination) => {
    const data = { ...formData };
    // data.photo = e.target.files[0];
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
        next={toggelStep}
        handleFileUpload={handleFileUpload}
      />
      <PersonalList
        edit={editMember}
        deleteMember={deleteMember}
        next={listNext}
        members={members}
        currentStep={currentStep}
        create={createMember}
      />
      <div className="form_buttons">
        {currentStep ? <button onClick={handleSubmit}>submit</button> : null}
        <button onClick={onNext}>next</button>
      </div>
    </div>
  );
}
