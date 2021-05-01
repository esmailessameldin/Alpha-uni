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
            const user={
              name:this.props.match.params.name
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
            window.location = "/majors/" + e+","+this.props.match.params.id;
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