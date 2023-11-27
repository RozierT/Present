// i need a little baby component that is a box with rounded corners that sits in the very center of the page and has a semitransparent grey background behind it covering the whole page
// it willl need to take in props for content

const FormContainer = ({ children }) => {
    return (
      <>
        <div className="fixed top-0 inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 p-8">
          <div className=" bg-bkg-1 w-80 p-8 rounded-lg text-content shadow-lg overflow-y-auto max-h-full">
            {children}
          </div>
        </div>
      </>
    );
  };
  
  export default FormContainer;
  