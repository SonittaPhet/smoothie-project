const { Smoothie } = require("../../Models/Smoothie");
const router = require("express").Router();
const mongoose = require("mongoose");
const Formidable = require("formidable");
const cloudinary = require("cloudinary").v2;
require("dotenv").config() 

//FIX THIS
//Initialize MongoDB connection and Cloudinary
const mongoURI = process.env.MONGO_URI;

//connect mongodb
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true },
    (error)=>{
      if (error) {
        return console.log(error);
      }
      return console.log("Connection to MongoDB was Successful");
    }
  );

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

//ROUTE FOR USER TO ADD THEIR SMOOTHIE

router.post("/api/smoothieListing", (request, response) => {
    const form = new Formidable.IncomingForm();
    form.parse(request, (error, fields, files) => {
        const {
            name,
            type,
            ingredients,
          } = fields;

        const { smoothieImage } = files;

        cloudinary.uploader.upload(
            smoothieImage.path, 
            {folder:"/smoothies/adding-smoothie"}, 
            async(error, results) => {
                if (error){
                    return console.log(error);                                
                }
                const image_url = results.url;

                const newSmoothie = new Smoothie({
                    smoothie_information:{
                        name:name,
                        type:type,
                        ingredients:ingredients,
                        smoothieImage: image_url,
                    },
                });

                const savedSmoothie = await newSmoothie.save();
                return response.status(200).json(savedSmoothie);

            })
    });
});

module.exports = router;