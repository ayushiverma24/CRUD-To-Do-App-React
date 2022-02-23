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
    // if (this.state.flag) {
    //   this.state.taskList.map((data, key) => {
    //     if (this.state.address === key) {
    //       console.log("data inside = ", data);
    //       console.log("inside this.state.task = ", this.state.task);
    //       // this.setState({
    //       //   taskList[key]: this.state.task
    //       // })
    //       return this.state.task;
    //     }
    //   });
    // } else {
    //   if()
    //   this.setState({
    //     taskList: this.state.taskList.concat(this.state.task),
    //   });
    //   this.setState({
    //     task: "",
    //   });
    // }

    // if()
  };
  handleDelete = (i) => {
    const newList = this.state.taskList.filter((data, index) => {
      return i !== index; // returning those data which are not matching with "i"
    });
    this.setState({
      taskList: newList,
    });
  };
  handleUpdateTask = () => {
    console.log("clicked");
  };
  // handleEdit = (i) => {
  //   console.log("slected = ", i);
  //   var item = this.state.taskList[i];
  //   this.setState({
  //     task: item,
  //     address: i,
  //     flag: true,
  //   });
  // };
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
                      <div className="theList" key={i}>
                        <TextField
                          variant="outlined"
                          fullWidth
                          required
                          className="listInput"
                          value={myData.task}
                          onChange={this.handleUpdateTask}
                        />
                        {/* <input
                          type="text"
                          id={myData.id}
                          value={myData.task}
                        ></input> */}
                        {/* <p>{myData.task}</p> */}
                        {/* <EditIcon
                          fontSize="small"
                          onClick={() => {
                            this.handleEdit(i);
                          }}
                        /> */}
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
