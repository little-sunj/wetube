import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(
    process.env.MONGO_URL,
    {
    useNewUrlParser: true,
    useFindAndModify: false
    }
);

const db = mongoose.connection;

const handleOpen = () => console.log(">>>> Connected to DB");
const handleError = () => console.log(` >>>> ERROR on DB Connection : ${error}`);

db.once("open", handleOpen);
db.on("error", handleError);

// export const videos = [
//     {
//         id:324393,
//         title: "Video awesome",
//         description: "This is something I love",
//         views: 24,
//         videoFile: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
//         creater: {
//             id: 121212,
//             name: "SUN",
//             email: "sun@sun.com"
//         }    
//     },
//     {
//         id:879547,
//         title: "Video super",
//         description: "This is something I Like",
//         views: 24,
//         videoFile: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
//         creater: {
//             id: 121212,
//             name: "SUN",
//             email: "sun@sun.com"
//         }    
//     },
//     {
//         id:123212,
//         title: "Video cool",
//         description: "This is something I enjoy",
//         views: 24,
//         videoFile: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
//         creater: {
//             id: 121212,
//             name: "SUN",
//             email: "sun@sun.com"
//         }    
//     },
//     {
//         id:123212,
//         title: "Video nice",
//         description: "This is something I enjoy",
//         views: 24,
//         videoFile: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
//         creater: {
//             id: 121212,
//             name: "SUN",
//             email: "sun@sun.com"
//         }    
//     }

// ]