"use client";

import React, { useState, useEffect } from "react";
import { Send, X, MessageCircle } from "lucide-react";

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasNotification, setHasNotification] = useState(true);
  const [userMessage, setUserMessage] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Dismiss notification after 10 seconds automatically if not opened
    const timer = setTimeout(() => {
      setHasNotification(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  if (!isClient) return null;

  const rawNumber = "+61485958620";
  const whatsappNumber = rawNumber.replace(/[^0-9+]/g, "");

  const handleOpenWidget = () => {
    setIsOpen(!isOpen);
    setHasNotification(false);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userMessage.trim()) return;

    const encodedText = encodeURIComponent(userMessage.trim());
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setUserMessage("");
  };

  const handleDirectChat = () => {
    const defaultText = encodeURIComponent("Hello! I am visiting your website and would like to ask a question.");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultText}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div id="whatsapp-support-widget" className="fixed bottom-6 right-6 z-50 font-sans select-none">
      {/* Floating Button */}
      <button
        onClick={handleOpenWidget}
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300 relative group cursor-pointer focus:outline-none"
        aria-label="Chat on WhatsApp"
      >
        {isOpen ? (
          <X className="w-6 h-6 transition-transform rotate-90" />
        ) : (
          <svg
            className="w-7 h-7"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        )}

        {/* Notification Dot */}
        {hasNotification && !isOpen && (
          <span className="absolute top-0 right-0 w-4 h-4 bg-rose-600 rounded-full border-2 border-white flex items-center justify-center text-[8px] font-black animate-bounce text-white">
            1
          </span>
        )}

        {/* Floating Tooltip Label */}
        <span className="absolute right-16 scale-0 group-hover:scale-100 bg-slate-900 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg shadow transition-all duration-200 whitespace-nowrap">
          Live Chat & Order
        </span>
      </button>

      {/* WhatsApp Chat Box */}
      {isOpen && (
        <div id="whatsapp-chat-box" className="absolute bottom-20 right-0 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-300">
          
          {/* Header */}
          <div className="bg-[#075E54] p-5 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-[#128C7E] rounded-full flex items-center justify-center font-bold text-sm tracking-widest border border-[#128C7E] shadow-sm">
                  APM
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-[#075E54]"></span>
              </div>
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider">Aus Prop Money Support</h4>
                <p className="text-[10px] text-emerald-200 mt-0.5 font-medium flex items-center gap-1">
                  <span>●</span> Typically replies in minutes
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-emerald-100 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat area */}
          <div className="p-5 bg-[#ECE5DD] max-h-72 overflow-y-auto flex flex-col gap-4">
            
            {/* Bot Message */}
            <div className="bg-white text-slate-800 p-3.5 rounded-2xl rounded-tl-none text-xs leading-relaxed max-w-[85%] shadow-sm self-start">
              <p className="font-semibold text-slate-400 text-[9px] uppercase tracking-wider mb-1">Support Agent</p>
              Hi there! 👋 Welcome to Aus Prop Money Support.
              <br /><br />
              Need help with a cinema production order, specific polymer denominations, or fast dispatch details? Drop us a line below or tap start chat!
            </div>

            {/* Quick Option */}
            <button
              onClick={handleDirectChat}
              className="bg-white/80 hover:bg-white text-emerald-800 hover:text-emerald-900 border border-emerald-600/20 font-bold text-[10px] py-2 px-3 rounded-xl transition-all self-center flex items-center gap-1 shadow-sm cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Direct Chat on WhatsApp
            </button>

          </div>

          {/* Input & Send Form */}
          <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-slate-100 flex items-center gap-2">
            <input
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              placeholder="Type your question or request..."
              className="flex-1 bg-slate-50 border border-slate-200 text-slate-800 text-xs rounded-xl p-3 focus:outline-none focus:border-emerald-500 focus:bg-white"
            />
            <button
              type="submit"
              disabled={!userMessage.trim()}
              className="w-10 h-10 bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-100 disabled:text-slate-300 text-white rounded-xl flex items-center justify-center transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </div>
  );
}
