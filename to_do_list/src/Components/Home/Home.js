import React, { Component } from "react";
import "./Home.css";
import TextField from "@mui/material/TextField";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import Image3 from "../Images/Image3.svg";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: "",
      taskList: [],
      flag: false,
      address: 0,
      currentTask: {
        task: "",
        id: "",
      },
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleUpdateTask = this.handleUpdateTask.bind(this);
  }
  handleInput = (e) => {
    if (e.target.value.trim().length === 0) {
    } else {
      this.setState({
        currentTask: {
          task: e.target.value,
          id: Date.now(),
        },
      });
    }
  };
  handleAddTask = (e) => {
    e.preventDefault();
    const newTask = this.state.currentTask;
    if (newTask.task !== "") {
      const newTaskList = [...this.state.taskList, newTask];
      this.setState({
        taskList: newTaskList,
        currentTask: {
          task: "",
          key: "",
        },
      });
    }
  };
  handleDelete = (i) => {
    const newList = this.state.taskList.filter((data, index) => {
      return i !== index; // returning those data which are not matching with "i"
    });
    this.setState({
      taskList: newList,
    });
  };
  handleUpdateTask = (e, id) => {
    const tasklist = this.state.taskList;
    tasklist.map((data, index) => {
      if (id === data.id) {
        data.task = e.target.value;
      }
    });
    this.setState({
      taskList: tasklist,
    });
    console.log("tasklist = ", tasklist);
    console.log("updateed data = ", this.state.taskList);
  };
  render() {
    let data = this.state.taskList;
    console.log("data = ", data);
    console.log("this.state = ", this.state);
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
                  value={this.state.currentTask.task}
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
                    {
                      console.log("myData = ", myData);
                    }

                    return (
                      <div className="theList" key={myData.id}>
                        <TextField
                          variant="outlined"
                          fullWidth
                          required
                          className="listInput"
                          value={myData.task}
                          onChange={(e) => this.handleUpdateTask(e, myData.id)}
                        />
                        <DeleteForeverIcon
                          className="delIcon"
                          fontSize="small"
                          onClick={() => this.handleDelete(i)}
                        />
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
