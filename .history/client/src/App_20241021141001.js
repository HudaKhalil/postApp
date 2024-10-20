import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:3001/posts').then((response) => {
      //console.log(response.data)
      setListOfPosts(response.data)
    });
  }, [])
  return <div className="App"> {listOfPosts.map((value, key) => {
    return <div>value.title</div>})} 
    </div>;
}

export default App;
