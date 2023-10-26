import { useState } from 'react';
import RandomColorPalette from './assets/colorNames';
import './App.css'

function App() {

  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const generateNewPalette = () => {
    const colorPalette = RandomColorPalette();
    setSelectedColors(colorPalette);
    console.log(colorPalette);
  };


  return (
    <div id="contentDiv">
      <h2>Color Palette Generator</h2>
      <p><em>randomly generate a 5-color palette of css color property keywords</em></p>

      {selectedColors.length > 0 ? (
        <>

          <div className="color-palette">
            {selectedColors.map((color, index) => (
              <div
                key={index}
                className={`color-block color-${index + 1}`}
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
          <div id="colorsList">
            {selectedColors.map((color, index) => (
              <p key={index}>~ {color}</p>

            ))}

          </div>

        </>
      ) : (
        <p>Click the button to begin.</p>
      )}
      <button onClick={generateNewPalette}> 🎨 </button>
    </div>
  );
}

export default App
