import React, { useState } from 'react';
import { strings } from './escena/historia';
import { EstilButons, Estil, DivButon, EstilBenvinguda, Imatge } from './escena/estil';

function App() {
  const [showContent, setShowContent] = useState(false);
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  
  const benvinguda = () => {
    setShowContent(true);
  };

  const onNextButtonClick = () => {
    if (currentStringIndex < strings.length - 1) {
      setCurrentStringIndex(currentStringIndex + 1);
    }
  };
  
  const onPrevButtonClick = () => {
    if (currentStringIndex > 0) {
      setCurrentStringIndex(currentStringIndex - 1);
    }
  };

  const currentString = strings[currentStringIndex];


  return (
    <>
     
        {!showContent && (
          <EstilBenvinguda onClick={benvinguda}>
            Benvingut. Prem el botó per entrar
          </EstilBenvinguda>
        )}

        {showContent && (
          <>
            <DivButon>
              <EstilButons onClick={onPrevButtonClick}>Anterior</EstilButons>
              <EstilButons onClick={onNextButtonClick}>Següent</EstilButons>
            </DivButon>
            {strings.map((str, index) => (
              <Estil key={index} style={{backgroundColor: currentStringIndex === index ? 'lightcoral' : 'white'}}>
                {str.text}
              </Estil>
            ))}
             <Imatge> <img src={currentString.img} /></Imatge>
          </>
        )}
      

    </>
  );
}

export default App;