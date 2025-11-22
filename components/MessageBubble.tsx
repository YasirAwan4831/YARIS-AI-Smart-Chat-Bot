import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Bot, User as UserIcon, AlertCircle } from 'lucide-react';
import { Message, Role } from '../types';

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.role === Role.USER;
  const isError = message.isError;

  return (
    <div className={`flex w-full mb-6 ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`flex max-w-[85%] md:max-w-[75%] lg:max-w-[65%] ${isUser ? 'flex-row-reverse' : 'flex-row'} gap-3`}>
        
        {/* Avatar */}
        <div className={`
          flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center
          ${isUser ? 'bg-primary text-white' : isError ? 'bg-red-500 text-white' : 'bg-accent text-white'}
        `}>
          {isUser ? <UserIcon size={18} /> : isError ? <AlertCircle size={18} /> : <Bot size={18} />}
        </div>

        {/* Message Content */}
        <div className={`
          flex flex-col px-4 py-3 rounded-2xl shadow-sm overflow-hidden
          ${isUser 
            ? 'bg-primary text-white rounded-tr-none' 
            : isError
              ? 'bg-red-900/20 border border-red-500/50 text-red-200 rounded-tl-none'
              : 'bg-surface text-slate-200 rounded-tl-none border border-slate-700/50'
          }
        `}>
          {isUser ? (
            <div className="whitespace-pre-wrap">{message.text}</div>
          ) : (
            <div className="markdown-body text-sm md:text-base leading-relaxed">
              <ReactMarkdown>
                {message.text}
              </ReactMarkdown>
            </div>
          )}
          <div className={`text-[10px] mt-1 opacity-60 ${isUser ? 'text-blue-100' : 'text-slate-400'}`}>
            {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;