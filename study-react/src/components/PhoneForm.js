import React, {Component} from 'react';

class PhoneForm extends Component{

    input = React.createRef();

    state = {
        name : '',
        phone : '',
    }

    handleChange = (event) =>{
        this.setState({
            // 발생한 이벤트 이름(state와 동일해야한다) : 발생한 이벤트의 값
            [event.target.name] : event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onCreate({
            name : this.state.name,
            phone : this.state.phone
        })
        this.setState({
            name :'',
            phone:''
        });
        this.input.current.focus();
    }
    render(){
        return(
            <form onSubmit = {this.handleSubmit}>
               <input 
                 name = 'name'
                 placeholder = 'Name' 
                 onChange={this.handleChange} 
                 value={this.state.name}
                 ref={this.input}
                 />
               <input
                 name = 'phone' 
                 placeholder = 'Phone Number' 
                 onChange = {this.handleChange}
                 value= {this.state.phone}/>

               <button type='submit'>  
                Send
               </button>

               
            </form>
        );
    }
}

export default PhoneForm;