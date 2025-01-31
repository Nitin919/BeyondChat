// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { AnimatePresence, motion } from "framer-motion";
// import  SoftButton  from "../../components/ui/SoftButton";
// import { CheckCircle, MessageSquare, Zap } from "lucide-react";

// export default function Landing() {
//   const navigate = useNavigate();
//   // State to control exit animation
//   const [exiting, setExiting] = useState(false);

//   const handleGetStarted = () => {
//     // Trigger the exit animation
//     setExiting(true);
//     // After animation finishes (0.5s), navigate away
//     setTimeout(() => {
//       navigate("/"); // or "/register" if you'd prefer
//     }, 500);
//   };

//   return (
//     // AnimatePresence will handle exit transitions
//     <AnimatePresence>
//       {!exiting && (
//         <motion.div
//           key="landing"
//           className="min-h-screen w-full bg-hero-gradient flex flex-col"
//           initial={{ opacity: 1 }}
//           exit={{ opacity: 0, y: -40 }}
//           transition={{ duration: 0.5, ease: "easeInOut" }}
//         >
//           {/* NAV / TOPBAR (optional) */}
//           <nav className="flex items-center justify-between p-6">
//             <motion.div
//               className="text-white text-2xl font-bold cursor-pointer"
//               initial={{ opacity: 0, x: -30 }}
//               animate={{ opacity: 1, x: 0 }}
//             >
//               BeyondChats
//             </motion.div>

//             <motion.button
//               onClick={() => navigate("/")} // or "/login"
//               initial={{ opacity: 0, x: 30 }}
//               animate={{ opacity: 1, x: 0 }}
//               className="text-white underline"
//             >
//               Login
//             </motion.button>
//           </nav>

//           {/* HERO SECTION */}
//           <div className="flex-1 flex flex-col-reverse md:flex-row items-center justify-center max-w-6xl mx-auto px-6 md:py-12">
//             {/* LEFT COLUMN: HEADINGS & CTA */}
//             <motion.div
//               className="md:w-1/2 flex flex-col space-y-6 mt-8 md:mt-0"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
//                 Supercharge Your Customer Engagement with BeyondChats
//               </h1>
//               <p className="text-white text-sm md:text-base max-w-lg">
//                 Our AI-powered chatbot helps you deliver instant support, 
//                 generate leads, and increase conversions—without writing a single line of code.
//               </p>

//               <div className="flex items-center space-x-4">
//                 <SoftButton
//                   variant="primary"
//                   className="text-base px-6 py-3"
//                   onClick={handleGetStarted}
//                 >
//                   Get Started
//                 </SoftButton>
//                 <button
//                   onClick={() => navigate("/")}
//                   className="underline text-white text-base"
//                 >
//                   Learn More
//                 </button>
//               </div>
//             </motion.div>

//             {/* RIGHT COLUMN: RANDOM IMAGE */}
//             <motion.div
//               className="md:w-1/2 flex items-center justify-center md:justify-end"
//               initial={{ opacity: 0, x: 30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               {/* Random image from Picsum */}
//               <img
//                 src="https://picsum.photos/800/600?random=2"
//                 alt="Random Hero"
//                 className="max-w-full h-auto rounded-xl shadow-soft"
//               />
//             </motion.div>
//           </div>

//           {/* FEATURES SECTION */}
//           <motion.div
//             className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <FeatureCard
//               Icon={CheckCircle}
//               title="Instant Support"
//               text="Resolve customer queries in seconds with 24/7 AI-driven support."
//             />
//             <FeatureCard
//               Icon={MessageSquare}
//               title="Lead Generation"
//               text="Capture more leads through interactive conversations."
//             />
//             <FeatureCard
//               Icon={Zap}
//               title="Easy Integration"
//               text="Plug & Play—add a single snippet to integrate with any website."
//             />
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

// /** A small reusable feature card */
// function FeatureCard({ Icon, title, text }) {
//   return (
//     <motion.div
//       className="bg-white p-6 rounded-2xl shadow-soft flex flex-col space-y-4"
//       whileHover={{ scale: 1.03 }}
//       transition={{ type: "spring", stiffness: 150 }}
//     >
//       <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-soft">
//         <Icon className="w-6 h-6" />
//       </div>
//       <h3 className="text-lg font-bold text-card-foreground">{title}</h3>
//       <p className="text-sm text-gray-700">{text}</p>
//     </motion.div>
//   );
// }


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import SoftButton from "../../components/ui/SoftButton";
import { CheckCircle, MessageSquare, Zap } from "lucide-react";

export default function Landing() {
  const navigate = useNavigate();
  const [exiting, setExiting] = useState(false);

  const handleGetStarted = () => {
    setExiting(true);
    setTimeout(() => {
      navigate("/register");
    }, 500);
  };

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="landing"
          className="min-h-screen w-full bg-hero-gradient flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Navbar */}
          <nav className="flex items-center justify-between p-6">
            <motion.div
              className="text-white text-2xl font-bold cursor-pointer"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              BeyondChats
            </motion.div>

            <motion.button
              onClick={() => navigate("/login")}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-white underline"
            >
              Login
            </motion.button>
          </nav>

          {/* Hero Section */}
          <div className="flex-1 flex flex-col-reverse md:flex-row items-center justify-center max-w-6xl mx-auto px-6 md:py-12">
            {/* Left Column - Headings & CTA */}
            <motion.div
              className="md:w-1/2 flex flex-col space-y-6 mt-8 md:mt-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Supercharge Your Customer Engagement with BeyondChats
              </h1>
              <p className="text-white text-sm md:text-base max-w-lg">
                Our AI-powered chatbot helps you deliver instant support, generate leads, and increase conversions—without writing a single line of code.
              </p>

              <div className="flex items-center space-x-4">
                <SoftButton
                  variant="primary"
                  className="text-base px-6 py-3"
                  onClick={handleGetStarted}
                  whileHover={{ scale: 1.02 }}
                >
                  Get Started
                </SoftButton>
                <button
                  onClick={() => navigate("/about")}
                  className="underline text-white text-base hover:opacity-80 transition"
                >
                  Learn More
                </button>
              </div>
            </motion.div>

            {/* Right Column - Hero Image */}
            <motion.div
              className="md:w-1/2 flex items-center justify-center md:justify-end"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://picsum.photos/800/600?random=2"
                alt="Hero Section"
                className="max-w-full h-auto rounded-xl shadow-soft"
              />
            </motion.div>
          </div>

          {/* Features Section */}
          <motion.div
            className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FeatureCard
              Icon={CheckCircle}
              title="Instant Support"
              text="Resolve customer queries in seconds with 24/7 AI-driven support."
            />
            <FeatureCard
              Icon={MessageSquare}
              title="Lead Generation"
              text="Capture more leads through interactive conversations."
            />
            <FeatureCard
              Icon={Zap}
              title="Easy Integration"
              text="Plug & Play—add a single snippet to integrate with any website."
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/** Reusable Feature Card */
function FeatureCard({ Icon, title, text }) {
  return (
    <motion.div
      className="bg-white p-6 rounded-2xl shadow-soft flex flex-col space-y-4"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 150 }}
    >
      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-soft">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-bold text-card-foreground">{title}</h3>
      <p className="text-sm text-gray-700">{text}</p>
    </motion.div>
  );
}
