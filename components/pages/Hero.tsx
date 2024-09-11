import Image from "next/image"
const Hero = () => {
  return (
    <section className='hero-container'>
      <div className='hero-bg'>
        <Image
          className='object-cover'
          src='/images/main-bg.jpg'
          alt='hero-bg'
          fill
        />
        <div className="white-overlay"></div>
      </div>

      <div className="hero-banner">
        <div className="banner-img">
          <Image
            className='object-contain'
            src='/images/vectorguy.png'
            alt='hero-image'
            fill
          />
        </div>
        <div className="banner-title">Installation, Repair & Maintenance </div>
        <div className="banner-desc">On ALL brands of heating, air conditioning, and refrigeration systems.</div>
        <button className="btn-light"><a href="/">Request Service</a></button>
      </div>
    </section>
  )
}

export default Hero