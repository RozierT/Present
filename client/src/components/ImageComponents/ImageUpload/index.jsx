import React, { useState } from 'react';
import { Cloudinary } from "@cloudinary/url-gen";
import MyButton from '../../profile/MyButton';
import PostContent from '../../PostedContent/PostContent';
import { useEffect } from 'react';

const ImageUpload = (props) => {
  const cld = new Cloudinary({cloud: {cloudName: 'drbvwdbew', secure: true}});
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");


useEffect(() => {
  console.log(image)
}, [image])



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
      setUrl(data.url)
      console.log(url)
    })
    .catch(err => console.log(err));
  };
  console.log(props.tags)
  return (
    <div className='flex-col justify-center '>
     
      
      <div className='flex justify-center '>
       
        <input type="file" onChange={(e) => setImage(e.target.files[0])} className=''/>
     
      </div> 
      
      <div className='flex justify-center'>
      <MyButton onClick={uploadImage} size={"large"} content={"upload image"} />
      </div>
      <div className="w-full  bg-bkg-2 p-2 mb-4 mt-4">
      {image === "" ? <p>no image uploaded</p> :
  (props.tags ? <PostContent tags={props.tags} content={image}/> : <PostContent tags={[]} content={image}/>)
}
      </div>
    </div>
  );
};

export default ImageUpload;