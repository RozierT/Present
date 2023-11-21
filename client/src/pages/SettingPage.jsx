import Header from "../components/Headers/HeaderAdmin";
import Footer from "../components/Footer";
import Settings from "../components/Settings";

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

const SettingPage = () => {
  //logic to get feed of users profile
  return (
    <div className="bg-bkg-1 text-content">
      <Header />
      <Settings settingsToUse={SettingsList} />

      <br></br>
      <Footer />
    </div>
  );
};

export default SettingPage;
