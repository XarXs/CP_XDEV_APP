import React from 'react';
import './InputComponent.scss';

const InputComponent = (props: any) => {
  return (
    <div className="input-component">
      {props.label && <label>{props.label}:</label>}
      <input
        className={'input-component-input'}
        type={props.type ? props.type : 'text'}
        name={props.name}
      />
    </div>
  );
};

export default InputComponent;
