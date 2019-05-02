import React, {Component} from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';
import './App.css';
import { throwStatement } from '@babel/types';

class App extends Component{



  id= 3;
 
  state = {
    information : [
      {
        id : 0,
        name : 'Baek1',
        phone : '070-0000-0001'
      },
      {
        id : 1,
        name : 'Baek2',
        phone : '070-0000-0002'
      },
      {
        id : 2,
        name : 'Baek3',
        phone : '070-0000-0003'
      }
    ],
    keyword:'',
  }
  
  handleChange = (event)=>{
    this.setState({
      keyword : event.target.value,
    });
  }

  handleCreate = (data)=>{
    const {information} = this.state;
    this.setState({
      information : information.concat(Object.assign({},data,{
        //...data,
        id : this.id++
      }))
    })
  }

  handleRemove = (id) => {
    const {information} = this.state;
    this.setState({
      information : information.filter(info => info.id !== id)
    });
  }

  handleUpdate = (id, data) => {
    const {information} = this.state;
    this.setState({
      information : information.map(info => {
        if(info.id === id ){
          return {id,...data};
        }
        return info;
      })
    });
  }

  render(){
      return(
          <div>
              <PhoneForm onCreate={this.handleCreate}/>
              <input 
                value={this.state.keyword}
                onChange={this.handleChange}
                placeholder='Insert Search keyword'
                />
              <PhoneInfoList 
                data = {this.state.information.filter(
                  info => info.name.indexOf(this.state.keyword) > -1
                )}
                onRemove = {this.handleRemove}
                onUpdate = {this.handleUpdate}
              />
          </div>
      );
  }
}

export default App;
