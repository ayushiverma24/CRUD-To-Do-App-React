import React, { Component } from "react";
import "./Home.css";
import TextField from "@mui/material/TextField";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import Image3 from "../Images/Image3.svg";

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: "",
      taskList: [],
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
  }
  handleInput = (e) => {
    this.setState({
      task: e.target.value,
    });
  };
  handleAddTask = (e) => {
    e.preventDefault();
    console.log("I am clicked");
    this.setState({
      taskList: this.state.taskList.concat(this.state.task),
    });
    this.setState({
      task: "",
    });
  };
  render() {
    console.log("task = ", this.state.task);
    console.log("taskList = ", this.state.taskList);
    let data = this.state.taskList;
    return (
      <div className="thePage">
        <div className="myGlass">
          <img className="theImage" src={Image3}></img>

          <div className="myList">
            <h1 align="right">To Do List</h1>
            <div>
              <form className="myInput" onSubmit={this.handleAddTask}>
                <TextField
                  label="Task"
                  variant="outlined"
                  fullWidth
                  required
                  value={this.state.task}
                  onChange={(e) => this.handleInput(e)}
                />
                <AddCircleOutlineRoundedIcon
                  className="addIcon"
                  fontSize="large"
                  onClick={this.handleAddTask}
                  type="submit"
                />
              </form>
            </div>
            <div>
              {this.state.taskList.length > 0 ? (
                <div>
                  {data.map((myData, i) => {
                    return (
                      <div className="theList">
                        <h1>{myData}</h1>
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
