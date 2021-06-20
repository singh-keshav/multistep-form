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
          <label className="form-label">Name</label>
          <input
            className="form-control"
            name="name"
            value={formData.name}
            onChange={onChange}
            placeholder="Name"
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
            placeholder="DD/MM/YY"
          />
        </div>

        <div className="form_field item3">
          <label className="form-label">Location</label>
          <input
            className="form-control"
            name="location"
            value={formData.location}
            onChange={onChange}
            placeholder="Location"
          />
        </div>

        <div className="form_field item4">
          <label className="form-label">Occupation</label>
          <input
            className="form-control"
            name="occupation"
            value={formData.occupation}
            onChange={onChange}
            placeholder="Occupation"
          />
        </div>

        <div className="form_field item5">
          <label className="form-label">Phone Number</label>
          <input
            className="form-control"
            name="phone"
            value={formData.phone}
            onChange={onChange}
            placeholder="Phone number"
          />
        </div>

        <div className="form_field item6">
          <label className="form-label">Email</label>
          <input
            className="form-control"
            name="email"
            value={formData.email}
            onChange={onChange}
            placeholder="Email"
          />
        </div>

        <div className="form_field item7">
          <label className="form-label">Sex</label>
          <input
            className="form-control"
            name="sex"
            value={formData.sex}
            onChange={onChange}
            placeholder="Sex"
          />
        </div>

        <div className="form_field item8">
          <label className="form-label">Facebook Profile</label>
          <input
            className="form-control"
            name="facebook"
            value={formData.facebook}
            onChange={onChange}
            placeholder="Facebook Profile"
          />
        </div>

        <div className="form_field item9">
          <label className="form-label">Twitter</label>
          <input
            className="form-control"
            name="twitter"
            value={formData.twitter}
            onChange={onChange}
            placeholder="Twitter profile"
          />
        </div>
        <div className="form_field item10">
          <label className="form-label">Linkdin</label>
          <input
            className="form-control"
            name="linkdin"
            value={formData.linkdin}
            onChange={onChange}
            placeholder="Linkdin profile  "
          />
        </div>

        <div className="form_field item11" id="inputGroupFile02">
          <label className="form-label">Upload Photo</label>
          <input
            className=""
            type="file"
            onChange={(e) => props.handleFileUpload(e, "photo")}
          />
          {/* {formData.photo && <ImageThumb image={formData.photo} />} */}
        </div>

        <div className="form_field item12">
          <label className="form-label">Upload Signature</label>
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
