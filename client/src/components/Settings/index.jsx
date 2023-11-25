import React, { useState, useEffect } from "react";
import Toggle from "./Toggle";
import SettingsList from "./DefaultSettings";

export default function Settings() {
  const [settings, setSettings] = useState(() => {
    const savedSettings = localStorage.getItem("settings");
    if (savedSettings) {
      return JSON.parse(savedSettings);
    } else {
      return {
        theme: "light",
        notifications: true,
        //visibility: "public",
      };
    }
  });
  console.log(settings);

  useEffect(() => {
    localStorage.setItem("settings", JSON.stringify(settings));
  }, [settings]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSettings((prevState) => ({
      settings: {
        ...prevState.settings,
        [name]: value,
      },
    }));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
      data-theme={settings.theme}
    >
      <h1 className="font-bold">Settings</h1>
      <br></br>
      <form className="w-full ">
        {SettingsList.map((setting) => (
          <div className="w-full justify-between flex border-b border-content pt-2 pb-2">
            <div className="pl-4 w-1/2">{setting.label}</div>
            <div className="w-1/2 flex justify-center">
              <Toggle
                key={setting.id}
                label={setting.label}
                labelLeft={setting.labelLeft}
                labelRight={setting.labelRight}
                value={setting.value}
                onChange={handleChange}
                name={setting.name}
                checked={setting.checked}
              />
            </div>
          </div>
        ))}
      </form>
    </div>
  );
}
