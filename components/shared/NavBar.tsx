import { NAV_LINKS } from "@/constants"
import Image from "next/image"


const NavBar = () => {
  return (
    <section className='nav-container'>
        <div className='nav-content'>
            <div className='nav-side-one'>
                <span className="text-3xl font-extrabold leading-none">U-Save A/C</span>
                <span 
                    className="font-bold leading-none" 
                    style={{
                        fontSize: '1.455rem',
                        lineHeight: '1rem'
                    }}>
                    <span className="text-red-500">& </span>Refrigeration
                </span>
                <span className="text-sm mt-2">Serving NJ and NY for over 30 years.</span>
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
                <div className='nav-number'>{`(973)-417-6092`}</div>
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