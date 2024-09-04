
const Footer = () => {
  const date = new Date()
  const formattedDate = date.getFullYear()

  return (
    <section className='footer-container'>
      <div className='footer-box'>{`© ${formattedDate} U-Save Air Condition & Refrigeration LLC`}</div>

      <div className='footer-box'>
        <div>Email: usavehvacr@gmail.com</div>
        <div>Phone: (973)-123-1234</div>
      </div>
    </section>
  )
}

export default Footer