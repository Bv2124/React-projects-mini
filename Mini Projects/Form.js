import React,{useState} from "react";

export default function Hook() {
  const [num,setNum]=useState({
    id:'',
    name:'',
    class:'',
    price:'',
    gender:'',
    isChecked:false,
  })
  const Prime = e => {setNum({...num,[e.target.name]:e.target.value})}
return (
    <div>
      Id:-
      <input type="number" name='id'value={num.id} onChange={Prime}></input><br></br>
      Name:-
      <input type="text" name='name' value={num.name} onChange={Prime}></input><br></br>
      Class:-
      <input type="text" name='class' value={num.class} onChange={Prime}></input><br></br>
      <span className='Gender'>
            <label>Gender:-</label>
          <select
            className="form-control"
            name='gender'
            value={num.gender}
            onChange={Prime}>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
            <option value='others'>Others</option>
            <option value='Prefer Not to say !'>Prefer Not to say !</option>
          </select>
            </span>
            isChecked ? 
            <input
          type="checkbox"
          name="isChecked"
          checked={num.isChecked}
          onChange={Prime}
        />
        <br></br>
        <input
          type="range"
          name="price"
          min="0"
          max="50"
          value={num.price}
          onChange={Prime}
        />
      <p>{num.id}</p>
      <p>{num.name}</p>
      <p>{num.class}</p>
      <p>{num.gender}</p>
      <p>{num.price}</p>
      <h5>Is it checked? : {num.isChecked ? "Yes" : "No"}</h5>
    </div>
  );
}
