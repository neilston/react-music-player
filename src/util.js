import {v4 as uuidv4} from "uuid";

function chillHop(){
    return [
        {
            name : "Beaver Creek",
            cover : "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-150x150.jpg",
            artist : "Aso, Middle School, Aviino",
            audio : "https://mp3.chillhop.com/serve.php/?mp3=10070",
            color : ["#205950","#2ab3bf"],
            id : uuidv4(),
            active : true,

        },
        {
            name : "Daylight",
            cover : "https://i.scdn.co/image/ab67616d0000b273797b1f1ca8576715f8708f65",
            artist : "Aiguille",
            audio : "https://mp3.chillhop.com/serve.php/?mp3=6517",
            color : ["#EF8EA9","#ab417f"],
            id : uuidv4(),
            active : false,

        },
        {
            name : "Keep Going",
            cover : "https://i.scdn.co/image/ab67616d0000b2739f0f86b54e7ca8870fac0ede",
            artist : "Swørn",
            audio : "https://mp3.chillhop.com/serve.php/?mp3=6554",
            color : ["#CD607D","#c94043"],
            id : uuidv4(),
            active : false,

        },
        {
            name : "Reflection",
            cover : "https://i.scdn.co/image/ab67616d0000b2739f0f86b54e7ca8870fac0ede",
            artist : "Swørn",
            audio : "https://mp3.chillhop.com/serve.php/?mp3=6552",
            color : ["#CD607D","#c94043"],
            id : uuidv4(),
            active : false,

        }
    ];
}

export default chillHop;