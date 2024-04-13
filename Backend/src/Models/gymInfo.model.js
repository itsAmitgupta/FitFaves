import mongoose,{Schema} from "mongoose";

const gymSchema = new Schema(
    {
        owner_name:{ 
         type:"string",
         required:true
        },
        phone_number:{ 
         type:"string",
         required:true
        },
        gym_name:{ 
         type:"string",
         required:true
        },
        location:{ 
         type:"string",
         required:true
        },
        address:{ 
         type:"string",
         required:true
        },
        cover_image:{ 
         type:"string",
         required:true
        },
        images:[{image:{
            type:String
        }}
        ],
        activities:[{name:{
            type:String,
            required:true
        }}],
        rating:{
            type:Number,
            required:true
        },
        timing:[{
            day:{
                type:String
            },
            from:{
                type:String
            },
            to:{
                type:String
            },
        }]
      },{timestamps:true})

export const Gym = mongoose.model("Gym",gymSchema); 