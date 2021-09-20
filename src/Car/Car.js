import React from "react"
import './Car.scss'

const car = (props) => {
  const inputClasses = ['input']

  if (props.name !== ''){
    inputClasses.push('green')
  }else{
    inputClasses.push('red')
  }

  if(props.name.length > 4){
    inputClasses.push('bold')
  }

  const style = {
    border: '1px solid #ccc',
    boxShadow: '0 4px 5px 0 #00000040'
  }

  return(
    <div className="Car" style={style}>
      <h3>Car name: {props.name}</h3>
      <p><strong>Year:</strong> {props.year}</p>
      <input 
        type="text" 
        onChange={props.onChangeName} 
        value={props.name}
        className={inputClasses.join(' ')}
      />
      <button onClick={props.onDelete}>Delete</button>
    </div>
  )
}

export default car 