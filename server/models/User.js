const mongoose = require('mongoose');
const jwt = require(jsonwebtoken);

const userSchema = new mongoose.Schema({
    firstName:{
        type: String, 
        required : true ,
    },
    lastName:{
        type: String, 
        required : true ,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        select: false,
    }
});

userSchema.methods.generateAuthToken =function() {
  const token = jwt.sign({_id : this._id}.process.env.JWT);
}
