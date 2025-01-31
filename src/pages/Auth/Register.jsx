



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SoftButton from "../../components/ui/SoftButton";
import { UserPlus, Heart, Video, Globe } from "lucide-react";
import toast from "react-hot-toast";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.password.trim()) newErrors.password = "Password is required.";
    if (formData.password !== formData.confirm)
      newErrors.confirm = "Passwords do not match.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      sessionStorage.setItem("registeredUser", JSON.stringify(formData));
      toast.success("Registration successful! Please login.");
      navigate("/");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-lg bg-card rounded-3xl p-6 shadow-soft space-y-5">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-display font-bold text-card-foreground">
            Register
          </h2>
          <div className="w-14 h-14 rounded-full bg-primary shadow-soft flex items-center justify-center">
            <UserPlus className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {["name", "email", "password", "confirm"].map((field, index) => (
            <div key={index} className="relative">
              <input
                type={field.includes("password") ? "password" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className={`w-full h-12 rounded-full bg-card shadow-inner-soft px-4 font-display text-card-foreground text-base border ${
                  errors[field] ? "border-red-500" : "border-transparent"
                } focus:ring-2 focus:ring-primary outline-none`}
                placeholder=" "
              />
              <label
                className="absolute top-3 left-4 text-gray-500 text-sm transition-all duration-200"
                style={{
                  transform: formData[field] ? "translateY(-22px) scale(0.9)" : "",
                  color: formData[field] ? "#3B82F6" : "",
                }}
              >
                {field === "confirm" ? "Confirm Password" : field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              {errors[field] && (
                <p className="text-sm text-red-500 mt-1">{errors[field]}</p>
              )}
            </div>
          ))}

          <SoftButton
            type="submit"
            className="w-full font-semibold text-lg"
            variant="primary"
            disabled={isSubmitting}
            whileTap={{ scale: 0.95 }}
          >
            {isSubmitting ? "Registering..." : "Register"}
          </SoftButton>
        </form>

        {/* Login Link */}
        <div className="flex justify-center items-center space-x-2">
          <span className="font-display text-sm text-card-foreground">
            Already have an account?
          </span>
          <SoftButton
            variant="secondary"
            size="sm"
            className="font-semibold text-sm"
            onClick={() => navigate("/")}
          >
            Login
          </SoftButton>
        </div>

        {/* Social Logins Placeholder */}
        <div className="w-full bg-secondary/30 h-1 rounded-full" />
        <div className="flex justify-center gap-4">
          {[Heart, Video, Globe].map((Icon, i) => (
            <SoftButton key={i} size="icon" className={i === 0 ? "bg-primary" : ""}>
              <Icon className={`w-5 h-5 ${i === 0 ? "text-white" : "text-primary"}`} />
            </SoftButton>
          ))}
        </div>
      </div>
    </div>
  );
}
