// import React from 'react'
import { footerSections } from '../data/footer.links'
import { Link } from 'react-router-dom'


const Footer = () => {


  return (
    <div className="footer-container border-2 flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row flex-1 justify-around w-full p-2.5">
      <div className="logo-wrapper w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
        FormaGo
      </div>
      <div className="footer-navbar w-full md:w-1/2 lg:w-1/2">
        <div className="footer-nav-wrapper">
          <div className='flex flex-1 justify-around'>
            {
              footerSections.map((footernavlinks, index) => {
                return (
                  <div className="flex flex-col" key={index}>
                    <div className="footer-nav-heading flex flex-row">
                      <h4 className='font-medium text-lg'>{footernavlinks.title}</h4>
                    </div>
                    {
                      footernavlinks?.links.map((link, index) => {
                        return (<div key={index} className="navlinks-wrapper text-sm leading-7">
                          <Link to={link.to}>{link.label}</Link>
                        </div>)

                      })
                    }
                  </div>
                )
              })
            }
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer