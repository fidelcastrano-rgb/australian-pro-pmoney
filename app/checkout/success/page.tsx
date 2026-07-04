"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle, ArrowRight, ShieldAlert, Mail } from "lucide-react";
import Link from "next/link";

function SuccessContent() {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("orderNumber") || "APM-XXXXXX";

  return (
    <div id="checkout-success-view" className="max-w-xl w-full bg-white border border-slate-200 rounded-2xl p-8 md:p-10 shadow-lg text-center animate-in fade-in zoom-in-95 duration-300">
      <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="w-10 h-10 text-emerald-600" />
      </div>

      <span className="text-emerald-600 font-bold text-xs uppercase tracking-widest mb-2 block">
        Order Placed Successfully
      </span>
      <h1 className="text-2xl font-black text-slate-900 tracking-tight uppercase mb-4">
        Thank You For Your Order!
      </h1>

      <p className="text-slate-500 text-xs leading-relaxed mb-6">
        Your cinematic prop banknote order proposal has been received and is currently being audited by our legal compliance department.
      </p>

      {/* Order Number Badge */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-6">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Your Order Number</span>
        <span id="order-number-display" className="text-2xl font-black text-emerald-600 tracking-wider block mt-1">
          {orderNumber}
        </span>
        <span className="text-[10px] text-slate-500 block mt-2">
          An automated order summary and review alert has been sent to your email address.
        </span>
      </div>

      {/* Instructions Card */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-left mb-8">
        <h4 className="font-bold text-amber-800 text-xs uppercase mb-3 flex items-center gap-1.5 select-none">
          <ShieldAlert className="w-4 h-4 text-amber-600" />
          Next Steps & Review Instructions
        </h4>
        <ul className="text-[11px] text-amber-950 flex flex-col gap-3.5 leading-relaxed">
          <li className="flex gap-2">
            <span className="text-amber-600 font-bold">1.</span>
            <span>We are auditing your items for compliance with federal replication standards.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-amber-600 font-bold">2.</span>
            <span>Once approved, <strong>our support team will email you detailed payment invoices and address instructions</strong> for your chosen payment method.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-amber-600 font-bold">3.</span>
            <span className="font-bold">CRITICAL: Please do not attempt to send any funds or cryptocurrency until you receive that follow-up instruction email!</span>
          </li>
        </ul>
      </div>

      {/* Action Links */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/"
          className="flex-1 bg-slate-950 hover:bg-slate-900 text-white font-bold py-3.5 px-6 rounded-lg text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
        >
          Return to Home
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <a
          href="https://mail.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-bold py-3.5 px-6 rounded-lg text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
        >
          <Mail className="w-4 h-4 text-slate-400" />
          Open Your Mail
        </a>
      </div>
    </div>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <div className="py-20 bg-slate-50 min-h-screen flex items-center justify-center px-6">
      <Suspense fallback={
        <div className="text-slate-500 font-semibold text-sm">Loading order details...</div>
      }>
        <SuccessContent />
      </Suspense>
    </div>
  );
}
