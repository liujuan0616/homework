
import './App.css';
import { useState,useEffect} from 'react';

function App() {
const [form, setForm] = useState("")
const [isValid, setIsValid] = useState(null);
const handleChange = event => {
  setForm(event.target.value)
}


useEffect(()=>{
  const checkLuhn=()=>{
    let creditCardNumber = form.split('').map(str => str.replace(/\s/g, '')).filter(str=>str!=='')
    for(let i =creditCardNumber.length-2;i >=0;i-=2){
      creditCardNumber[i]*=2
    }
    creditCardNumber=creditCardNumber.join('')
    let luhnNumber = creditCardNumber.split('')
    let sum = 0
    for (let i = 0; i < luhnNumber.length; i++){
       let number = parseInt(luhnNumber[i],10)
       sum+=number
    }
    if (sum%10===0){
    setIsValid(true)
    }
    else
    {
    setIsValid(false)
    }}
  
   // Perform Luhn algorithm check only if the form is not empty
   if (form.trim() !== '') {
    checkLuhn();
  } else {
    setIsValid(null); // Reset isValid to null if the form is empty
  }

},[form])

  return (
    <>
    <h3>Luhn algorithm check</h3>
    <form >
      <input
      type="text"
      value={form} 
      onChange={handleChange} 
      name="name"
      placeholder="Credit card number" /> 
    </form>
    
    {isValid == null ? <p>Plese enter your credit card number</p>:
        <p>{isValid ? 'This is a valid card number' : 'This is not a valid card number'}</p>
      }

</>
  );
}

export default App;
