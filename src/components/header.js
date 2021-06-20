import React from "react";
import InputComponent from "./input";

class HeaderComponent extends React.Component {
  render() {
    return <div className="header">
      <h2>Movie Catalog</h2>
      <InputComponent value={ this.props.input } handleChange={this.props.handleChange}/> 
    </div>
  }
}

export default HeaderComponent;