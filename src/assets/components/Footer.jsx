import React from 'react'
import { YoutubeOutlined, FacebookOutlined, TwitterOutlined, LinkedinOutlined } from '@ant-design/icons';


export const Footer = () => {
  return (
    <div className='ft'>
      <div className='icon'>
       <YoutubeOutlined className='ic' /><FacebookOutlined  className='ic'/><TwitterOutlined className='ic' /><LinkedinOutlined className='ic'/>
      </div>
      <div className='rights'>
        <p>© 2019 Frame. All Rights Reserved.<br></br>
Designed & Bootstrap templates by uiCookies<br></br>
Demo Images by Unsplash</p>
      </div>
    </div>
  )
}
