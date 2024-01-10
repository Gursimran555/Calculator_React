import React, { useState } from 'react';
import styles from './App.module.css'; 
import Display from './components/Display';
import ButtonsContainer from './components/ButtonsContainer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let [CalVal,setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    console.log(buttonText);
    if (buttonText === "C") {
      setCalVal("");
    }
    else if (buttonText === "=") {
      const result = eval(CalVal);
      setCalVal(result);

    }
    else {
      const newDisplayValue = CalVal + buttonText;
      setCalVal(newDisplayValue);     
    }

  }

  return (<>
    <center>
    <div className={styles.calculator}>
          <br></br>
          <h1 className={styles.heading}>Calculator</h1>
          <Display displayValue={CalVal}></Display> 
          <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>

    </div>
    </center>
</>    
  );
}

export default App;
