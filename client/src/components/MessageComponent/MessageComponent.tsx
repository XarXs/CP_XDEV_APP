import React from 'react';
import './MessageComponent.scss';

const MessageComponent = (props: any) => {
  return (
    <>
      <div className={'message-component-label ' + props.type}>
        {props.label}
      </div>
      <div className={'message-component ' + 'message-component-' + props.type}>
        <span>{props.children}</span>
      </div>
    </>
  );
};

export default MessageComponent;
