import type { FooterSection } from "../interface/foooter.type";

export const footerSections:FooterSection[]=[
    {
        title:"Quick Links",
        links:[
            {
                label: "Home", to: "/",
            },
            {
                label: "About", to: "/about",
            },
            {
                label: "FAQ", to: "/faq",
            },
        ]
    },
    {
        title:"Features",
        links:[
            {
                label:"Covert",
                to:"/convert",
            },
            {
                label:"Background",
                to:"/background-image",
            },
            {
                label:"PDF Tools",
                to:"/pdf-tool",
            }
        ]
    },
    {
        title:"Contact",
        links:[
            {
                label:"Email",
                to:"/email",
            },
            {
                label:"Phone",
                to:"/phone",
            },
            {
                label:"Location",
                to:"/location",
            }
        ]
    }
]