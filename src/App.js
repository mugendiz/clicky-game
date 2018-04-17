import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Footer } from 'reactstrap';

import Heading from "./components/heading/heading";
import ImageCard from "./components/image/ImageCard";
import "./App.css";
import logo from './logo.svg';
import images from './images.json'

class App extends Component {
  // Setting the component's initial state
  state = {
    images: images,
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
      const imagesCopy = images.slice();

      const imagesShuffle = [];

      while (imagesCopy.length > 0 ) {
        const index = Math.floor(Math.random() * imagesCopy.length)

        const images = imagesCopy[index];

        imagesShuffle.push(images)

        imagesCopy.splice(index, 1)
      }
      const clicked = this.state.clicked.slice()
      clicked.push(id)
      this.setState({images:imagesShuffle, clicked})
    }
  };

    // Render, after running map() on the pics

    render() {
        return (
          <div className='headerList'>
          <Heading />
          Current Score: {this.state.clicked.length}
          You guessed {this.state.statusBoolean}

            <Container />
              {this.state.images.map(pics => {
                  return  <ImageCard
                      removepics={this.switchimages}
                      id={images.id}
                      key={images.id}
                      name={images.name}
                      image={images.image}
                      occupation={images.occupation}
                      location={images.location}
                      handleIncrement={this.handleIncrement.bind(this)}
                    />
                  })
                };
          </div>
          );
        }
      }



export default App;
