import './App.css';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    axios.get('http://127.0.0.1:3001/posts').then((response) => {
      console.log(response)
    });
  }, [])
  return <div className="App"></div>;
}

export default App;
