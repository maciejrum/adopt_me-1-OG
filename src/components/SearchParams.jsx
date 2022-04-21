import { useEffect, useState } from "react";
import Pet from "./Pet";

const animals = ["bird", "cat", "dog", "rabbit", "reptile"];

function SearchParams() {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const breeds = [""];

  useEffect(() => {
    requestPets().catch(() => {});
  }, []);

  async function requestPets() {
    const response = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );

    const data = await response.json();
    setPets(data.pets);
  }

  return (
    <div className={"search-params"}>
      <form>
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id={"location"}
          value={location}
          placeholder={"Location"}
          onChange={(event) => {
            setLocation(event.target.value);
          }}
        />

        <label htmlFor="animal">Animal</label>
        <select
          id="animal"
          value={animal}
          onChange={(event) => {
            setAnimal(event.target.value);
          }}
          onBlur={(event) => {
            setAnimal(event.target.value);
          }}
        >
          <option />
          {animals.map((animal) => (
            <option value={animal} key={animal}>
              {animal}
            </option>
          ))}
        </select>

        <label htmlFor="breed">Breed</label>
        <select
          id="breed"
          disabled={!breeds.length}
          value={breed}
          onChange={(event) => {
            setBreed(event.target.value);
          }}
          onBlur={(event) => {
            setBreed(event.target.value);
          }}
        >
          <option />
          {breeds.map((breed) => (
            <option value={breed} key={breed}>
              {breed}
            </option>
          ))}
        </select>

        <button type={"submit"}>Submit</button>
      </form>

      {pets.map(({ name, breed, animal, id }) => (
        <Pet key={id} name={name} breed={breed} animal={animal} />
      ))}
    </div>
  );
}

export default SearchParams;