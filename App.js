import React from 'react';
import "./App.css"
import IconItemsOne from './components/iconItemOne/iconItems1';
import IconItemsTwo from './components/iconItemTwo/iconItem2';
import IconItemsThree from './components/iconItemThree/iconItem3';
function App() {
  return (
    <div className="App">
     <IconItemsOne className="iconOne"/>
     <IconItemsTwo className="iconOne"/>
     <IconItemsThree className="iconOne"/>
    </div>
  );
}

export default App;
