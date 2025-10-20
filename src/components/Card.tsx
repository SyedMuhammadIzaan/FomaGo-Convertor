import React from 'react'

interface CardProps {
    key: number,
    data: {
        icon: string,
        title: string,
        desc: string
    }
}
const Card: React.FC<CardProps> = ({ key, data }) => {
    console.log("Key and feature:", key, data)
    return (
        <div className='cardContainer border-2 border-purple-400 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
            <div className="cardContent border-2">
                <div className="iconWrapper border-2 mb-2">
                    {/* Placeholder for icon */}
                    <div className={`icon-placeholder ${data.icon} w-12 h-12 bg-gray-200 flex items-center justify-center rounded-full`}>
                        <div className="titleWrapper"><span>{data.title}</span></div>
                        <div className="descriptionWrapper">
                            <span>{data.desc}</span>
                        </div>
                    </div>
                </div>
                )
            </div>
        </div>
    )
}
export default Card;