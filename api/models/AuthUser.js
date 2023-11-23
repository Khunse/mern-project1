import mongoose from "mongoose";


const schema = mongoose.Schema;

const userSchema = new schema({
    name : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required: true,
        minlength : 6
    },
    email : {
        type : String,
        required : true,
        unique : true
    }
});

export default mongoose.model("UserCollection",userSchema);