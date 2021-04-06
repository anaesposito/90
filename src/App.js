import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [personajes, setPersonajes] = useState([]);
  const [value, setValue] = useState("");
  const [gender, setGender] = useState("");
  // const [search, setSearch] = useState("");
  useEffect(() => {
    fetch(
      `https://rickandmortyapi.com/api/character/?name=${value}&gender=${gender}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPersonajes(data.results);
      });
  }, [value, gender]);
  // name: filter by the given name.
  // status: filter by the given status (alive, dead or unknown).
  const handleChange = (e) => {
    setGender(e.target.value);
  };

  const handleChangeSearch = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="App">
      <input onChange={handleChangeSearch} value={value} />
      <label for="gender">Genero </label>
      <input
        onChange={handleChange}
        type="radio"
        value="male"
        name="gender"
      />{" "}
      Male
      <input
        onChange={handleChange}
        type="radio"
        value="female"
        name="gender"
      />{" "}
      Female
      <input
        onChange={handleChange}
        type="radio"
        value="unknown"
        name="gender"
      />{" "}
      Unknown
      <input
        onChange={handleChange}
        type="radio"
        value="genderless"
        name="gender"
      />{" "}
      Genderless
      {personajes.map((personaje) => (
        <div>
          <h2>{personaje.name}</h2>
          <img src={personaje.image} />
        </div>
      ))}
    </div>
  );
}

export default App;
