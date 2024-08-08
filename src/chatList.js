import React from 'react';
import '../src/chatList.css'; // Import CSS for styling

// Sample chat data
const chatData = [
  {
    name: 'Jessica Koel',
    message: 'Hey, Joel, I here to help you out please ...',
    time: '11:26',
    starred: true,
  },
  {
    name: 'Komeial Bolger',
    message: 'I will send you all documents as soon a...',
    time: '12:26',
    starred: true,
  },
  {
    name: 'Tamaara Suiale',
    message: 'Are you going to business trip next week',
    time: '8:26',
    starred: true,
  },
  {
    name: 'Sam Nielson',
    message: 'I suggest to start new business soon',
    time: '7:16',
    starred: true,
  },
  {
    name: 'Caroline Nexon',
    message: 'We need to start new reseatch center.',
    time: '9:26',
    starred: true,
  },
  {
    name: 'Patrick Koeler',
    message: 'May be yes',
    time: '3:26',
    starred: true,
  },
];

// ChatList Component
const ChatList = () => {
  return (
    <div className="chat-list-container">
      <input type="text" className="search-bar" placeholder="Search..." />

      <ul className="chat-list">
        {chatData.map((chat, index) => (
          <li key={index} className="chat-item">
            <div className="chat-info">
              <h4 className="chat-name">{chat.name}</h4>
              <p className="chat-message">{chat.message}</p>
            </div>
            <div className="chat-meta">
              <span className="chat-time">{chat.time}</span>
              {chat.starred && <span className="chat-star">★</span>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
