import React, { useState } from "react";
import { people } from "./data";

const BirthdayCard = () => {
  const [celebrants, setCelebrants] = useState(people);
  const [buttonText, setButtonText] = useState("Clear All");
  const clearCelebrants = () => {
    setCelebrants([]);
    setButtonText("Cleared");
  };
  return (
    <>
      {" "}
      <h3 style={{ textAlign: "center" }}>
        {celebrants.length} Birthdays Today
      </h3>
      {celebrants.map((celebrant) => {
        const { id, name, age, image } = celebrant;
        console.log(celebrant);
        return (
          <>
            <ul>
              <li key={id}>
                <div className="celebrantCard">
                  <img src={image} alt="celebrant-photo" className="img" />
                  <div>
                    <h4>{name}</h4>
                    <span>{age} years</span>
                  </div>
                </div>
              </li>
            </ul>
          </>
        );
      })}
      <button className="btn btn-block" onClick={clearCelebrants}>
        {buttonText}
      </button>
    </>
  );
};

export default BirthdayCard;
