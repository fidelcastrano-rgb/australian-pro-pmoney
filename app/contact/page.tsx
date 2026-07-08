"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, AlertTriangle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    inquiryType: "General Order Question",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const rawNumber = "+61485958620";
  const whatsappNumber = rawNumber.replace(/[^0-9+]/g, "");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const data = await response.json();
        setErrorMsg(data.error || "Failed to submit your inquiry. Please try again.");
      }
    } catch (err) {
      console.error("Submission Error:", err);
      setErrorMsg("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppContact = () => {
    const messageText = `Hello! I would like to inquire with the master printer office regarding prop currency replication.\n\n*My Name*: ${formData.name || "Cinema Director"}\n*Company*: ${formData.company || "Independent Studio"}\n*Inquiry*: ${formData.inquiryType}\n\n*Message*: ${formData.message || "I want to arrange a custom currency print job."}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div id="contact-page" className="bg-slate-50 min-h-screen text-slate-800">
      {/* Page Header */}
      <section className="bg-slate-950 text-white py-16 px-6 md:px-10 text-center select-none">
        <div className="max-w-4xl mx-auto">
          <span className="text-amber-500 font-mono text-xs uppercase tracking-widest bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full inline-block mb-3">
            Press Relations
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4 uppercase italic">
            Contact Our Press Office
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Connect directly with our master currency printers to arrange custom film print runs, volume bundles, or secure regulatory compliance audits.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Info Card */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-900 text-white rounded-2xl p-8 border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl"></div>
              
              <h2 className="font-extrabold text-xl uppercase tracking-tight mb-6 text-amber-500 italic">
                Office Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-emerald-500 shrink-0 border border-slate-700">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-slate-400 uppercase tracking-wider">Secure Email</h4>
                    <p className="text-sm text-slate-100 font-medium mt-1">order@australianpropmoney.com.au</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-emerald-500 shrink-0 border border-slate-700">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-slate-400 uppercase tracking-wider">Direct WhatsApp Line</h4>
                    <p className="text-sm text-slate-100 font-medium mt-1">+61 485 958 620</p>
                  </div>
                </div>
              </div>

              {/* Secure Notice */}
              <div className="mt-8 border-t border-slate-800 pt-6 flex items-start gap-3 text-slate-400 text-[11px] leading-relaxed">
                <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <p>
                  <strong>Certified Registry Note:</strong> All client communications and custom print plates are held under high security lock protocols. We never release cinematic transaction telemetry to third-party entities.
                </p>
              </div>
            </div>

            {/* Quick WhatsApp Connect */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center shadow-sm">
              <MessageSquare className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
              <h3 className="font-extrabold text-slate-900 text-sm uppercase tracking-tight">
                Need Instant Help?
              </h3>
              <p className="text-slate-600 text-xs mt-1 leading-relaxed mb-4">
                Chat live on WhatsApp with our media print operators to secure instant confirmation of custom orders or shipping routing.
              </p>
              <button
                onClick={handleWhatsAppContact}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs tracking-wider uppercase py-2.5 px-4 rounded-lg transition-colors border border-emerald-700 shadow-sm flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open Instant WhatsApp Chat</span>
              </button>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            {isSubmitted ? (
              <div id="contact-success-state" className="text-center py-16 space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 uppercase italic tracking-tight">
                  Inquiry Dispatched Successfully
                </h3>
                <p className="text-slate-500 text-xs max-w-md mx-auto leading-relaxed">
                  Your certified prop money printing request has been securely logged. Our compliance and press specialists will respond within 2-4 hours.
                </p>
                <div className="pt-6">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        company: "",
                        inquiryType: "General Order Question",
                        message: "",
                      });
                    }}
                    className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase py-2.5 px-6 rounded-lg transition-colors tracking-wider"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="font-extrabold text-xl text-slate-900 uppercase tracking-tight italic mb-2">
                  Direct Secure Inquiry Form
                </h2>
                <div className="w-12 h-1 bg-amber-500 rounded-full mb-6"></div>

                {errorMsg && (
                  <div className="bg-red-50 text-red-600 border border-red-200 text-xs p-3 rounded-lg mb-4">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. Rupert Thorne"
                      className="w-full border border-slate-200 rounded-lg p-3 text-xs focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 outline-none bg-slate-50 focus:bg-white transition-colors text-slate-800 font-medium"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase mb-2">
                      Secure Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. rupert@warnerbros.com"
                      className="w-full border border-slate-200 rounded-lg p-3 text-xs focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 outline-none bg-slate-50 focus:bg-white transition-colors text-slate-800 font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-xs font-bold text-slate-700 uppercase mb-2">
                      Production Studio / Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="e.g. Village Roadshow"
                      className="w-full border border-slate-200 rounded-lg p-3 text-xs focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 outline-none bg-slate-50 focus:bg-white transition-colors text-slate-800 font-medium"
                    />
                  </div>

                  <div>
                    <label htmlFor="inquiryType" className="block text-xs font-bold text-slate-700 uppercase mb-2">
                      Inquiry Category
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full border border-slate-200 rounded-lg p-3 text-xs focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 outline-none bg-slate-50 focus:bg-white transition-colors text-slate-800 font-medium"
                    >
                      <option value="General Order Question">General Order Question</option>
                      <option value="Large Production Order">Large Production Order (Volume)</option>
                      <option value="Custom Currency Press">Custom Currency Press Request</option>
                      <option value="Compliance Verification">Compliance & Legal Audit</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase mb-2">
                    Inquiry Details & Specifications *
                    <span className="text-slate-400 font-normal lowercase italic ml-1">
                      (specify currency value, stack count, or event deadline)
                    </span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder="Provide exact details for your prop printing requirement..."
                    className="w-full border border-slate-200 rounded-lg p-3 text-xs focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 outline-none bg-slate-50 focus:bg-white transition-colors text-slate-800 font-medium leading-relaxed"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-400 text-white font-extrabold text-xs tracking-wider uppercase py-3.5 px-6 rounded-lg transition-colors border border-slate-950 flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? "Dispatching..." : "Send Secure Dispatch"}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppContact}
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs tracking-wider uppercase py-3.5 px-6 rounded-lg transition-colors border border-emerald-700 flex items-center justify-center gap-2 shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Open in WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
