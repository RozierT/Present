import Header from "../components/Headers";
import Footer from "../components/Footer";
import ImageUpload from "../components/ImageComponents/ImageUpload";



const NewImagePage = () => {
  //logic to get feed of users profile
  return (
    <div className="bg-bkg-1 text-content">
      <Header />
      <div className="">
      <ImageUpload  />
      </div>
      
      <Footer />
    </div>
  );
};

export default NewImagePage;