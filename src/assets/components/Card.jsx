import React from 'react'
import { MobileOutlined } from '@ant-design/icons';


const Card = () => {
  return (
    <div className='cardholder'>
        <div className="card" style={{width: "18rem"}}>
      
        <MobileOutlined style={{fontSize:'80px', padding:'20px'}} />
  
  <div className="card-body">
    <h5 className="card-title">Mobile Optimize</h5>
    <p className="card-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
    <a href="#" className="btn btn-primary">Learn more</a>
  </div>
</div>
    </div>
  )
}

export default Card