"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, CreditCard, ChevronRight, Truck, Info, ShieldCheck, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, cartSubtotal, clearCart } = useCart();

  // Redirect if cart is empty (only run on client side after component mounts)
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Form State
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  
  const [country, setCountry] = useState("Australia");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const [shippingMethod, setShippingMethod] = useState("Normal Shipping");
  const [paymentMethod, setPaymentMethod] = useState("Bitcoin (BTC)");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Determine shipping cost based on shipping method selection
  const getShippingCost = () => {
    if (shippingMethod === "Express Shipping") return 65;
    if (shippingMethod === "International Shipping") return 45;
    return 20; // Normal Shipping
  };

  const shippingCost = getShippingCost();
  const totalAmount = cartSubtotal + shippingCost;

  // Form Submission Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (items.length === 0) {
      setErrorMessage("Your cart is empty. Please add items before checking out.");
      return;
    }

    // Validation
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !phone.trim()) {
      setErrorMessage("Please fill in all customer information fields.");
      return;
    }

    if (!country.trim() || !state.trim() || !city.trim() || !address.trim() || !postalCode.trim()) {
      setErrorMessage("Please fill in all shipping address fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          country,
          state,
          city,
          address,
          apartment,
          postalCode,
          shippingMethod,
          shippingCost,
          paymentMethod,
          items, // Pass full items list
          total: totalAmount,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        if (paymentMethod === "WhatsApp") {
          const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+447341056054";
          const whatsappNumber = rawNumber.replace(/[^0-9+]/g, "");
          const itemsText = items.map(item => `- ${item.product.name} (${item.variation.name}) x ${item.quantity} - $${(item.variation.price * item.quantity).toFixed(2)}`).join("\n");
          
          const messageText = `Hello! I have just placed a cinema prop order on your website.\n\n*Order Number*: ${data.orderNumber}\n*Items*:\n${itemsText}\n\n*Subtotal*: $${cartSubtotal.toFixed(2)} AUD\n*Shipping* (${shippingMethod}): $${shippingCost.toFixed(2)} AUD\n*Grand Total*: $${totalAmount.toFixed(2)} AUD\n\n*Customer Info*:\nName: ${firstName} ${lastName}\nPhone: ${phone}\nEmail: ${email}\n\n*Shipping Address*:\n${address}${apartment ? `, ${apartment}` : ""}, ${city}, ${state}, ${postalCode}, ${country}\n\nI would like to complete my payment and order confirmation via WhatsApp!`;
          
          window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`, "_blank", "noopener,noreferrer");
        }

        // Clear cart and redirect
        clearCart();
        router.push(`/checkout/success?orderNumber=${data.orderNumber}`);
      } else {
        setErrorMessage(data.error || "An error occurred during order submission. Please try again.");
        setIsSubmitting(false);
      }
    } catch (err) {
      console.error("Submission error", err);
      setErrorMessage("Unable to connect to checkout server. Please try again later.");
      setIsSubmitting(false);
    }
  };

  // If loading or server-side rendering, return simple card
  if (!isClient) {
    return (
      <div className="py-24 bg-slate-50 min-h-screen flex items-center justify-center">
        <div className="text-slate-500 font-semibold text-sm">Loading checkout...</div>
      </div>
    );
  }

  // Redirect if empty cart on client
  if (items.length === 0) {
    return (
      <div id="empty-checkout-page" className="py-24 bg-slate-50 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-md w-full bg-white border border-slate-200 rounded-2xl p-8 text-center shadow-sm">
          <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-slate-100">
            <ShoppingBag className="w-8 h-8 text-slate-300" />
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">Checkout is Unavailable</h2>
          <p className="text-slate-500 text-xs leading-relaxed mb-6">
            Your shopping cart is currently empty. Re-examine our prop collections and add banknotes to checkout.
          </p>
          <Link
            href="/#shop"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg text-xs uppercase tracking-wider transition-colors"
          >
            Explore Banknotes
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div id="checkout-flow-page" className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-8">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
          <Link href="/product/buy-prop-money-new-5-australian-dollar-notes" className="hover:text-emerald-600 transition-colors">Product</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
          <span className="text-slate-900 font-semibold">One-Page Checkout</span>
        </div>

        <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight uppercase mb-8">
          Secure Checkout
        </h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form Sections (8 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Error Message Panel */}
            {errorMessage && (
              <div id="checkout-error-banner" className="bg-rose-50 border border-rose-200 text-rose-800 p-4 rounded-xl text-xs font-semibold">
                {errorMessage}
              </div>
            )}

            {/* Section 1: Customer Information */}
            <div id="customer-info-section" className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h2 className="font-bold text-sm uppercase text-slate-800 border-b border-slate-100 pb-4 mb-5 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">1</span>
                Customer Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1.5">First Name *</label>
                  <input
                    id="firstName"
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter first name"
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-xs rounded-lg p-3 focus:outline-none focus:border-emerald-500 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1.5">Last Name *</label>
                  <input
                    id="lastName"
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Enter last name"
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-xs rounded-lg p-3 focus:outline-none focus:border-emerald-500 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1.5">Email Address *</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-xs rounded-lg p-3 focus:outline-none focus:border-emerald-500 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1.5">Phone Number *</label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +61 400 123 456"
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-xs rounded-lg p-3 focus:outline-none focus:border-emerald-500 focus:bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Shipping Address */}
            <div id="shipping-address-section" className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h2 className="font-bold text-sm uppercase text-slate-800 border-b border-slate-100 pb-4 mb-5 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">2</span>
                Shipping Address
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1.5">Country *</label>
                  <select
                    id="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-xs rounded-lg p-3 focus:outline-none focus:border-emerald-500 focus:bg-white cursor-pointer font-semibold"
                  >
                    <option value="Australia">Australia</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Canada">Canada</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1.5">Street Address *</label>
                  <input
                    id="address"
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Street address, P.O. Box"
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-xs rounded-lg p-3 focus:outline-none focus:border-emerald-500 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1.5">Apartment, suite, unit etc. (Optional)</label>
                  <input
                    id="apartment"
                    type="text"
                    value={apartment}
                    onChange={(e) => setApartment(e.target.value)}
                    placeholder="Apartment, suite, etc."
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-xs rounded-lg p-3 focus:outline-none focus:border-emerald-500 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1.5">City *</label>
                  <input
                    id="city"
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="City"
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-xs rounded-lg p-3 focus:outline-none focus:border-emerald-500 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1.5">State / Province *</label>
                  <input
                    id="state"
                    type="text"
                    required
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    placeholder="State or Province"
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-xs rounded-lg p-3 focus:outline-none focus:border-emerald-500 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1.5">Postal Code *</label>
                  <input
                    id="postalCode"
                    type="text"
                    required
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    placeholder="Postcode"
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-xs rounded-lg p-3 focus:outline-none focus:border-emerald-500 focus:bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Section 3: Shipping Method */}
            <div id="shipping-method-section" className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h2 className="font-bold text-sm uppercase text-slate-800 border-b border-slate-100 pb-4 mb-5 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">3</span>
                Shipping Method
              </h2>
              <div className="grid grid-cols-1 gap-3">
                
                {/* Option 1: Express */}
                <button
                  id="shipping-express-btn"
                  type="button"
                  onClick={() => setShippingMethod("Express Shipping")}
                  className={`p-4 rounded-xl border text-left flex justify-between items-center transition-all cursor-pointer ${
                    shippingMethod === "Express Shipping"
                      ? "border-emerald-600 bg-emerald-50/50 text-emerald-950 ring-2 ring-emerald-600/10"
                      : "border-slate-200 bg-white hover:border-slate-300 text-slate-700"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Truck className="w-5 h-5 text-emerald-600 shrink-0" />
                    <div>
                      <span className="font-bold text-xs block">Express Shipping</span>
                      <span className="text-[10px] text-slate-400 block mt-0.5">Delivery Time: 24 Hours</span>
                    </div>
                  </div>
                  <span className="font-extrabold text-sm text-slate-900">AUD $65.00</span>
                </button>

                {/* Option 2: Normal */}
                <button
                  id="shipping-normal-btn"
                  type="button"
                  onClick={() => setShippingMethod("Normal Shipping")}
                  className={`p-4 rounded-xl border text-left flex justify-between items-center transition-all cursor-pointer ${
                    shippingMethod === "Normal Shipping"
                      ? "border-emerald-600 bg-emerald-50/50 text-emerald-950 ring-2 ring-emerald-600/10"
                      : "border-slate-200 bg-white hover:border-slate-300 text-slate-700"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Truck className="w-5 h-5 text-slate-400 shrink-0" />
                    <div>
                      <span className="font-bold text-xs block">Normal Shipping</span>
                      <span className="text-[10px] text-slate-400 block mt-0.5">Delivery Time: 3–5 Days</span>
                    </div>
                  </div>
                  <span className="font-extrabold text-sm text-slate-900">AUD $20.00</span>
                </button>

                {/* Option 3: International */}
                <button
                  id="shipping-intl-btn"
                  type="button"
                  onClick={() => setShippingMethod("International Shipping")}
                  className={`p-4 rounded-xl border text-left flex justify-between items-center transition-all cursor-pointer ${
                    shippingMethod === "International Shipping"
                      ? "border-emerald-600 bg-emerald-50/50 text-emerald-950 ring-2 ring-emerald-600/10"
                      : "border-slate-200 bg-white hover:border-slate-300 text-slate-700"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Truck className="w-5 h-5 text-slate-400 shrink-0" />
                    <div>
                      <span className="font-bold text-xs block">International Shipping</span>
                      <span className="text-[10px] text-slate-400 block mt-0.5">Delivery Time: 5–10 Days</span>
                    </div>
                  </div>
                  <span className="font-extrabold text-sm text-slate-900">AUD $45.00</span>
                </button>

              </div>
            </div>

            {/* Section 4: Payment Method */}
            <div id="payment-method-section" className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm select-none">
              <h2 className="font-bold text-sm uppercase text-slate-800 border-b border-slate-100 pb-4 mb-5 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">4</span>
                Payment Method
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-6">
                
                {["Bitcoin (BTC)", "USDT", "Ethereum (ETH)", "PayID", "WhatsApp"].map((pMethod) => (
                  <button
                    key={pMethod}
                    type="button"
                    onClick={() => setPaymentMethod(pMethod)}
                    className={`p-4 rounded-xl border text-center font-bold text-xs transition-all flex flex-col items-center gap-2 cursor-pointer ${
                      paymentMethod === pMethod
                        ? pMethod === "WhatsApp"
                          ? "border-emerald-500 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-500/10"
                          : "border-emerald-600 bg-emerald-50/50 text-emerald-950 ring-2 ring-emerald-600/10"
                        : "border-slate-200 bg-white hover:border-slate-300 text-slate-500"
                    }`}
                  >
                    {pMethod === "WhatsApp" ? (
                      <svg className={`w-5 h-5 ${paymentMethod === pMethod ? "text-[#25D366]" : "text-slate-400"}`} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    ) : (
                      <CreditCard className={`w-5 h-5 ${paymentMethod === pMethod ? "text-emerald-600" : "text-slate-400"}`} />
                    )}
                    <span>{pMethod}</span>
                  </button>
                ))}

              </div>

              {/* Informational Notification */}
              <div id="payment-instruction-banner" className="bg-amber-50 border border-amber-200 text-amber-950 rounded-xl p-4 flex gap-3 text-xs leading-relaxed">
                <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  {paymentMethod === "WhatsApp" ? (
                    <>
                      <strong>WHATSAPP CHECKOUT:</strong> You will be instantly redirected to WhatsApp to secure payment instruction details with our media relations specialists. Your order proposal will be logged in parallel!
                    </>
                  ) : (
                    <>
                      <strong>NOTICE:</strong> Payment instructions will be emailed to you after we review your order. Please do not send payment until you receive those instructions.
                    </>
                  )}
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Order Summary (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div id="order-summary-card" className="bg-slate-900 text-white rounded-2xl border border-slate-800 p-6 md:p-8 shadow-xl">
              <h3 className="font-bold text-sm uppercase text-white border-b border-slate-800 pb-4 mb-6 flex items-center gap-2">
                <ShoppingBag className="w-4.5 h-4.5 text-emerald-500" />
                Order Summary
              </h3>

              {/* Items List */}
              <div className="flex flex-col gap-5 max-h-96 overflow-y-auto mb-6 pr-2">
                {items.map((item, idx) => (
                  <div key={`${item.product.id}-${idx}`} className="flex justify-between gap-4 items-center text-xs">
                    <div className="flex gap-3 items-center min-w-0">
                      <div className="relative w-12 h-9 bg-slate-800 rounded border border-slate-700/50 overflow-hidden shrink-0 flex items-center justify-center">
                        {item.product.image ? (
                          <Image
                            src={item.product.image}
                            alt={item.product.name}
                            fill
                            sizes="48px"
                            className="object-cover"
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          <span className="text-[9px] font-bold text-slate-500">PROP</span>
                        )}
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-bold text-white leading-snug truncate">{item.product.name}</h4>
                        <p className="text-[10px] text-slate-400 mt-0.5">{item.variation.name} &bull; Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <span className="font-extrabold text-slate-200 shrink-0">
                      ${(item.variation.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Pricing breakdown */}
              <div className="border-t border-slate-800 pt-6 flex flex-col gap-3.5 text-xs text-slate-400">
                <div className="flex justify-between">
                  <span>Cart Subtotal</span>
                  <span className="font-bold text-white">${cartSubtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping Cost ({shippingMethod})</span>
                  <span className="font-bold text-white">${shippingCost.toFixed(2)}</span>
                </div>
                <div className="flex justify-between border-t border-slate-800 pt-4 text-sm">
                  <span className="font-semibold text-slate-300">Grand Total (AUD)</span>
                  <span className="font-black text-emerald-500 text-lg">${totalAmount.toFixed(2)}</span>
                </div>
              </div>

              {/* Security Badge */}
              <div className="my-6 p-4 bg-slate-950/60 border border-slate-800 rounded-xl flex items-center gap-3 text-[10px] text-slate-400 leading-relaxed select-none">
                <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>
                  Our cinema order pipeline is protected with end-to-end industry-grade encryption. No credit card records are stored.
                </span>
              </div>

              {/* Submit Button */}
              <button
                id="submit-checkout-btn"
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-bold py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 text-xs uppercase tracking-wider shadow-lg cursor-pointer ${
                  paymentMethod === "WhatsApp"
                    ? "bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-emerald-950/20"
                    : "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-950/30"
                } disabled:bg-slate-700 disabled:cursor-not-allowed border-0`}
              >
                {isSubmitting ? (
                  <span>
                    {paymentMethod === "WhatsApp" ? "Opening WhatsApp..." : "Logging Order Proposal..."}
                  </span>
                ) : (
                  <>
                    {paymentMethod === "WhatsApp" ? (
                      <>
                        <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        <span>Send Order via WhatsApp</span>
                      </>
                    ) : (
                      <>
                        <Mail className="w-4 h-4" />
                        <span>Submit Order for Review</span>
                      </>
                    )}
                  </>
                )}
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
}
