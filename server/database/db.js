import mongoose from "mongoose";





const DBconnection = async () => {
    const DB_URL = `mongodb+srv://amitmishra:amit123@file-sharing.ngi5jbz.mongodb.net/?retryWrites=true&w=majority`;
    try{
       await mongoose.connect(DB_URL, {useNewUrlParser: true});
        console.log('databse connected successfully');
    } catch (error) {
        console.error('error while connecting with the databse', error.message);
    }
}



export default DBconnection;