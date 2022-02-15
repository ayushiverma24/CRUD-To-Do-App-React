import React, { Component } from "react";
import "./Home.css";
import TextField from "@mui/material/TextField";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import Image3 from "../Images/Image3.svg";

export class Home extends Component {
  render() {
    return (
      <div className="thePage">
        <div className="myGlass">
          <img className="theImage" src={Image3}></img>

          <div className="myList">
            <h1 align="right">To Do List</h1>
            <div className="myInput">
              <TextField label="Task" variant="outlined" fullWidth />
              <AddCircleOutlineRoundedIcon
                className="addIcon"
                fontSize="large"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
