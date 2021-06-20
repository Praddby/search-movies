import React from "react";

class PaginationComponent extends React.Component {

  getPagination = countPage => {
    let content = [];
    for (let i = 0; i < countPage; i++) {
      content.push(<span key={i+1} onClick={() => this.props.handleClick(i+1)}>{i+1}</span>);
    }
    return content;
  };

  render() {
    const countPage = Math.ceil(this.props.totalResults / 10);
    if (countPage <= 1) return null;
    return <div className="pagination">
      <span onClick={() => this.props.handleClick(this.props.page - 1)}
            className={this.props.page === 1 ? 'disabled' : ''}> &lt; </span>
      {this.getPagination(countPage)}
      <span onClick={() => this.props.handleClick(this.props.page + 1)}
            className={this.props.page === countPage ? 'disabled' : ''}>  &gt; </span>
    </div>
  }
}

export default PaginationComponent;