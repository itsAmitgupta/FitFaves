import mongoose from "mongoose"


const connect = async () =>{
        try {
            await mongoose.connect(`process.env.MongoUri`)
        } catch (error) {
            console.error(error.message);
        }
}

export default connect