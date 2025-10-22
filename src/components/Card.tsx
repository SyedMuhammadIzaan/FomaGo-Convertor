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
        <div className='cardContainer border-2 border-grey-400 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
            <div className="cardContent">
                <div className="iconWrapper mb-2 flex flex-col items-center">
                    {/* Placeholder for icon */}
                    <div className={`icon-placeholder ${data.icon} w-12 h-12 rounded-full`}>
                    </div>
                    <div className="titleWrapper"><span className='text-lg'>{data.title}</span></div>
                    <div className="descriptionWrapper">
                        <span className='text-base'>{data.desc}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card;