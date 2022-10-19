import React from 'react';

import './ChatPage.scss';
import InputComponent from '../../components/InputComponent/InputComponent';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import MessageComponent from '../../components/MessageComponent/MessageComponent';

const ChatPage = () => {
  return (
    <div className={'chat-page'}>
      Chat Page
      <div className={'chat-page-container'}>
        <div className={'chat-page-chat-container'}>
          <MessageComponent type={'user'} label={'user'}>
            Wiadomość Usera
          </MessageComponent>

          <MessageComponent type={'other'} label={'other'}>
            Wiadomość innego usera
          </MessageComponent>

          <MessageComponent type={'admin'} label={'admin'}>
            Wiadomość admina.
          </MessageComponent>
        </div>
        <form className={'chat-page-input-container'}>
          <InputComponent name={'userInput'} />
          <ButtonComponent type={'submit'}>Login</ButtonComponent>
        </form>
      </div>
    </div>
  );
};

export default ChatPage;
