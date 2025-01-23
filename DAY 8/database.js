const mongoose = require('mongoose');

module.expoorts = () => {
    const connectParams = {
        useNewPareser : true,
        useUnifiedTopology : true,
    };
    try{
        mongoose.connet(process.env.MONGODB_URL , connectParams);
        console.log("Connected to MongoDB");
    }catch(error){
      console.log("Error connecting to Mongo", error);
    } 
}