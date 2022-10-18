import React from 'react';
import './ButtonComponent.scss';

const ButtonComponent = (props: any) => {
  return (
    <div className="button-component">
      <button type={props.type}>{props.children}</button>
    </div>
  );
};

export default ButtonComponent;
