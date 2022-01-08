import React from "react";

const opStyle = { background: "#BBDFDD ", color: "#900C3F" };
const equalStyle = { color: "white", width: "380px" };
class Buttons extends React.Component {
  render() {
    return (
      <div className="buttons">
        <button id="seven" onClick={this.props.number} value={7}>
          7
        </button>

        <button id="eight" onClick={this.props.number} value={8}>
          8
        </button>
        <button id="nine" onClick={this.props.number} value={9}>
          9
        </button>
        <button
          style={opStyle}
          id="divide"
          onClick={this.props.operator}
          value="/"
        >
          /
        </button>

        <button id="four" onClick={this.props.number} value={4}>
          4
        </button>

        <button id="five" onClick={this.props.number} value={5}>
          5
        </button>
        <button id="six" onClick={this.props.number} value={6}>
          6
        </button>
        <button
          style={opStyle}
          id="multiply"
          onClick={this.props.operator}
          value="*"
        >
          *
        </button>
        <button id="one" onClick={this.props.number} value={1}>
          1
        </button>
        <button id="two" onClick={this.props.number} value={2}>
          2
        </button>
        <button id="three" onClick={this.props.number} value={3}>
          3
        </button>
        <button
          style={opStyle}
          id="add"
          onClick={this.props.operator}
          value="+"
        >
          +
        </button>
        <button id="zero" onClick={this.props.number} value={0}>
          0
        </button>
        <button id="decimal" onClick={this.props.decimal} value=".">
          .
        </button>
        <button id="clear" onClick={this.props.reset} value=".">
          AC
        </button>
        <button
          style={opStyle}
          id="subtract"
          onClick={this.props.operator}
          value="-"
        >
          -
        </button>

        <button
          id="equals"
          style={equalStyle}
          onClick={this.props.calculate}
          value="="
        >
          =
        </button>
      </div>
    );
  }
}

export default Buttons;
