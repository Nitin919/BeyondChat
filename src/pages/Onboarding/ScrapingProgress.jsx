



import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { samplePages } from "../../utils/samplePages";
import SoftButton from "../../components/ui/SoftButton";
import { FileSearch2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import toast from "react-hot-toast";

export default function ScrapingProgress() {
  const navigate = useNavigate();
  const [pages, setPages] = useState(samplePages);
  const [selectedPage, setSelectedPage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Prevent scrolling when modal is open
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const handleRefresh = () => {
    toast.info("Refreshing scraping progress... (dummy)");
  };

  const handleNext = () => {
    navigate("/chatbot-integration");
  };

  const handlePageClick = (page) => {
    if (page.status === "scraped") {
      setSelectedPage(page);
      setIsModalOpen(true);
    } else {
      toast.error(
        page.status === "pending"
          ? "This page is still pending scraping."
          : "Failed to scrape this page."
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-3xl bg-card rounded-3xl p-6 shadow-soft space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-display font-bold text-card-foreground">
            Scraping Progress
          </h2>
          <div className="w-14 h-14 rounded-full bg-primary shadow-soft flex items-center justify-center">
            <FileSearch2 className="w-6 h-6 text-white" />
          </div>
        </div>

        <p className="text-sm text-card-foreground">
          We’ve started scraping your website to train the chatbot. Below are the pages detected:
        </p>

        {/* Pages List */}
        <div className="space-y-4">
          <AnimatePresence>
            {pages.map((page) => (
              <motion.div
                key={page.url}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-between bg-card shadow-inner-soft px-4 py-3 rounded-2xl cursor-pointer hover:brightness-95 transition"
                onClick={() => handlePageClick(page)}
              >
                <span className="font-display text-base text-card-foreground">{page.url}</span>
                <StatusBadge status={page.status} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-end">
          <SoftButton variant="secondary" onClick={handleRefresh} whileHover={{ scale: 1.02 }}>
            Refresh
          </SoftButton>
          <SoftButton variant="primary" onClick={handleNext} whileHover={{ scale: 1.02 }}>
            Next
          </SoftButton>
        </div>
      </div>

      {/* Modal for Data Chunks */}
      <AnimatePresence>
        {isModalOpen && selectedPage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-card rounded-3xl p-6 shadow-soft w-full max-w-xl relative space-y-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Close Button */}
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                onClick={() => setIsModalOpen(false)}
              >
                &times;
              </button>

              {/* Modal Header */}
              <h3 className="text-xl font-display font-bold text-card-foreground">Page Content</h3>
              <p className="text-sm text-card-foreground italic">{selectedPage.url}</p>

              {/* Scraped Chunks */}
              <div className="max-h-60 overflow-auto space-y-2">
                {selectedPage.chunks.map((chunk, idx) => (
                  <p key={idx} className="text-sm text-card-foreground">
                    {chunk}
                  </p>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Status Badge Component
function StatusBadge({ status }) {
  const statusColors = {
    scraped: "bg-green-100 text-green-700",
    pending: "bg-yellow-100 text-yellow-700",
    error: "bg-red-100 text-red-700",
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[status] || "bg-gray-100 text-gray-700"}`}>
      {status.toUpperCase()}
    </span>
  );
}
