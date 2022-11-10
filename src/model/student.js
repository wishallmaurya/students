const mongoose= require("mongoose")

const studentSchema= new mongoose.Schema({

    name:{ type:String, required:true},
    subject:{ type:String, required:true},
    marks:{ type:Number, required:true},
},{timestamps:true})

module.exports=mongoose.model("student",studentSchema);
