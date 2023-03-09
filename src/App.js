import React, { useRef, useState } from 'react';
import { strings } from '../../sprint6v2/src/escena/historia';
import { EstilButons, Estil, DivButon, EstilBenvinguda } from '../../sprint6v2/src/escena/estil';

function App() {
  const [showContent, setShowContent] = useState(false);
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const stringRefs = useRef(strings.map(() => null));

  const benvinguda = () => {
    setShowContent(true);
  };

  const marcarCurrentString = () => {
    stringRefs.current.forEach((ref, index) => {
      if (ref) {
        if (index === currentStringIndex) {
          ref.parentNode.style.backgroundColor = 'lightcoral'
        } else {
          ref.parentNode.style.backgroundColor = 'white';
        }
      }
    });
  };

  const onNextButtonClick = () => {
    if (currentStringIndex < strings.length) {
      setCurrentStringIndex(currentStringIndex + 1);
      marcarCurrentString();
    }
  };

  const onPrevButtonClick = () => {
    if (currentStringIndex >= 0) {
      setCurrentStringIndex(currentStringIndex - 1);
      marcarCurrentString();
    }
  };

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
            <Estil key={index}>
              <div ref={(ref) => (stringRefs.current[index] = ref)}>
                {str.text} 
              </div>
            </Estil>
          ))}
        </>
      )}
    </>
  );
}

export default App;
