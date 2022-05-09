import { useParams } from "react-router-dom";
import { Component } from "react";

class Details extends Component {
  state = {
    loading: true,
  };

  async componentDidMount() {
    const response = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    );

    const data = await response.json();

    // this.setState({ loading: false, ...data.pets[0] });
    this.setState(Object.assign({ loading: false }, data.pets[0]));
  }

  render() {
    if (this.state.loading) {
      return <h2>Loading</h2>;
    }
    const { name, animal, breed, city, description, state } = this.state;

    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {city}, {state}
          </h2>
          <button>Adopt Me!</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

function WrappedDetails() {
  const params = useParams();

  return <Details params={params} />;
}

export default WrappedDetails;
