import Image from "next/image"
const Hero = () => {
  return (
    <section className='hero-container'>
      <div className='hero-bg'>
        <Image
          className='object-cover'
          src='/images/main-bg.jpg'
          alt='hero-image'
          fill
        />
        <div className="white-overlay"></div>
      </div>
    </section>
  )
}

export default Hero