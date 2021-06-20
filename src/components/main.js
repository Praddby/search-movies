import ItemComponent from "./item";
import PaginationComponent from "./pagination";
import React from "react";

class MainComponent extends React.Component {
  render() {
    if (this.props.items.length > 0) {
      return (<div className="main">
        { this.props.items.map(item => {
          return <ItemComponent key    = { item.imdbID }
                                imdbID = { item.imdbID }
                                poster = { item.Poster }
                                title   = { item.Title }
                                year   = { item.Year }
                                type   = { item.Type }
                />
        }) }
        <PaginationComponent totalResults={this.props.totalResults}
                             page={this.props.page}
                             handleClick={this.props.handleClick}/>
      </div>);
    } else {
      return null;
    }
  }
}

export default MainComponent;