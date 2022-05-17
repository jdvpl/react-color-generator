import { useState } from 'react'
import Values from 'values.js';
import SingleColor from './SingleColor';

const App=()=> {
  const [color, setcolor] = useState('')
  const [error, seterror] = useState(false);
  const [listColors, setlistColors] = useState(new Values('#FF7777').all(1));

  const handleSubmit=(e)=>{
    e.preventDefault();

    try {
      let colors=new Values(color).all(1);
      setlistColors(colors);
    } catch (error) {
      seterror(true);
      console.log(error)
    }
  }
  return (
    <>
    <section className='container'>
      <h3>Color Generator</h3>

      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        name="color" 
        id="" placeholder="type a color"
        value={color} 
        onChange={(e)=>setcolor(e.target.value)}
        className={`${error ? 'error' :null}`}
        />
        <button type="submit" className="btn">Generate colors</button>
      </form>
    </section>
    <section className="colors">
      
      {
        listColors.map((color,index)=>{
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          )
        })
      }
      
    </section>
    </>
  )
}

export default App
