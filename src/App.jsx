import './App.css';
import React from 'react';
import Home from './pages/home';
import TitleScreen from './pages/titleScreen';



function App() {

  const [page, setPage] = React.useState("titleScreen");

  return (
    <div className="App">
      {page === "titleScreen" ? <TitleScreen setState={setPage}/> : <Home />}
    </div>
  );
}

export default App;
