import React from "react";
import './App.css';
import Display from './components/Display';
import Button from "./components/Button";
import Logic from "./components/Logic";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      display: "0",
      logic: new Logic()
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(value) {
    this.setState({
      display: this.state.logic.calculate(value),
    });
  }

  render() {
    return (
      <div className="app">
        <div className="wrapper">
          <Display display={this.state.display} />
          <div className="keypad">
            <Button
              value="AC"
              className="button controls-button"
              onClick={this.handleButtonClick}
            />
            <Button
              value="+/-"
              className="button controls-button"
              onClick={this.handleButtonClick}
            />
            <Button
              value="%"
              className="button controls-button"
              onClick={this.handleButtonClick}
            />
            <Button
              value={"\u00F7"}
              className="button orange-button"
              onClick={this.handleButtonClick}
            />

            <Button
              value="7"
              className="button"
              onClick={this.handleButtonClick}
            />
            <Button
              value="8"
              className="button"
              onClick={this.handleButtonClick}
            />
            <Button
              value="9"
              className="button"
              onClick={this.handleButtonClick}
            />
            <Button
              value="x"
              className="button orange-button"
              onClick={this.handleButtonClick}
            />
            
            <Button
              value="4"
              className="button"
              onClick={this.handleButtonClick}
            />
            <Button
              value="5"
              className="button"
              onClick={this.handleButtonClick}
            />
            <Button
              value="6"
              className="button"
              onClick={this.handleButtonClick}
            />
            <Button
              value="-"
              className="button orange-button"
              onClick={this.handleButtonClick}
            />

            <Button
              value="1"
              className="button"
              onClick={this.handleButtonClick}
            />
            <Button
              value="2"
              className="button"
              onClick={this.handleButtonClick}
            />
            <Button
              value="3"
              className="button"
              onClick={this.handleButtonClick}
            />
            <Button
              value="+"
              className="button orange-button"
              onClick={this.handleButtonClick}
            />

            <Button
              value="0"
              className="button null-button"
              onClick={this.handleButtonClick}
            />
            <Button
              value="."
              className="button"
              onClick={this.handleButtonClick}
            />
            <Button
              value="="
              className="button orange-button"
              onClick={this.handleButtonClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
