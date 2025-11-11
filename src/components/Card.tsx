import React, { type ReactNode } from 'react'
import { memo } from 'react'
interface CardProps {
    key: number,
    data: {
        icon: ReactNode | string,
        title: string,
        desc: string
    }
}
const Card: React.FC<CardProps> = ({ key, data }) => {
    // console.log("Key and feature:", key, data)
    return (
        <div key={key} className='cardContainer border-2 border-grey-400 p-2.5 md:p-5 lg:p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
            <div className="cardContent">
                <div className="iconWrapper  mb-2 flex flex-col items-center justify-center gap-3">
                    {/* Placeholder for icon */}
                    <div className={`icon-placeholder `}>
                        <span className=''>{data.icon}</span>
                    </div>
                    <div className="titleWrapper"><span className='text-lg font-medium'>{data.title}</span></div>
                    <div className="descriptionWrapper">
                        <span className='text-sm md:text-lg'>{data.desc}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default memo(Card);