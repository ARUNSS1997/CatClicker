import react, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

const url = "https://api.thecatapi.com/v1/images/search?limit=10";

function App() {
  useEffect(() => {
    console.log("heeelllo");
    getCat();
  }, []);
  const [caturl, setCaturl] = useState("");
  const getCat = () => {
    console.log("yak click madidi");
    axios
      .get("https://api.thecatapi.com/v1/images/search?limit=10")
      .then((response) => {
        console.log(response.data);
        const caturl = response.data[0].url;
        setCaturl(caturl);
      });
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((cats) => {
    //     console.log("cats: ", cats);
    //     const caturl = cats[0].url;
    //     setCaturl(caturl);
    //   })
    //   .catch((error) => {
    //     console.log("Error: ", error);
    //   });
  };

  return (
    <div className="app">
      <h1>Cat world</h1>
      <img src={caturl} alt="" />
      <button onClick={getCat}> get random cat</button>
    </div>
  );
}
export default App;
