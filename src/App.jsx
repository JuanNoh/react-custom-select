import React, {useState, useEffect} from "react";
import axios from "axios";
import MySelect from "./Components/Select";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
      fetchData();
  }, []);

  const fetchData = async () => {
      const response = await axios.get(
          "https://5dc03c2f95f4b90014ddc462.mockapi.io/api/v1/hoteles"
      );
      setData(response.data);
  };
  return (
    <div className="App">
      <MySelect
        label={"mySelect"}
        name={"mySelect"}
        options={data}
        callback={(e) => {
          console.log(e);
        }}
      />
    </div>
  );
}

export default App;
