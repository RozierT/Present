import Header from "../components/Headers";
import Footer from "../components/Footer";
import Settings from "../components/Settings/Index";
import SettingsList from "../components/Settings/DefaultSettings";

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
