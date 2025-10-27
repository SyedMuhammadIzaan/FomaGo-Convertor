// import React from 'react'
import Card from '../Card'
import { industryData } from '../../data/industriesWeServeData.tsx'

const IndustriesWeServe = () => {
  return (
    <div className='p-3 mt-4.5 mb-4.5'>
        <div className=''>
            <div className="title">
                <h2 className='uppercase text-center text-3xl'>Industries We Serve</h2>
            </div>
            <div className="cards grid grid-cols-2 gap-4 mt-6 md:grid-cols-2 lg:grid-cols-3">
                {
                    industryData.map((data, index)=>(
                        <Card key={index} data={data} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default IndustriesWeServe