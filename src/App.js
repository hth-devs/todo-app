import React, { Component  } from 'react';
import './App.css';
import List from './components/List/List';
import { MDBBtn , MDBInput } from "mdbreact";

export default class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        term: '',
        items: []
      };
    }

    onChange = (event) => {
      this.setState({ term: event.target.value });
    }

    onSubmit = (event) => {
      event.preventDefault();
      this.setState({
        term: '',
        items: [...this.state.items, this.state.term]
      });
    }

    render() {
      return (
        <div>
          <form className="App" style={{margin: "auto", width: "50%", border: "3px solid white", padding: "10px"  }} onSubmit={this.onSubmit}>
          <MDBInput label="Add Todo"  value={this.state.term} onChange={this.onChange} />
            <MDBBtn rounded outline color='info' >Update</MDBBtn>
          </form>
          <List items={this.state.items} />
        </div>
      );
    }
}

