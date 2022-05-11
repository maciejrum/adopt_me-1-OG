import {Link} from "react-router-dom";

function Pet({ name, breed, animal, id, images, location }) {
  // return (
  //   <div>
  //     <h2>{name}</h2>
  //     <h3>{animal}</h3>
  //     <h3>{breed}</h3>
  //   </div>
  // );

  // return React.createElement("div", {}, [
  //   React.createElement("h2", { key: 1 }, props.name),
  //   React.createElement("h3", { key: 2 }, props.animal),
  //   React.createElement("h3", { key: 3 }, props.breed),
  // ]);

  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </Link>
  );
}

export default Pet;
