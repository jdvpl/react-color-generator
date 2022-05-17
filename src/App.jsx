import { useState } from 'react'

const App=()=> {
  const [color, setcolor] = useState('')
  const [error, seterror] = useState(false);


  const handleSubmit=(e)=>{
    e.preventDefault();
  }
  return (

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
  )
}

export default App
