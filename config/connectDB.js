const mongoose = require ('mongoose')

require('dotenv').config({path:'./config/.env'})

const connectDB = async () =>{

    try{
       
        await mongoose.connect(process.env.MONGO_URI,
            {
                useNewUrlParser: true ,
                useUnifiedTopology: true 
            })
        console.log('Database connection successful !')

    } catch (error){

        console.log('Data base connection failed !' , err)

    }

}
module.exports = connectDB ;