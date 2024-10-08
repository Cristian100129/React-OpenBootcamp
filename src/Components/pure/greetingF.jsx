import React, { useState } from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    // Breve introduccion a useState
    // const [Variable, metodo para actualizarlo] = useState(valor inicial);
    const [age, setage] = useState(29);

    const cumpleaños = () =>{
        setage(age + 1);
    }

    return (
        <div>
                <h1>
                    Hola {props.name} desde componente funcional
                </h1>
                <div>
                    <button onClick={cumpleaños}>
                        cumplir años
                    </button>
                </div> */

            </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string,
};


export default GreetingF;
