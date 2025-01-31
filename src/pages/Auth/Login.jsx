import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SoftButton from "../../components/ui/SoftButton";
import { LogIn, Heart, Video, Globe } from "lucide-react";
import toast from "react-hot-toast";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.password.trim()) newErrors.password = "Password is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const storedUserJSON = sessionStorage.getItem("registeredUser");
      if (!storedUserJSON) {
        toast.error("No user found. Please register first.");
        setIsSubmitting(false);
        return;
      }

      const storedUser = JSON.parse(storedUserJSON);
      if (storedUser.email === formData.email && storedUser.password === formData.password) {
        toast.success("Login successful!");
        navigate("/verify-email");
      } else {
        toast.error("Invalid credentials!");
        setIsSubmitting(false);
      }
    }, 1000);
  };

  const handleGoogleLogin = () => {
    toast.success("Google OAuth (dummy)!");
    navigate("/verify-email");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-card rounded-3xl p-6 shadow-soft space-y-5">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-display font-bold text-card-foreground">Login</h2>
          <div className="w-14 h-14 rounded-full bg-primary shadow-soft flex items-center justify-center">
            <LogIn className="w-7 h-7 text-white" />
          </div>
        </div>

        {/* Google Login Button */}
        <SoftButton
          variant="primary"
          className="w-full transition transform hover:scale-105"
          onClick={handleGoogleLogin}
        >
          Continue with Google (dummy)
        </SoftButton>

        {/* Divider */}
        <div className="flex items-center justify-center space-x-2">
          <div className="h-px w-full bg-secondary/40"></div>
          <span className="text-sm text-card-foreground">OR</span>
          <div className="h-px w-full bg-secondary/40"></div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          {["email", "password"].map((field, index) => (
            <div key={index} className="relative">
              <input
                type={field === "password" ? "password" : "email"}
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
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              {errors[field] && <p className="text-sm text-red-500 mt-1">{errors[field]}</p>}
            </div>
          ))}

          <SoftButton
            type="submit"
            variant="primary"
            className="w-full"
            disabled={isSubmitting}
            whileTap={{ scale: 0.95 }}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </SoftButton>
        </form>

        {/* Register Link */}
        <div className="flex justify-center items-center space-x-2">
          <span className="font-display text-sm text-card-foreground">Don’t have an account?</span>
          <SoftButton
            variant="secondary"
            size="sm"
            className="font-semibold text-sm"
            onClick={() => navigate("/register")}
          >
            Register
          </SoftButton>
        </div>

        {/* Decorative Icons */}
        <div className="w-full bg-secondary/30 h-1 rounded-full" />
        <div className="flex justify-center gap-4">
          {[Heart, Video, Globe].map((Icon, i) => (
            <SoftButton key={i} size="icon" className="bg-gray-200">
              <Icon className="w-6 h-6 text-gray-700" />
            </SoftButton>
          ))}
        </div>
      </div>
    </div>
  );
}
