import { FaReact, FaServer } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

let skills = [
    {
        title: "Flutter",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 48 48">
                <polygon fill="#40c4ff" points="26,4 6,24 12,30 38,4"></polygon>
                <polygon fill="#40c4ff" points="38,22 27,33 21,27 26,22"></polygon>
                <rect width="8.485" height="8.485" x="16.757" y="28.757" fill="#03a9f4" transform="rotate(-45.001 21 33)"></rect>
                <polygon fill="#01579b" points="38,44 26,44 21,39 27,33"></polygon>
                <polygon fill="#084994" points="21,39 30,36 27,33"></polygon>
            </svg>
        ),
    },
    {
        title: "ReactJs",
        icon: <FaReact size={50} color="#61DAFB" />
    },
    {
        title: "ExpressJs",
        icon: <FaServer size={50} color="#000000" />
    },
    {
        title : "MongoDb",
        icon :<SiMongodb size={50} color="#47A248" />
    }
];

export default skills;
