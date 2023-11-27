import React, { useState } from 'react';
import { Cloudinary } from "@cloudinary/url-gen";


const ImageUpload = (props) => {
  const cld = new Cloudinary({cloud: {cloudName: 'drbvwdbew', secure: true}});
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const uploadImage = () => {
    
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "present-UCD");
    data.append("cloud_name","drbvwdbew");
    fetch("https://api.cloudinary.com/v1_1/drbvwdbew/image/upload", {
      method: "post",
      body: data
    })
    .then(resp => resp.json())
    .then(data => {
      setUrl(data.url);
      // sends returned url to parent to be used in form
      props.onImageUpload(data.url)
    })
    .catch(err => console.log(err));
  };
  
  return (
    <div className='flex-col justify-center '>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} className=''/>
      <button onClick={uploadImage} className='rounded-2xl border-2 border-black bg-purple-400 px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none flex-1 '>Upload</button>
      <div>
        {/* <h1>Upload</h1> */}

        {/* below is the output/preview. classes added just so pic wasn't taking up whole form. */}
        <img src={url} id='profilePicURL' className='bkg-white
                h-40 w-40 border rounded-full flex justify-center'/>
      </div>
    </div>
  );
};

export default ImageUpload;