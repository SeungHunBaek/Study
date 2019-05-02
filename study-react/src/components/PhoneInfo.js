import React, {Component, Fragment} from "react";

class PhoneInfo extends Component{

    state = {
        editing : false,
        name : '',
        phone:'',
    }

    shouldComponentUpdate(nextProps, nextState){
        if (this.state !== nextState){
            return true;
        }
        return this.props.info !== nextProps.info;
    }

    handleRemove = ()=>{
        const {info, onRemove} = this.props;
        onRemove(info.id);
    }

    handleUpdate = ()=>{
        const{info, onUpdate} = this.props;
        onUpdate(info.id, null);

    }
    
    handleToggleEdit = ()=>{
        const {info, onUpdate} = this.props;

        if(this.state.editing){
            onUpdate(info.id,{
                name : this.state.name,
                phone : this.state.phone
            });
        } else {
            this.setState({
                name: info.name,
                phone: info.phone
            });
        }
        this.setState({
            editing : !this.state.editing
        });
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }


    render(){
        const {name, phone} = this.props.info;
        const style = {
            border : '1px solid black',
            padding : '9px',
            margin : '8px'
        }
        const {editing} = this.state;
        console.log(name);
        return (
            <div style={style}>
                {
                    editing ? (
                        <Fragment>
                            <div>
                                <input 
                                    name = 'name'
                                    onChange = {this.handleChange}
                                    value = {this.state.name}
                                />
                                </div>
                            <div>
                                <input 
                                    name = 'phone'
                                    onChange = {this.handleChange}
                                    value = {this.state.phone}
                                />
                            </div>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <div>
                                <b>{name}</b>
                            </div>
                            <div>
                                <b>{phone}</b>
                            </div>
                        </Fragment>
                    )
                }
                <button onClick = {this.handleRemove}>Delete</button>
                <button onClick = {this.handleToggleEdit}>
                    {
                        editing ? (
                            'Submit'
                        ) : (
                            'Modify'
                        )
                    }
                </button>
            </div>
        )
    }
}

export default PhoneInfo;