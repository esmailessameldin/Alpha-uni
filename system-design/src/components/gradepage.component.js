import React, { Component } from "react";
import axios from 'axios';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
const loading = () => (
    <div>
     <Segment style = {{position: 'absolute', left: '50%', top: '39%',
      transform: 'translate(-50%, -50%)'}}>
      <Dimmer active>
        <Loader size='massive'>Loading data</Loader>
      </Dimmer>

      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>
    </div>)

        export default class CreateExercise extends Component {
            
          constructor(props) {
            super(props);
            this.split=this.split.bind(this)
            this.split2=this.split2.bind(this)
            this.split3=this.split3.bind(this)
            this.handleGrade=this.handleGrade.bind(this)
            this.state = {
              requests: [],
              requests2:[],
              student:'',
              teacher:'',
              loading:true
              
              
            };
          }


split(e){

    var array=e.split(",")
    return array[0]
}
split2(e){
 
    var array=e.split(",")
   
    return array[1]
}
split3(e){
    
    var array=e.split(",")
   return array[2]
    
}
componentDidMount(){

axios.get('http://localhost:5000/admins/').then(res=>{
console.log(res.data)
 for(var i=0;i<res.data.length;i++){
var array=res.data[i].split(",")
this.state.requests2.push(array[2])
}
console.log(this.state.requests2)
for(var i=0;i<res.data.length;i++){
    var array = res.data[i].split(",");
    for(var j=i+1;j<this.state.requests2.length;j++){
        if(this.state.requests2[j]===array[2]){
            this.state.requests.push(res.data[j])
            this.state.requests2[j]=''
        }
    }
}
if(this.state.requests.length==0){
    this.setState({
        requests:res.data
    })

}

this.setState({
loading:false

})

})
    

 
}


handleGrade(e){
axios.post('http://localhost:5000/admins/handlegrade/'+e).then(res=>{


alert(res.data)
})
}


      

          render() {
            if(this.state.loading){
                return loading()
                  
          }

            
            
            return (
              <div>
                <ul>
                  {this.state.requests.map((item, key) => {
                    return (
                    <div>
                   <li> Rquest by : {this.split2(item)} to Grade {this.split3(item)}. The grade: {this.split(item)}</li>
                   <button type="button" style={{position: 'absolute', left: '5%'}} onClick={() => this.handleGrade(item)}>
                       Accept
                        </button>
                        <button type="button" style={{position: 'absolute', left: '15%'}} onClick={() => this.smiteStudent(item.id)}>
                         Decline
                        </button>
                        <ul style={{color:'white'}}>     end    </ul>
                        <ul style={{color:'white'}}>     end    </ul>
                      
                        </div>
                    );
                  })}
                  
                </ul>
              </div>
            );
          }
        }