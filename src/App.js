import React from 'react'
import Header from './components/header'
import { ThemeContext } from './components/ThemeContext'




function App() {
  return (
    <ThemeContext.Provider value={{background:'#f1f', color:'#33e'}}>
      <div className="App">
        <Header />
      </div>

    </ThemeContext.Provider>
  );
}

export default App;
