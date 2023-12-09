// App.js
import React, { useState } from 'react';
import AnotherComponent from './AnotherComponent'; // Import your other component

import Validate from './Validate';

export default function App() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (Validate()) {
      setSubmitted(true);
    }
  };

  return (
    <>
      <div className="border">
        {submitted ? (
          <AnotherComponent />
        ) : (
          <form onSubmit={handleSubmit}>
            <h1>REGISTER HERE!</h1>
            NAME:<input type='text' id='name' /><br />
            EMAIL:<input type='email' id='email' /><br />
            PASSWORD:<input type='password' id='pswd' /><br />
            <input type="submit" id='btn' value='submit' />
          </form>
        )}
      </div>
    </>
  );
}
