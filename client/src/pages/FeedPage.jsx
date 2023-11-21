import Header from "../components/Headers/HeaderFeed";
import Footer from "../components/Footer";

const FeedPage = () => {
  //logic to get feed of users profile
  return (
    <div className="bg-bkg-1 text-content">
      <Header visible={true} />
      <br></br>
      <Feed />
      <br></br>
      <Footer />
    </div>
  );
};

export default FeedPage;
