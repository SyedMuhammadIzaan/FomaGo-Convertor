import { NavLink } from 'react-router-dom'
import ButtonComp from './Button.tsx'

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className='iner-content'>
                <div className="logo-wrapper">

                </div>
                <div className="nav-links-wrapper">
                    <NavLink to="">Home</NavLink>
                    <NavLink to="">About</NavLink>
                    <NavLink to="">Convert</NavLink>
                    <NavLink to="">Faq</NavLink>
                </div>
                <div className="nav-btns">
                    <ButtonComp title="SignUp" />
                </div>
            </div>
        </div>
    )
}

export default Navbar