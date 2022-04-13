import React from "react";
import "./styles.css";

export default class ActionEvent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      make: "Maruti",
      model: "",
      color: ""
    };
  }

  changeColor(event) {
    this.setState({
      color: event.target.value
    });
  }

  changeModel(event) {
    this.setState({
      model: event.target.value
    });
  }

  render() {
    return (
      <div class="ActionEvent">
        <h2>My {this.state.make} store</h2>

        <p>
          It is a {this.state.color}&nbsp;{this.state.model}.
        </p>

        <h2>Input model and color</h2>
        <label htmlFor="colorName">Enter color: </label>
        <input
          type="text"
          id="colorNameId"
          onChange={this.changeColor.bind(this)}
        />
        <h4>You entered: {this.state.color}</h4>

        <br />
        <label htmlFor="modelName">Enter model: </label>
        <input
          type="text"
          id="modelNameId"
          onChange={this.changeModel.bind(this)}
        />
        <h4>You entered: {this.state.model}</h4>
      </div>
    );
  }
}
