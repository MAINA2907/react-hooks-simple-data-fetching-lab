// create your App component here
import { useEffect } from "react";
import {useState} from "react";

function App () {
 
    const [dog, setDog] = useState("");
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) =>setDog(data.message) )

    }, [])

    return (

      <div>
        {!dog  && <p>Loading...</p>}
        {dog && <img src={dog} alt="A Random Dog" />}
      </div>
    )
}

export default App;