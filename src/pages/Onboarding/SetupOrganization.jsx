


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SoftButton from "../../components/ui/SoftButton";
import { Globe2 } from "lucide-react";
import toast from "react-hot-toast";

export default function SetupOrganization() {
  const navigate = useNavigate();

  const [companyName, setCompanyName] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [description, setDescription] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [error, setError] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  const handleFetchMeta = () => {
    if (!websiteUrl.trim()) {
      setError("Please enter a website URL.");
      return;
    }

    setIsFetching(true);
    setTimeout(() => {
      setMetaDescription(`This is a dummy meta description from ${websiteUrl}`);
      toast.success("Meta description fetched!");
      setIsFetching(false);
    }, 1000);
  };

  const handleContinue = () => {
    if (!companyName.trim() || !websiteUrl.trim() || !description.trim()) {
      setError("All fields are required.");
      return;
    }
    
    navigate("/scraping-progress");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-lg bg-card rounded-3xl p-6 shadow-soft space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-display font-bold text-card-foreground">Organization Setup</h2>
          <div className="w-14 h-14 rounded-full bg-primary shadow-soft flex items-center justify-center">
            <Globe2 className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Input Fields */}
        <div className="space-y-4">
          {[
            { label: "Company Name", value: companyName, setter: setCompanyName },
            { label: "Website URL (e.g. https://example.com)", value: websiteUrl, setter: setWebsiteUrl },
          ].map(({ label, value, setter }, index) => (
            <div key={index} className="relative">
              <input
                type="text"
                value={value}
                onChange={(e) => setter(e.target.value)}
                className={`w-full h-12 rounded-full bg-card shadow-inner-soft px-4 font-display text-card-foreground text-base border ${
                  error && !value ? "border-red-500" : "border-transparent"
                } focus:ring-2 focus:ring-primary outline-none`}
                placeholder=" "
              />
              <label
                className="absolute top-3 left-4 text-gray-500 text-sm transition-all duration-200"
                style={{
                  transform: value ? "translateY(-22px) scale(0.9)" : "",
                  color: value ? "#3B82F6" : "",
                }}
              >
                {label}
              </label>
            </div>
          ))}

          {/* Company Description */}
          <div className="relative">
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={`w-full rounded-2xl bg-card shadow-inner-soft px-4 py-2 font-display text-card-foreground text-base resize-none border ${
                error && !description ? "border-red-500" : "border-transparent"
              } focus:ring-2 focus:ring-primary outline-none`}
              placeholder="Company Description"
            />
          </div>

          {/* Meta Description Input */}
          <div className="relative">
            <input
              type="text"
              value={metaDescription}
              className="w-full h-12 rounded-full bg-secondary/30 px-4 font-display text-card-foreground text-sm cursor-not-allowed"
              readOnly
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-sm text-red-500 text-center">{error}</p>}

          {/* Fetch Meta Description Button */}
          <SoftButton
            variant="secondary"
            onClick={handleFetchMeta}
            className="w-full"
            disabled={isFetching}
          >
            {isFetching ? "Fetching..." : "Auto-Fetch Meta Description"}
          </SoftButton>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <SoftButton
            variant="primary"
            onClick={handleContinue}
            className="flex-1"
            whileHover={{ scale: 1.02 }}
          >
            Continue
          </SoftButton>
          <SoftButton
            variant="secondary"
            onClick={() => toast.info("This is a dummy informational message.")}
            className="flex-1"
          >
            Information
          </SoftButton>
        </div>
      </div>
    </div>
  );
}
