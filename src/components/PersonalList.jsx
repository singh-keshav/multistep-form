import React from "react";

import "./../styles/personalList.css";

const ImageThumb = ({ image }) => {
  const binaryData = [];
  binaryData.push(image);
  return (
    <img
      src={URL.createObjectURL(
        new Blob(binaryData, { type: "application/zip" })
      )}
      alt={image.name}
      className="avatar"
    />
  );
};

const Card = (props) => {
  const { photo, name, email, edit, deleteMember, index } = { ...props };

  return (
    <div className="memberlist__card">
      <div>
        <ImageThumb image={photo} />
      </div>
      <div className="memberlist__card__details">
        <h6>{name}</h6>
        <p>{email}</p>
      </div>
      <div className="memberlist__card_options">
        <button onClick={() => edit(index)}>Edit</button>
        <button onClick={() => deleteMember(index)}>Delete</button>
      </div>
    </div>
  );
};

export default function PersonalList(props) {
  const { edit, deleteMember, next, members, currentStep, create } = {
    ...props,
  };
  if (currentStep !== 0) return null;

  const listProvider = () => {
    const list = members.map((m, index) => {
      return (
        <Card
          edit={edit}
          deleteMember={deleteMember}
          index={index}
          name={m.name}
          email={m.email}
          photo={m.photo}
          create={create}
        />
        // <div>
        //   <div>{m.date}</div>
        //   <div>{m.email}</div>
        //   {m.photo && <ImageThumb image={m.photo} />}
        //   {m.photo && <ImageThumb image={m.sign} />}

        //   <br></br>
        // </div>
      );
    });
    list.push(
      <div className="memberlist__card create_member" onClick={create}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 32 32"
          height="32px"
          viewBox="0 0 32 32"
          width="32px"
          fill="#000000"
        >
          <g>
            <rect fill="none" height="32" width="32" />
          </g>
          <g>
            <g>
              <path d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z" />
            </g>
          </g>
        </svg>
        <p>Add Family Member</p>
      </div>
    );

    return list;
  };

  return (
    <div>
      <div className="card_list">{listProvider()}</div>
    </div>
  );
}
