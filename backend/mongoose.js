import mongoose from 'mongoose';

const connectionString = process.env.MONGODB_URI
console.log(connectionString)

const connectMongoDb = async () => {
    await mongoose.connect(connectionString)
    console.log("okey")
}

export default connectMongoDb