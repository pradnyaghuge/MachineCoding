FormTab.js
import { Component, useState } from "react";
import Interests from "./Interests";
import Profile from "./Profile";
import Setting from "./Setting";

export default FormTab = () => {
  const [data, setData] = useState({
    name: "pradnya",
    age: "27",
    email: "pradnya@gmail.com",
    interests: ["running", "coding"],
    theme: "dark",
  });
  const [errors, setErrors] = useState({});
  const [activeTab, setActiveTab] = useState(0);
  const Tab = [
    {
      name: "Profile",
      Component: Profile,
      Validate: () => {
        const err = {};
        if (!data.name || data.name.length < 2) {
          err.name = "Name is not valid";
        }
        if (!data.age || data.age < 18) {
          err.age = "Age is not valid";
        }
        if (!data.email || data.email.length < 2) {
          err.email = "email is not valid";
        }
        setErrors(err);
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      name: "Interests",
      Component: Interests,
      Validate: () => {
        const err = {};
        if (data.interests.length < 1) {
          err.interests = "Please select at least one interest";
        }
        setErrors(err);
        return err.interests ? false : true;
      },
    },
    {
      name: "Setting",
      Component: Setting,
      Validate: () => {
        return true;
      },
    },
  ];
  const ActiveTabComponent = Tab[activeTab].Component;
  const handleNextClick = () => {
    if (Tab[activeTab].Validate()) {
      setActiveTab((prev) => prev + 1);
    }
  };
  const handlePrevClick = () => {
    if (Tab[activeTab].Validate()) {
      setActiveTab((prev) => prev - 1);
    }
  };
  const handleSubmitClick = () => {
    //Api call
    console.log(data);
  };
  return (
    <div>
      <div className="heading-container">
        {Tab.map((t, index) => (
          <div
            key={index}
            className="heading"
            onClick={() => Tab[activeTab].Validate() && setActiveTab(index)}
          >
            {t.name}
          </div>
        ))}
      </div>
      <div className="tab-body">
        <ActiveTabComponent data={data} setData={setData} errors={errors} />
      </div>
      <div>
        {activeTab > 0 && <button onClick={handlePrevClick}>Prev</button>}
      </div>

      <div>
        {activeTab < Tab.length - 1 && (
          <button onClick={handleNextClick}>Next</button>
        )}
      </div>

      <div>
        {activeTab === Tab.length - 1 && (
          <button onClick={handleSubmitClick}>Submit</button>
        )}
      </div>
    </div>
  );
};


