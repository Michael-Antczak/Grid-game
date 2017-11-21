import React, { Component } from 'react';
import './App.css';
import Grid from './components/Grid';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      boxes: [
        ["B", null, null, ".", null, null, null, null],
        [null, ".", null, null, null, null, ".", null],
        [null, null, "X", null, null, null, null, null],
        [null, null, null, "B", null, ".", null, "."],
        [null, ".", null, null, null, null, null, null],
        [null, "B", ".", null, null, ".", null, null],
        [null, ".", null, null, "B", null, null, null],
        [null, null, ".", null, null, ".", null, null],
      ], 
      score: 0,
      lives: 3,
    }
  }

  moveLeft = () => {

    console.log('Left arrow clicked');
    let current = this.state.boxes.slice();
    let rows = current.length;

    for(let i = 0; i < rows; i++) {
      if(current[i][0] === "X") {
        return;
      } else {
        const position = current[i].indexOf("X");

        if(position > 0) {

          // check if pacman eats dot
          if(current[i][position - 1] === ".") {
            this.pacmanEatsDot();
          }

          // check if steps on a bee
          if(current[i][position - 1] === "B") {
            this.stepOnBee();
          }

          current[i][position - 1] = "X";
          current[i][position] = null; 

          this.setState({
            boxes: current,
          })
        }
      }
    }
  }

  moveRight = () => {

    console.log("Right arrow clicked");
    let current = this.state.boxes.slice();
    let rows = current.length;
    
    for(let i = 0; i < rows; i++) {
      if(current[i][current[i].length - 1] === "X") {
        return;
      } else {
        const position = current[i].indexOf("X");

        if(position >= 0) {

          // check if pacman eats dot
          if(current[i][position + 1] === ".") {
            this.pacmanEatsDot();
          }

          // check if steps on a bee
          if(current[i][position + 1] === "B") {
            this.stepOnBee();
          }

          current[i][position + 1] = "X";
          current[i][position] = null; 

          this.setState({
            boxes: current,
          })
        }
      }
    }
  }

  moveUp = () => {
    
    console.log("UP arrow clicked");
    let current = this.state.boxes.slice();
    let rows = current.length;
    
    if(current[0].indexOf("X") >= 0) {
      return;
    }

    for(let i = 1; i < rows; i++) {
      
        const position = current[i].indexOf("X");

        if(position >= 0) {

          // check if pacman eats dot
          if(current[i - 1][position] === ".") {
            this.pacmanEatsDot();
          }

          // check if steps on a bee
          if(current[i - 1][position] === "B") {
            this.stepOnBee();
          }

          current[i - 1][position] = "X";
          current[i][position] = null; 

          this.setState({
            boxes: current,
          })
        }
    }
  }

  moveDown = () => {

    console.log("DOWN arrow clicked");
    let current = this.state.boxes.slice();
    let rows = current.length;
        
    if(current[rows - 1].indexOf("X") >= 0) {
      return;
    }

    for(let i = rows - 2; i >= 0; i--) {
      
        const position = current[i].indexOf("X");

        if(position >= 0) {

          // check if pacman eats dot
          if(current[i + 1][position] === ".") {
            this.pacmanEatsDot();
          }

          // check if steps on a bee
          if(current[i + 1][position] === "B") {
            this.stepOnBee();
          }

          current[i + 1][position] = "X";
          current[i][position] = null; 

          this.setState({
            boxes: current,
          })
        }
    }
  }

  handleKeyPress = (event) => {
      console.log('Key pressed: ' + event.key);
      if(event.key === "ArrowLeft") {
        this.moveLeft();
      } else if(event.key === "ArrowRight") {
        this.moveRight();
      } else if(event.key === "ArrowUp") {
        this.moveUp();
      } else if(event.key === "ArrowDown") {
        this.moveDown();
      }
  }

  pacmanEatsDot() {
    this.setState(prevState => ({
      score: prevState.score + 10
    }));
  }

  stepOnBee() {
    console.log('BEE!');
    this.setState(prevState => ({
      lives: prevState.lives - 1
    }));
  }

  render() {
    return (
      <div className="App" tabIndex="0" onKeyDown={this.handleKeyPress} >
        <header className="App-header">
          <h1 className="App-title">Welcome to the Grid</h1>
          <h3>Score: {this.state.score}</h3>
          <h3>Lives: {this.state.lives}</h3>
        </header>

          <Grid location={this.state.boxes} />

        <p className="App-intro">
          Rules of the game are simple.
        </p>
      </div>
    );
  }
}

export default App;
