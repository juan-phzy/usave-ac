import { NAV_LINKS } from "@/constants"
import Image from "next/image"


const NavBar = () => {
  return (
    <section className='nav-container'>
        <div className='nav-content'>
            <div className='nav-side-one'>
                <span className="top-text">U-Save A/C</span>
                <span className="middle-text">
                    <span className="text-red-500">& </span>Refrigeration
                </span>
                <span className="bottom-text">Serving NJ and NY for over 30 years.</span>
                <div className="nav-logo">
                    <Image 
                        className="object-contain"
                        src='/images/eagle-logo.png'
                        alt='logo'
                        fill
                    />
                </div>
            </div>
            <div className='nav-side-two'>
                <div className='nav-number'>{`Call Now: (973)-417-6092`}</div>
                <div className='nav-btns-container'>
                    {NAV_LINKS.map((link, index) => (
                        <a key={link} href={'/'} className={`nav-btn ${link === "Home" ? 'active' : ''}`}>{link}</a>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default NavBar