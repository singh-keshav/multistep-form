import React, { useState } from "react";
import "./../styles/personalform.css";

function PersonalForm(props) {
  const { currentStep, formData, next, onChange, handleSubmit } = { ...props };
  // const [file, setFile] = useState([]);
  // console.log(file);
  if (currentStep !== 1) return null;

  // const handleFileUpload = (e) => {
  //   setFile(e.target.files[0]);
  // };

  const ImageThumb = ({ image }) => {
    const binaryData = [];
    binaryData.push(image);
    return (
      <img
        src={URL.createObjectURL(
          new Blob(binaryData, { type: "application/zip" })
        )}
        alt={image.name}
      />
    );
  };

  console.log();
  return (
    <div>
      <div className="form_fields">
        <div className="form_field item1">
          <label className="form-label">name</label>
          <input
            className="form-control"
            name="name"
            value={formData.name}
            onChange={onChange}
          />
        </div>

        <div className="form_field item2">
          <label className="form-label">Date</label>
          <input
            className="form-control"
            name="date"
            type="date"
            value={formData.date}
            onChange={onChange}
          />
        </div>

        <div className="form_field item3">
          <label className="form-label">location</label>
          <input
            className="form-control"
            name="location"
            value={formData.location}
            onChange={onChange}
          />
        </div>

        <div className="form_field item4">
          <label className="form-label">occupation</label>
          <input
            className="form-control"
            name="occupation"
            value={formData.occupation}
            onChange={onChange}
          />
        </div>

        <div className="form_field item5">
          <label className="form-label">phone</label>
          <input
            className="form-control"
            name="phone"
            value={formData.phone}
            onChange={onChange}
          />
        </div>

        <div className="form_field item6">
          <label className="form-label">email</label>
          <input
            className="form-control"
            name="email"
            value={formData.email}
            onChange={onChange}
          />
        </div>

        <div className="form_field item7">
          <label className="form-label">sex</label>
          <input
            className="form-control"
            name="sex"
            value={formData.sex}
            onChange={onChange}
          />
        </div>

        <div className="form_field item8">
          <label className="form-label">facebook</label>
          <input
            className="form-control"
            name="facebook"
            value={formData.facebook}
            onChange={onChange}
          />
        </div>

        <div className="form_field item9">
          <label className="form-label">twitter</label>
          <input
            className="form-control"
            name="twitter"
            value={formData.twitter}
            onChange={onChange}
          />
        </div>
        <div className="form_field item10">
          <label className="form-label">linkdin</label>
          <input
            className="form-control"
            name="linkdin"
            value={formData.linkdin}
            onChange={onChange}
          />
        </div>

        <div className="form_field item11" id="inputGroupFile02">
          <label className="form-label">upload photo</label>
          <input
            className=""
            type="file"
            onChange={(e) => props.handleFileUpload(e, "photo")}
          />
          {/* {formData.photo && <ImageThumb image={formData.photo} />} */}
        </div>

        <div className="form_field item12">
          <label className="form-label">upload photo</label>
          <input
            className=""
            type="file"
            onChange={(e) => props.handleFileUpload(e, "sign")}
          />
          {/* {formData.photo && <ImageThumb image={formData.sign} />} */}
        </div>
      </div>
    </div>
  );
}

export default PersonalForm;
