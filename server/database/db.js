import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const DBConnection = async () => {
    const USERNAME = process.env.DB_USERNAME;
    const PASSWORD = process.env.DB_PASSWORD;

    const MONGO_URI = `mongodb://ishtiyak:Kota%402020
@ac-tlzfcbf-shard-00-00.2psit1p.mongodb.net:27017,ac-tlzfcbf-shard-00-01.2psit1p.mongodb.net:27017,ac-tlzfcbf-shard-00-02.2psit1p.mongodb.net:27017/?ssl=true&replicaSet=atlas-xxe2db-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`;
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;