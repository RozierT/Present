import Header from "../components/Headers/HeaderAdmin";
import Footer from "../components/Footer";
import Settings from "../components/Settings";

const SettingPage = () => {
  //logic to get feed of users profile
  return (
    <div className="bg-bkg-1 text-content">
      <Header />
      <Settings />
      <br></br>
      <Footer />
    </div>
  );
};

export default SettingPage;
