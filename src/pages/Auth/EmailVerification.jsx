



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SoftButton from "../../components/ui/SoftButton";
import { MailCheck } from "lucide-react";
import toast from "react-hot-toast";

export default function EmailVerification() {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleVerify = (e) => {
    e.preventDefault();
    setError("");

    if (!code.trim()) {
      setError("Please enter the verification code.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      if (code === "123456") {
        toast.success("Email verified successfully!");
        setTimeout(() => navigate("/setup-organization"), 1000);
      } else {
        setError("Invalid verification code.");
        toast.error("Invalid code. Please try again.");
        setIsSubmitting(false);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-lg bg-card rounded-3xl p-6 shadow-soft space-y-5">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-display font-bold text-card-foreground">Verify Your Email</h2>
          <div className="w-14 h-14 rounded-full bg-primary shadow-soft flex items-center justify-center">
            <MailCheck className="w-6 h-6 text-white" />
          </div>
        </div>

        <p className="text-sm text-card-foreground">
          We’ve sent a 6-digit code to your email. Please enter it below:
        </p>

        {/* Verification Form */}
        <form onSubmit={handleVerify} className="space-y-4">
          <div className="relative">
            <input
              type="text"
              className={`w-full h-12 rounded-full bg-card shadow-inner-soft px-4 text-lg text-center font-display text-card-foreground border ${
                error ? "border-red-500" : "border-transparent"
              } focus:ring-2 focus:ring-primary outline-none`}
              placeholder="Enter 6-digit code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              disabled={isSubmitting}
            />
            {error && <p className="text-sm text-red-500 mt-1 text-center">{error}</p>}
          </div>

          <SoftButton type="submit" variant="primary" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Verifying..." : "Verify"}
          </SoftButton>
        </form>

        {/* Resend Code Button */}
        <div className="flex justify-center">
          <button
            className="text-primary text-sm hover:underline"
            onClick={() => toast.info("A new verification code has been sent!")}
          >
            Resend Code
          </button>
        </div>
      </div>
    </div>
  );
}
