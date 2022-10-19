import React from 'react';

import './ChatPage.scss';
import InputComponent from '../../components/InputComponent/InputComponent';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';

const ChatPage = () => {
  return (
    <div className={'chat-page'}>
      Chat Page
      <div className={'chat-page-container'}>
        <div className={'chat-page-chat-container'}> ChatContainer </div>
        <form className={'chat-page-input-container'}>
          <InputComponent name={'userInput'} />
          <ButtonComponent type={'submit'}>Login</ButtonComponent>
        </form>
      </div>
    </div>
  );
};

export default ChatPage;
