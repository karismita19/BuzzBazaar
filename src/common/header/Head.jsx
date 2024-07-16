import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> +91-6900580092</label>
            <i className='fa fa-envelope'></i>
            <label>karismita52@gmail.com</label>
          </div>
          <div className='right row RText'>
            <label>FAQ"s</label>
            <label>Need Help?</label>
            {/* <span></span>
            <label>IND</label>
            <span></span>
            <label>USD</label> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
