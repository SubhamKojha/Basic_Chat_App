import React, { useEffect, useRef } from 'react';
import { useChatStore } from '../store/useChatStore';

import ChatHeader from './ChatHeader.jsx';
import MessageInput from './MessageInput';
import CharSkeleton from "./Skeleton/ChatSkeleton.jsx";
import { useAuthStore } from '../store/useAuthStore.js';
import { formatMessageTime } from '../utils/utils.js';

const ChatContainer = () => {
  const { messages = [], getMessages, isMessagesLoading, selectedUser, subscribeToMessages, unsubscribeFromMessages } = useChatStore();
  const { authUser } = useAuthStore();
  const messageEndRef = useRef(null);

  // Fetch + subscribe when selectedUser changes
  useEffect(() => {
    if (!selectedUser?._id) return;
    getMessages(selectedUser._id);
    subscribeToMessages();

    return () => unsubscribeFromMessages();
  }, [selectedUser?._id, getMessages, subscribeToMessages, unsubscribeFromMessages]);

  // Scroll to bottom when messages update
  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  if (isMessagesLoading) {
    return (
      <div className="flex-1 flex flex-col overflow-auto">
        <ChatHeader/>
        <CharSkeleton/>
        <MessageInput/>
      </div>
    )
  }

  return (
    <div className="flex-1 flex flex-col overflow-auto">
      <ChatHeader/>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, idx) => {
          const isMine = message.senderId === authUser._id;
          const wrapperClass = isMine ? "chat chat-end" : "chat chat-start";

          return (
            <div
              key={message._id}
              className={wrapperClass}
              // attach ref to the last message so scrollIntoView works
              ref={idx === messages.length - 1 ? messageEndRef : null}
            >
              <div className="chat-image avatar">
                <div className="size-10 rounded-full border">
                  <img
                    src={isMine ? (authUser.profilePic || "/avatar.png") : (selectedUser.profilePic || "/avatar.png")}
                    alt="profile-pic"
                  />
                </div>
              </div>

              <div className="chat-header mb-1">
                <time className="text-xs opacity-50 ml-1">{formatMessageTime(message.createdAt)}</time>
              </div>

              <div className="chat-bubble flex flex-col">
                {message.image && (
                  <img src={message.image} alt="attachment" className="sm:max-w-[200px] rounded-md mb-2"/>
                )}
                {message.text && <p>{message.text}</p>}
              </div>
            </div>
          );
        })}

        {/* Fallback end ref if messages is empty or map doesn't set it */}
        {messages.length === 0 && <div ref={messageEndRef} />}
      </div>

      <MessageInput/>
    </div>
  )
}

export default ChatContainer;
