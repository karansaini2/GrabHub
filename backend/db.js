const mongoose = require("mongoose");


// const mongoDb =async () => {
//  await mongoose
//     .connect("mongodb://127.0.0.1:27017/EatStreet")
//     .then(() => {
//       console.log(`Server is running`);
//     })
//     .catch((e) => {
//       console.log(e);
//     });

//     const fetched = mongoose.connection.db.collection("food");
//     fetched.find({},(err,data)=>{
//         if(err) console.log(err);
//         else console.log(data);
//     })
// };

const mongoDb = async()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/EatStreet");
        console.log('Connected to mongoose');
        const fetched_data = await mongoose.connection.db.collection("foods");
         const data = await fetched_data.find({}).toArray();
         console.log(data);
    } catch(err){
        console.log(err);
    }
}

module.exports = mongoDb;
