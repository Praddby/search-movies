import React from "react";
import defaultPoster from '../assets/default_poster.jpg';

class ItemComponent extends React.Component {
  render() {
    return <div className="item">
      <img src={ this.props.poster !== "N/A"
                 ? this.props.poster
                : defaultPoster }
           alt={ this.props.title } />
      <p>Name: { this.props.title }</p>
      <p>Year: { this.props.year }</p>
      <p>imdbID: { this.props.imdbID }</p>
      <p>Type: { this.props.type }</p>
    </div>
  }
}

export default ItemComponent;