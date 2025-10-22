import type { featureType } from "../interface/feature.type";
import { FaRegEdit } from "react-icons/fa";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { FaExpeditedssl } from "react-icons/fa";

export const featuresData:featureType[] = [
  {
    icon: <FaRegEdit size={28} />,
    title: "Edit & Annotate", 
    desc:"Highlight, comment, and make quick edits with ease.",
  },
  {
    icon:"",
    title:"Convert",
    desc:"Turn files into PDF, DOCX, XLSX, PPTX, or images instantly.",
  },
  {
    icon:<FaRegShareFromSquare size={28} />,
    title:"Share",
    desc:"Send and collaborate on documents anytime, anywhere.",
  },
  {
    icon:<FaExpeditedssl size={28} />,
    title:"Secure Upload",
    desc:"Your files are encrypted and kept fully protected.",
  }
]