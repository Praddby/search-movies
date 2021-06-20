import React from "react";
import HeaderComponent from "./components/header";
import MainComponent from "./components/main";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/style.scss';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      totalResults: 0,
      input: '',
      items: []
    }
  }

  componentDidMount() {
    fetch('https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8')
      .then(res => res.json())
      .then(json => this.setState({
        items: [json]
      }));
  }

  notify = () => toast("Movie not found!", {type: 'warning', position: 'bottom-center'});

  handleChange = event => {
    this.setState({
      input: event.target.value
    });
    if (event.keyCode === 13) {
      fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=${this.state.input}&page=${Number(this.state.page)}`)
        .then(res => res.json())
        .then(json => {
          console.log(json)
          if (json.Response && json.Search) {
            this.setState({
                items: json.Search,
                totalResults: +json.totalResults
            });
          } else {
            this.notify()
          }
        });
    }
  }

  handleClick = (page) => {
    this.setState({
      page: page
    });
    fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=${this.state.input}&page=${Number(page)}`)
      .then(res => res.json())
      .then(json => {
        if (json.Response && json.Search) {
          this.setState({
              items: json.Search
          });
        }
      });
  }

  render() {
    return <div className="page">
      <HeaderComponent value={ this.state.input }
                       handleChange={ this.handleChange }/>
      <MainComponent items={ this.state.items }
                     page={ this.state.page }
                     totalResults={ this.state.totalResults }
                     handleClick={ this.handleClick }/>
       <ToastContainer />
    </div>
  }
}

export default Page;