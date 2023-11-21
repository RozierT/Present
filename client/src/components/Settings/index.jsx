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
        <br></br>
        <form>
          {SettingsList.map((setting) => (
            <div>
              {setting.label}
              <Toggle
                key={setting.id}
                label={setting.label}
                labelLeft={setting.labelLeft}
                labelRight={setting.labelRight}
                value={setting.value}
                onChange={this.handleChange}
                name={setting.name}
                checked={setting.checked}
              />{"------------------------"}<br></br>
            </div>
          ))}
        </form>
      </div>
    );
  }
}

export default Settings;
