



import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import toast from "react-hot-toast"; // ✅ Modern toast notifications

const FeedbackModal = ({ onClose }) => {
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!feedback.trim()) {
      toast.error("Please enter some feedback.");
      return;
    }

    setIsSubmitting(true); // Disable button while "submitting"

    // Simulating API call delay (optional)
    setTimeout(() => {
      console.log("Feedback submitted:", feedback);
      toast.success("Thank you for your feedback!");
      setIsSubmitting(false);
      onClose();
    }, 1200);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="relative w-full max-w-md bg-card rounded-3xl p-6 shadow-soft"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Close Button */}
          <button
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            onClick={onClose}
            aria-label="Close feedback modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title */}
          <h3 className="text-lg font-display font-bold text-card-foreground mb-4">
            Share Your Feedback
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Let us know how we can improve BeyondChats.
          </p>

          {/* Feedback Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea
              className="w-full h-24 rounded-2xl bg-secondary text-card-foreground shadow-inner-soft p-3 text-sm outline-none resize-none focus:ring-2 focus:ring-primary"
              placeholder="Describe the issue or feedback..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              disabled={isSubmitting}
            />
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                className="bg-secondary text-card-foreground rounded-full px-4 py-2 shadow-soft hover:bg-gray-300 transition"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className={`rounded-full px-4 py-2 shadow-soft transition ${
                  isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-primary text-white hover:bg-primary/90"
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FeedbackModal;
