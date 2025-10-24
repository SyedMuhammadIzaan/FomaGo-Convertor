// import React from 'react'
import Card from '../Card'
import { industryData } from '../../data/industriesWeServeData'

const IndustriesWeServe = () => {
  return (
    <div className='border-2 border-blue-300 p-3'>
        <div className=''>
            <div className="title">
                <h2 className='uppercase text-center text-xl'>Industries We Serve</h2>
            </div>
            <div className="cards">
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