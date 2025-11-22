import React from 'react';
import { MessageSquarePlus, MessageSquare, Trash2, X, Menu, LogOut } from 'lucide-react';
import { Conversation, User } from '../types';

interface SidebarProps {
  conversations: Conversation[];
  activeId: string | null;
  isOpen: boolean;
  user: User;
  onSelectConversation: (id: string) => void;
  onNewChat: () => void;
  onDeleteChat: (id: string, e: React.MouseEvent) => void;
  onCloseMobile: () => void;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  conversations,
  activeId,
  isOpen,
  user,
  onSelectConversation,
  onNewChat,
  onDeleteChat,
  onCloseMobile,
  onLogout
}) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-20 md:hidden transition-opacity"
          onClick={onCloseMobile}
        />
      )}

      {/* Sidebar Container */}
      <div className={`
        fixed md:relative z-30 h-full w-92 bg-surface border-r border-slate-700/50 flex flex-col transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        {/* Header */}
        <div className="p-4 border-b border-slate-300/50 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold text-slate-300">
             <div className="w-9 h-9 bg-gradient-to-tr from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">  MY  </span>
             </div>
             <span>YARIS AI</span>
          </div>
          <button onClick={onCloseMobile} className="md:hidden text-slate-400 hover:text-white">
            <X size={30} />
          </button>
        </div>

        {/* New Chat Button */}
        <div className="p-4">
          <button
            onClick={() => {
              onNewChat();
              onCloseMobile();
            }}
            className="w-full flex items-center gap-2 bg-primary hover:bg-blue-600 text-white py-3 px-4 rounded-xl transition-colors font-medium shadow-lg shadow-blue-900/20"
          >
            <MessageSquarePlus size={20} />
            <span>New Chat</span>
          </button>
        </div>

        {/* History List */}
        <div className="flex-1 overflow-y-auto p-2 space-y-1 custom-scrollbar">
          <div className="px-2 py-1 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Recent Chat
          </div>
          
          {conversations.length === 0 ? (
            <div className="text-center text-slate-500 py-8 text-sm italic">
              No conversations yet.
            </div>
          ) : (
            conversations
              .sort((a, b) => b.updatedAt - a.updatedAt)
              .map((conv) => (
                <div
                  key={conv.id}
                  onClick={() => {
                    onSelectConversation(conv.id);
                    onCloseMobile();
                  }}
                  className={`
                    group relative flex items-center gap-3 px-3 py-3 rounded-lg cursor-pointer transition-all
                    ${activeId === conv.id 
                      ? 'bg-slate-700/50 text-white border border-slate-600/50' 
                      : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'}
                  `}
                >
                  <MessageSquare size={18} className="flex-shrink-0" />
                  <div className="flex-1 truncate text-sm font-medium">
                    {conv.title || "New Conversation"}
                  </div>
                  
                  {/* Delete Button (visible on hover or active) */}
                  <button
                    onClick={(e) => onDeleteChat(conv.id, e)}
                    className={`
                      opacity-0 group-hover:opacity-100 p-1.5 hover:bg-red-500/20 hover:text-red-400 rounded-md transition-all
                      ${activeId === conv.id ? 'opacity-100' : ''}
                    `}
                    title="Delete chat"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
            ))
          )}
        </div>

        {/* Footer / User Profile */}
        <div className="p-4 border-t border-slate-700/50">
           <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 border border-slate-700/30 mb-2">
              {user.avatar ? (
                <img src={user.avatar} alt={user.name} className="w-9 h-9 rounded-full bg-slate-700" />
              ) : (
                <div className="w-9 h-9 rounded-full bg-slate-600 flex items-center justify-center text-sm font-bold text-white">
                  {user.name.charAt(0).toUpperCase()}
                </div>
              )}
              <div className="flex-1 overflow-hidden">
                <div className="text-sm font-medium text-slate-200 truncate">{user.name}</div>
                <div className="text-xs text-slate-500 truncate">{user.email}</div>
              </div>
           </div>
           <button 
             onClick={onLogout}
             className="w-full flex items-center justify-center gap-2 p-2 text-xs font-medium text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
           >
             <LogOut size={14} />
             <span>Sign Out</span>
           </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
