const mongoose=require('mongoose')
const productshema=mongoose.Schema({
libele:{
    type:String,
    required:true,
    trim:true
},
picture:{
    type:String,
    required:true,
    trim:true
},
categorie:{
    type:String,
    required:true,
    trim:true
},
prix:{
    type:Number,
    required:true
}

})
module.exports=mongoose.model('Product',productshema)