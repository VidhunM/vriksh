import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = async () => {
    if (!email) {
      setStatus({ type: "error", message: "Enter email" });
      setTimeout(() => setStatus({ type: "", message: "" }), 3000);
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus({ type: "error", message: "Invalid email" });
      setTimeout(() => setStatus({ type: "", message: "" }), 3000);
      return;
    }

    setSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      // Using the Apps Script URL found in other components
      await fetch("https://script.google.com/macros/s/AKfycbzW_SiU9dn0WvNImeJQOg3K2bAPGFov-xpYlxo1L8pYOjbvw9b2HdFnkpgtjM32Ho-zDA/exec", {
        method: "POST",
        mode: "no-cors", // Required for Google Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          type: "newsletter", // Added to help backend identify the source
          sheetName: "newsletter" // To match the pattern in other forms
        }),
      });

      // With mode: 'no-cors', we can't read the response body, but usually if it doesn't throw, it's fine.
      setStatus({ type: "success", message: "Subscribed!" });
      setEmail("");
      setTimeout(() => setStatus({ type: "", message: "" }), 5000);

    } catch (err) {
      console.error("Newsletter submission error:", err);
      setStatus({ type: "error", message: "Error. Try again." });
      setTimeout(() => setStatus({ type: "", message: "" }), 5000);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-[12px] font-bold tracking-wide uppercase text-white/90 md:text-base md:font-semibold md:normal-case md:text-white whitespace-nowrap">
        Subscribe to our newsletter
      </h3>

      <div className="space-y-2">
        <div className="bg-transparent border border-white/40 rounded-xl p-1.5 flex items-center max-w-[280px] w-full">
          <input
            type="email"
            placeholder="Your Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent border-none outline-none px-3 py-2 md:py-1 text-[13px] md:text-sm w-full placeholder:text-white/40 text-white font-light"
            disabled={submitting}
          />

          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="bg-white text-[#520378] w-10 h-10 md:w-9 md:h-9 flex items-center justify-center rounded-lg hover:scale-105 active:scale-95 transition-all flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            aria-label="Subscribe"
          >
            {submitting ? (
              <div className="w-4 h-4 border-2 border-[#520378] border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <ArrowUpRight size={20} />
            )}
          </button>
        </div>
        
        {status.message && (
          <p className={`text-[11px] md:text-xs font-medium px-2 animate-fade-in ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
            {status.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
