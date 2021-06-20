import React from "react";

class InputComponent extends React.Component {
  render() {
    return <input type="text"
                  name="input"
                  className="header-input"
                  value={this.props.value}
                  onKeyUp={this.props.handleChange}
          />
  }
}

export default InputComponent;