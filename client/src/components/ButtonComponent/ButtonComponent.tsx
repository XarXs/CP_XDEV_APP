import React from 'react';
import './ButtonComponent.scss';

const ButtonComponent = (props: any) => {
    return(
        <div className="button-component">
            <button>{props.value}</button>
        </div>
    );
}

export default ButtonComponent;
