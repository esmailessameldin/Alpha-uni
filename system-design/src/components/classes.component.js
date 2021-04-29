import React, { Component } from "react";
        export default class CreateExercise extends Component {
          constructor(props) {
            super(props);
            this.handleClick = this.handleClick.bind(this);
            this.state = {
              name: ""
            };
          }

          handleClick(e) {
            console.log(e);
            window.location = "/majors/" + e+","+this.props.match.params.id;
          }

          render() {
            const exerciseArray = [
              "Accounting",
              "Adolescence Education: Chemistry (7-12)",
              "Adolescence Education: Social Studies (7-12)",
              "Biological Sciences",
              "Chemistry",
              "English",
              "History",
              "Industrial and Labor Relations",
              "Liberal Arts",
              "Media and Communications",
              "Philosophy and Religion",
              "Politics & Economics & Law",
              "Spanish Language",
              "Visual Arts",
              "Adolescence Education: Biology (7-12)",
              "Adolescence Education: Mathematics (7-12)",
              "Biochemistry",
              "Business Administration",
              "Childhood Education (1-6)",
              "Computer & Information Science",
              "Criminology",
              "Finance",
              "General Studies",
              "Health and Society",
              "Industrial and Labor Relations",
              "Management Information Systems",
              "Marketing",
              "Mathematics",
              "Psychology",
              "Sociology",
              "Special Education and Childhood Education (1-6)",
              "Visual Arts: Electronic Media"
            ];
            return (
              <div>
                <ul>
                  {exerciseArray.map((item, key) => {
                    return (
                      <li key={key}>
                        {item}
                        <button type="button" style = {{width:"25vh",position: 'absolute', left: '28%'}} onClick={() => this.handleClick(item)}>
                          Click to view courses
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          }
        }