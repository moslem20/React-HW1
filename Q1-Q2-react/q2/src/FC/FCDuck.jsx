import React from "react";
import { useState } from "react";
import Duck from "../classes/Duck";

function FCDuck(){
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [image, setImage] = useState('');
  const [duck, setDuck] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const submit = (e) =>{
    e.preventDefault();
    const newDuck = new Duck(name, color, parseFloat(age), parseFloat(weight), image);
    setDuck(newDuck);
  };
  const clearDetails =() =>{
    setShowDetails(false);
    setName('');
    setColor('');
    setAge('');
    setWeight('');
    setImage('');
    setDuck(null);
  }

  return (
    <div>
      <h1>Create Your Duck!!</h1>
      <form onSubmit={submit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" placeholder="Color" value={color} onChange={(e) => setColor(e.target.value)} required />
        <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} required />
        <input type="number" placeholder="Weight" value={weight} onChange={(e) => setWeight(e.target.value)} required />
        <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
        <br />
        <button type="submit" disabled={!!duck}>Create Duck</button>
      </form>

      {duck && (
        <div>
          <button onClick={() => setShowDetails(true)}>Show</button>
          <button onClick={() => duck.quack()}>Quack</button>
        </div>
      )}

      {showDetails && duck && (
        <div style={{ marginTop: '20px' }}>
          <p>{duck.show()}</p>
          {duck.image && <img src={duck.image} alt="Duck" style={{ width: '200px' }} />}
        </div>
      )}
      <button onClick={clearDetails}>clear</button>
    </div>
  );


}
export default FCDuck;