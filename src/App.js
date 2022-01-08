import React from "react";
import Buttons from "./components/Buttons";
import Formula from "./components/Formula";
import Output from "./components/Output";
const isOperator = /[*+/-]/,
  endsWithOperator = /[*+-/]$/,
  endsWithMinus = /[+\-*/]*[-]+$/;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { output: "", formula: "" };

    this.handleDecimal = this.handleDecimal.bind(this);
    this.handleNumbers = this.handleNumbers.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
    this.calculate = this.calculate.bind(this);
    this.reset = this.reset.bind(this);
  }

  //handle Decimal Points
  handleDecimal(event) {
    const { output, formula } = this.state;
    const expression = /[.]$|[.][\d]$/;
    let updatedformula = expression.test(formula)
      ? formula
      : formula + event.target.value;
    let updatedCurrentValue = expression.test(output)
      ? output
      : output + event.target.value;
    this.setState({
      formula: updatedformula,
      output: updatedCurrentValue,
      prevValue: output,
    });
  }
  //handle Numbers' clicks
  handleNumbers(event) {
    const value = event.target.value;
    const { output, formula } = this.state;

    this.setState({
      output:
        output === "0" || isOperator.test(output) ? value : output + value,
      formula: formula === "0" ? value : formula + value,
    });
  }

  //handle Operators' clicks
  handleOperator(event) {
    const value = event.target.value;
    const { formula } = this.state;
    let newFormula = formula;
    if (!endsWithOperator.test(formula)) {
      newFormula = formula + value;
    } else {
      if (endsWithMinus.test(formula)) {
        newFormula =
          value === "-" ? newFormula : formula.replace(endsWithMinus, value);
      } else
        newFormula =
          value === "-"
            ? formula + value
            : formula.replace(endsWithOperator, value);
    }
    this.setState({ output: value, formula: newFormula });
  }

  //calculate the result by evaluating the formula
  calculate() {
    let formula = this.state.formula.replace(/--/g, "+0+0+");
    // eslint-disable-next-line no-new-func
    let result = Function("return " + formula)();

    this.setState({
      output: formula + "=" + result.toString(),
      formula: result,
    });
  }
  //initialize the components' state
  reset() {
    this.setState({
      output: "0",
      formula: "0",
    });
  }
  render() {
    return (
      <div className="calculator">
        <Formula formula={this.state.formula} />
        <Output output={this.state.output} />
        <Buttons
          number={this.handleNumbers}
          decimal={this.handleDecimal}
          operator={this.handleOperator}
          calculate={this.calculate}
          reset={this.reset}
        />
      </div>
    );
  }
}

export default App;
