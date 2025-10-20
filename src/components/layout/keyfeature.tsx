// import React from 'react'

import { featuresData } from "../../data/featuresData"
import Card from "../Card"

const KeyFeature = () => {
  return (
    <div className='keyFeatureContainer border-2 border-grey-300'>
        <div className="keyFeatureInnerContainer border-2 border-red-400 p-2.5 ">
            <div className="keyFeatureColumn border-2 border-blue-400">
                <div className="keyFeatureHeading border-2 border-green-400">
                    <h2 className="text-center text-3xl uppercase">Key Features</h2>
                </div>
                <div className="featureCards border-2 border-yellow-400 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        featuresData.map((feature, index) => (
                            <Card key={index} data={feature} />
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default KeyFeature