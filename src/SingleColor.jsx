import React,{useState,useEffect} from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb,weight,index,hexColor}) => {
  const [alert, setalert] = useState(false);

  const bcg=rgb.join(',');
  const hex=rgbToHex(...rgb);
  const hexValue=`#${hexColor}`;
  
  useEffect(() => {
    const timeout=setTimeout(() =>{
      setalert(false);
    },3000);

    return ()=> clearTimeout(timeout);
  }, [alert])

  rgbToHex
  return (
    <article 
    className={`color ${index >10 && 'color-light'}`} 
    style={{ background:`rgb(${bcg})`}}
    onClick={() =>{setalert(true)
    navigator.clipboard.writeText(hexValue)
    }}
    >
      <p className="percentage-value">{weight}</p>
      <p className="color-value">{hexValue}</p>
      {
        alert && <p className="alert">Copiado</p>
      }
    </article>
  )
}

export default SingleColor