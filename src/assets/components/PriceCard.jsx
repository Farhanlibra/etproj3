import React from 'react';
import { Card } from 'antd';
import { Button } from 'bootstrap';
const { Meta } = Card;
const PriceCard = () => (
  <Card className='CCC'
    hoverable
    style={{
      width: 300,
      height:500,
    }}
   
  >
    
    <h1>STARTER</h1>
    <div className='cdetail'><span >22.99$</span>  <ul ><li>Pointing has no control</li> <li>A small river named Duden flows</li><li>Roasted parts of sentences fly into your mouth</li></ul>


<button className='btn btn-primary'>Get Start</button></div>
  </Card>
);
export default PriceCard;