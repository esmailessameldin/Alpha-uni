import React, { Component } from "react";
import axios from 'axios';
        export default class CreateExercise extends Component {
          constructor(props) {
            super(props);
            this.handleClick = this.handleClick.bind(this);
            this.state = {
              name: "",
              majors:[],
              ready:false
            };
          }

          componentDidMount(){
            console.log("here")
            var array=this.props.match.params.name.split(",")
            const user={
              name:array[0]
            }
            console.log(user)
           axios.post('http://localhost:5000/department/findbyname',user)
            .then( res=> {
              console.log(res.data);
              this.state.majors=res.data
              this.setState({
                ready:true
              })
            })}
          handleClick(e) {
            console.log(e);
            var array=this.props.match.params.name.split(",")
            window.location = "/majors/" + e+","+array[1];
          }

          render() {
            if(this.state.ready){
              return (
                <div>
                  <ul>
                    {this.state.majors.map((item, key) => {
                      return (
                        <li key={key}>
                          {item}
                          <button type="button" style = {{position: 'absolute', left: '50%'}} onClick={() => this.handleClick(item)}>
                           View Courses
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
              
            }
            
            return (
              <div>
                <ul>
                 Loading....
                </ul>
              </div>
            );
          }
        }