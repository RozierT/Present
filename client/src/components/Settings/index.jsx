import React, { Component } from "react";
import Toggle from "./Toggle";

const SettingsList = [
  {
    id: 1,
    label: "Theme",
    labelLeft: "Dark",
    labelRight: "Light",
    value: "settings.theme",
    name: "theme",
    checked: "settings.theme === light",
  },
  {
    id: 2,
    label: "Notifications",
    labelLeft: "On",
    labelRight: "Off",
    value: "settings.notifications",
    name: "notifications",
    checked: "settings.notifications === Off",
  },
  {
    id: 3,
    label: "Visibility",
    labelLeft: "Public",
    labelRight: "Private",
    value: "settings.visibility",
    name: "visibility",
    checked: "settings.visibility === private",
  },
];


class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      settings: {
        theme: "light",
        notifications: true,
        visibility: "public",
      },
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      settings: {
        ...prevState.settings,
        [name]: value,
      },
    }));
  };

  render() {
    const { settings } = this.state;

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <h1 className="font-bold">Settings</h1>
        <br>
        </br>
        <form className="w-full ">
          {SettingsList.map((setting) => (
            <div className="w-full justify-between flex border-b border-content pt-2 pb-2">
             <div className="pl-4 w-1/2">
              {setting.label}</div>
              <div className="w-1/2 flex justify-center">
              <Toggle
                key={setting.id}
                label={setting.label}
                labelLeft={setting.labelLeft}
                labelRight={setting.labelRight}
                value={setting.value}
                onChange={this.handleChange}
                name={setting.name}
                checked={setting.checked}
              /></div>
             
            
            </div> 
          ))}
        </form>
      </div>
    );
  }
}

export default Settings;
