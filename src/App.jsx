import Home from "../src/containers/Home";
import AddSong from "../src/containers/AddSong";
import NotFound from "../src/containers/NotFound";
import Search from "../src/containers/Search";
import Signup from "../src/containers/Signup";
import Axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("");
  const getData = async () => {
    const response = await Axios.get("http://localhost:3000/getData");
    setData(response.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return <div>{data}</div>;
}

export default App;
