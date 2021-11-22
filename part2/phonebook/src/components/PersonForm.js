import React from "react";

const PersonForms = ({ submitHandler, newName, nameHandler, newNumber, numberHandler}) =>{
    return (
      <form onSubmit={submitHandler}>
        <div>
          Name: 
          <input value={newName} onChange={nameHandler} />
        </div>
        <div>
          Number: 
          <input value={newNumber} onChange={numberHandler} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    );
}


export default PersonForms;
