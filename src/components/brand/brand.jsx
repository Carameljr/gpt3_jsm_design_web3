import React from 'react'
import './brand.css'
import { google,slack,atlassian,shopify,dropbox } from './import'

function brand() {
  return (
    <div className='gpt3__brand  section__padding'>
      <div>
        <img src={google} alt="google"></img>
      </div>
      <div>
        <img src={slack} alt="slack"></img>
      </div>
      <div>
        <img src={atlassian} alt="atlassian"></img>
      </div>
      <div>
        <img src={dropbox} alt="dropbox"></img>
      </div>
      <div>
        <img src={shopify} alt="shopify"></img>
      </div>
      brand</div>
  )
}

export default brand