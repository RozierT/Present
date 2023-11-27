import React, { useState } from 'react';
import { Cloudinary } from "@cloudinary/url-gen";


const ImageUpload = () => {
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
    })
    .catch(err => console.log(err));
  };
  
  return (
    <div>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button onClick={uploadImage}>Upload</button>
      <div>
        <h1>Upload</h1>
        <img src={url} />
      </div>
    </div>
  );
};

export default ImageUpload;