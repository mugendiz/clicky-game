import React, { Component } from 'react';
import Heading from "./components/heading"
// import Footer from "./components/footer"
import pics from "./data.json";
import "./App.css";
import { container } from 'reactstrap';
import { fppter } from 'reactstrap';



import logo from './logo.svg';
import './src/components';

class App extends Component {
  // Setting the component's initial state
  state = {
    pic: pic,
    clicked: [],
    statusBoolean: false,
    scoreUpdate: 0
  };

// Function to handle picture clicks

  handleIncrement = id => {

    const hasBeenClicked = this.state.clicked.indexOf(id) !== -1

    if (hasBeenClicked) {
     this.setState({ clicked:[], highest:Math.max(this.state.highest, this.state.clicked.length)})
    } else {
      const picsCopy = pics.slice();

      const picsShuffle = [];

      while (picsCopy.length > 0 ) {
        const index = Math.floor(Math.random() * picsCopy.length)

        const pics = picsCopy[index];

        picsShuffle.push(pics)

        picsCopy.splice(index, 1)
      }
      const clicked = this.state.clicked.slice()
      clicked.push(id)
      this.setState({pics:picsShuffle, clicked})
    }

// Render Function, after running map() on the pics

    render() {
        return (
            <div>
              Current Score: {this.state.clicked.length}
            </div>
            <div>
             You guessed {this.state.statusBoolean}
            </div>
            <container>
            {this.state.pics.map(pics => {
            return  <picsCard
                removepics={this.switchpics}
                id={pics.id}
                key={pics.id}
                name={pics.name}
                image={pics.image}
                occupation={pics.occupation}
                location={pics.location}
                handleIncrement={this.handleIncrement.bind(this)}

              />
            })}
            </container>
          </div>
        )
      }
    }
  };

export default App;
