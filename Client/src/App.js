import './App.css';
import axios from 'axios';

import { ThemeContext, themes } from './contexts/ThemeContext';
import React, { useState } from 'react';
import ToggleDark from './components/toggleDark';
import SearchBar from "./components/SearchBar.jsx";
import Select from 'react-select'

const options = [
  { value: 'Sauveteur', label: 'Sauveteur' },
  { value: 'Evenement de Sauvetage', label: 'Evenement de Sauvetage' },
  { value: 'Bateau', label: 'Bateau' }
]


function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [choice, setChoice] = useState("Sauveteur");
  const handleSubmit = (e) => {
    console.log("lol")
    e.preventDefault()
    if(choice=="Sauveteur"){
      axios.post('https://nuitinfoapiflask.younessrihr.repl.co/sauvetage', {"lol":"lol"})
      .then((result) => {
        console.clog("lol")
      });
    }else if(choice=="Evenement de Sauvetage"){

    }else if(choice="Bateau"){

    }

}
  const handleChange =(v)=>{
    setChoice(v['value'])
    console.log(v['value'])
    
    
  }
  
  return (
    <div className="App">
 <div id="ytWidget"></div>
            <script src="https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=fr&widgetTheme=dark&autoMode=false" type="text/javascript"></script>
      <header className="App-header">
        <h1 className="text-warning">L’HISTOIRE DES SAUVETAGES EN MER
</h1>
      </header>
      <ThemeContext.Consumer>
        {({ changeTheme }) => (
          <ToggleDark
            toggleDark={() => {
              setDarkMode(!darkMode);
              changeTheme(darkMode ? themes.light : themes.dark);
            }}
          />
        )}
      </ThemeContext.Consumer>


      <div className="search">
            <form className="search">
              
                    <input  className = "searchInputs" type="text" name="Search" />
                  
                
            </form>
           
            <input  type="submit" value="Envoyer" onClick={handleSubmit} />
        </div>
      
      <Select  className = "selectoption" options={options} onChange={handleChange} />
     
    </div>
  );
}

export default App;
