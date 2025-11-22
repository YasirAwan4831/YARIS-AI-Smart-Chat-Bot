import React, { useState, useRef, useEffect } from 'react';
import { Send, Loader2 } from 'lucide-react';

interface InputAreaProps {
  onSendMessage: (text: string) => void;
  disabled: boolean;
}

const InputArea: React.FC<InputAreaProps> = ({ onSendMessage, disabled }) => {
  const [input, setInput] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 150) + 'px';
    }
  }, [input]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (!input.trim() || disabled) return;
    onSendMessage(input);
    setInput('');
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  return (
    <div className="w-full bg-background/95 backdrop-blur-sm border-t border-slate-700/50 p-4 pb-6 md:pb-6">
      <div className="max-w-4xl mx-auto relative flex items-end gap-2 bg-surface border border-slate-600/50 rounded-2xl p-2 shadow-xl shadow-black/10 focus-within:ring-2 focus-within:ring-primary/50 transition-all">
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Chat With YARIS AI...."
          disabled={disabled}
          rows={1}
          className="flex-1 bg-transparent border-none focus:ring-0 text-slate-100 placeholder:text-slate-500 resize-none py-3 px-2 max-h-[150px] overflow-y-auto custom-scrollbar"
          style={{ minHeight: '48px' }}
        />
        <button
          onClick={handleSubmit}
          disabled={!input.trim() || disabled}
          className={`
            flex-shrink-0 p-3 rounded-xl transition-all duration-200
            ${!input.trim() || disabled 
              ? 'bg-slate-700 text-slate-500 cursor-not-allowed' 
              : 'bg-primary text-white hover:bg-blue-600 shadow-lg shadow-blue-500/20'}
          `}
        >
          {disabled ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
        </button>
      </div>
      <div className="text-center mt-2">
         <p className="text-[10px] text-slate-500">
            YARIS AI can make mistakes. Check important info.
         </p>
      </div>
    </div>
  );
};

export default InputArea;