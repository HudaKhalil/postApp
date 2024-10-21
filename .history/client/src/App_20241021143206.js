import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      //console.log(response.data)
      setListOfPosts(response.data);
    });
  }, []);
  return (
    <div className="App">
      {listOfPosts.map((value, key) => {
        return (
          <div className="post">
            <div key = {value.id} className="title"> {value.title} </div>
            <div key = {value.id} className="body">{value.postText}</div>
            <div key = {value.id} className="footer">{value.username}</div>
          
          </div>
        );
      })}
    </div>
  );
}
export default App;
