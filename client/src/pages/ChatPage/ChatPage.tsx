import React from 'react';

import './ChatPage.scss';

const ChatPage = () => {
  return (
    <div className={'chat-page'}>
      Chat Page
      <div className={'chat-page-chat-container'}> ChatContainer </div>
      <div className={'chat-page-input-container'}> User Input place </div>
    </div>
  );
};

export default ChatPage;
