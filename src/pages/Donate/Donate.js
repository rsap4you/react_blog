import React from 'react';
import donate_pic from '../../utils/images/balloons-charity-colorful-colourful.jpg'
import upi_qrcode from '../../utils/images/upi_amarjeet_qrcode.png'
import './Donate.css'
const Donate = () => {
  return (
    <div className="term-page-fluid">
  <div className='image_div1'>
      <div className='center-containerr'>
      
      </div>
    </div>
  

  <div className='terms' style={{ display: 'flex', marginLeft: '11%' }}>
  <div className='text-black p-4'>
    <img src={upi_qrcode} alt='donate' style={{ width: '100%', height: '50vh' }}></img>
  </div>
  <div style={{ marginLeft: '1%', marginTop:"10%" , width:"30%"}}>
  <p>
  In a world where challenges loom large, RSAP4YOU emerges as a beacon of hope, a testament to the power your rupee wields. Picture it as a force of transformation, not just lifting the underprivileged but also paving the path for a future illuminated with equity and promise. RSAP4YOU transcends mere organizational boundaries; it is a catalyst for change, firmly rooted in the belief that each act of kindness, every donation, possesses the extraordinary potential to redefine lives.
</p>
  </div>
</div>

  </div>
  )
}

export default Donate