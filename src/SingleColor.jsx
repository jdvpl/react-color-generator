import React,{useState,useEffect} from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb,weight,index,hexColor}) => {
  const [alert, setalert] = useState(false);

  const bcg=rgb.join(',');
  const hex=rgbToHex(...rgb);

  console.log(hex)
  rgbToHex
  return (
    <article className={`color ${index >10 && 'color-light'}`} style={{ background:`rgb(${bcg})`}}>
      <p className="percentage-value">{weight}</p>
      <p className="color-value">{hexColor}</p>
    </article>
  )
}

export default SingleColor