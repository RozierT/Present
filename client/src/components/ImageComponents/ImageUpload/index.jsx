import React, { useState } from 'react';
import { Cloudinary } from "@cloudinary/url-gen";
import MyButton from '../../profile/MyButton';
import PostContent from '../../PostedContent/PostContent';


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
  console.log(props.tags)
  return (
    <div className='flex-col justify-center '>
     
      <MyButton onClick={uploadImage} size={"large"} content={"upload image"} />
      <div className='flex justify-center '>
        {/* <h1>Upload</h1> */}

        {/* below is the output/preview. classes added just so pic wasn't taking up whole form. */}
        <input type="file" onChange={(e) => setImage(e.target.files[0])} className=''/>
     
      </div> 
      <div className="w-full  bg-bkg-2 p-2 mb-4 mt-4">
        {props.tags? <PostContent tags={props.tags} content={'https://cataas.com/cat'}/>: <PostContent tags={[]} content={'https://cataas.com/cat'}/> }
               
        
       
       
      </div>
    </div>
  );
};

export default ImageUpload;