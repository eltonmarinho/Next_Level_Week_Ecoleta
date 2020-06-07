import React from 'react';
import './App.css';

//import Home from './pages/Home' //nao precisa explicitar o index pois ele vai sempre procurar um arquivo por esse nome.
import Routes from './routes'


function App() {
  return (
        <Routes />
  );
}

export default App;
