import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {

    miEdad = 29; 

    constructor(props){
        super(props);
        this.state = {
            edad: this.miEdad
        }

    }
    render() {
        return (
            <div>
                <h1>
                    Hola {this.props.name}
                </h1>
                <h2>
                    Tu edad es de: {this.state.edad}
                </h2>
                <div>
                    <button onClick={this.cumpleaños}>
                        cumplir años
                    </button>
                </div>

            </div>
        );
    }

    cumpleaños = () =>{
        this.setState((prevState)=>(
            {
                edad: prevState.miEdad + 1
            }
        ))
    }

}


Greeting.propTypes = {
    name: PropTypes.string,
};


export default Greeting;
