import type { cardType } from "../interface/feature.type";
import { IoHomeOutline } from "react-icons/io5";
import { SiSemanticscholar } from "react-icons/si";
import { FaStethoscope } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";

export const industryData:cardType[]=[
    {
        icon:<IoHomeOutline />,
        title:"Real Estate",
        desc:"Optimize property photos to attract potential buyers and renters with high-quality visuals."
    },
    {
        icon:<FaStethoscope />,
        title:"Healthcare",
        desc:"Improve medical images for better diagnostics and patient care."
    },
    {
        icon:<SiSemanticscholar />,
        title:"Education",
        desc:"Enhance educational materials with clear and engaging images for better learning experiences."
    },
    {
        icon:<FaBullhorn />,
        title:"Marketing & Advertising",
        desc:"Create compelling visuals that capture attention and drive campaign success."
    },
    {
        icon:<FaGlobeAmericas />,
        title:"Travel & Hospitality",
        desc:"Showcase destinations and accommodations with stunning images to attract travelers."
    },
    {
        icon:<FaBookOpen />,
        title:"Publishing",
        desc:"Enhance images for books, magazines, and online publications to improve reader engagement."
    },
]