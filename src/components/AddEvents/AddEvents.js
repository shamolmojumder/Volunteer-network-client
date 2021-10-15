import axios from 'axios';
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddEvents = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [imageURL,setIMageURL]=useState(null);

  const onSubmit = data =>{
    const eventData={
      name:data.name,
      imageURL:imageURL
    }
    const url=`http://localhost:5055/addEvent`;
    console.log(eventData);
    fetch(url,{
      method:'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body:JSON.stringify(eventData)
    })
    .then(res=>console.log("server side response",res))
  }
  
  const handleImageUpload=event=>{
    console.log(event.target.files[0]);
    const imageData=new FormData();
    imageData.set('key','62aa36c1f5b1eab377e390270ea79bdc');
    imageData.append('image',event.target.files[0])
    
    axios.post('https://api.imgbb.com/1/upload',
    imageData)
    .then(function (response) {
      setIMageURL(response.data.data.display_url);
    })
    .catch(function (error) {
      console.log(error);
    });
  
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input name="name" defaultValue="New Exciting Event" ref={register} />
      <br />
      <input type="file" onChange={handleImageUpload} />
      <br />
      <input type="submit" />
    </form>
    </div>
  );
};

export default AddEvents;