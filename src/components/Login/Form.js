import React, {useState} from 'react';
import Login from './Login';
import FormS from './FormS';
import './Form.css';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  function submitForm() {
    setIsSubmitted(true)
  }
  return (
    <>
      <div className="form-container">
      <span className="close-btn">x</span>
        {!isSubmitted ? <Login submitForm=
        {submitForm} /> : <FormS />}
      </div>
    </>
  )
}

export default Form;
