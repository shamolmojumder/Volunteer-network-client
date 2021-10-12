import axios from 'axios';
import React from "react";
import { useForm } from "react-hook-form";

const AddEvents = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  const handleImageUpload=event=>{
    console.log(event.target.files[0]);
    const imageData=new FormData();
    imageData.set('key','62aa36c1f5b1eab377e390270ea79bdc');
    imageData.append('image',event.target.files[0])
    
    axios.post('https://api.imgbb.com/1/upload',
    imageData)
    .then(function (response) {
      console.log(response.data.data.display_url);
    })
    .catch(function (error) {
      console.log(error);
    });
  
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="shamol" {...register("example")} />
      <br />
      <input type="file" onChange={handleImageUpload} />
      <br />
      <input type="submit" />
    </form>
    </div>
  );
};

export default AddEvents;