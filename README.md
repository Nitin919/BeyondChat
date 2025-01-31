# BeyondChats - Chatbot Setup UI

## 🚀 Project Overview

BeyondChats is a chatbot company that helps businesses integrate AI chatbots into their websites. This project is a **UI/UX workflow** for setting up a new chatbot for businesses, featuring a smooth onboarding experience, chatbot training status tracking, and easy integration steps.

## 🎯 Features

- **User Registration**: Name, Email, Password, or Google Authentication.
- **Email Verification**: Submit a verification code (Default OTP: `123456`).
- **Setup Organization**: Enter company details (Bonus: Auto-fetch meta-description from the website).
- **Chatbot Training Status**: View detected web pages, scraped pages, and pending pages (dummy data included).
- **Chatbot Integration & Testing**:
  - Test chatbot in a dummy environment.
  - Integration via script or email to developer.
  - Success screen with Confetti UI.
  - Admin Panel and Chatbot access options.

## 📌 Live Demo

🔗 [https://beyond-chat-rho.vercel.app/](https://beyond-chat-rho.vercel.app/)

## 📝 Steps from Landing Page to Admin Panel

1. **Landing Page**: Start by clicking on "Get Started" or "Register."
2. **User Registration**: Enter details (Name, Email, Password) or continue with Google.
3. **Redirect to Landing Page**: After successful registration, the user is redirected to the landing page.
4. **User Login**: Click on "Login" and enter registered credentials.
5. **Email Verification**: Enter the OTP `123456` to proceed.
6. **Setup Organization**: Provide company name, website URL, and description (meta-data auto-fetch if applicable).
7. **Chatbot Training Status**: View the scraped and pending pages detected from the company website.
8. **Chatbot Integration**: Choose between direct integration (copy-paste script) or email instructions to the developer.
9. **Success Screen**: Confetti animation and confirmation message.
10. **Admin Panel Access**: Explore the admin panel or start chatting with the bot.

## 📝 Registration & Login Credentials

- The application does not have predefined dummy credentials.
- User **must register manually** as credentials are stored in **local storage/session storage**.
- After registration, users need to manually log in again.
- OTP for email verification is always `123456`.
- If revisiting the site, check local storage to retrieve saved credentials.

## 🏗️ How to Run Locally

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Nitin919/BeyondChat.git
   ```
2. **Navigate to the Project**:
   ```bash
   cd BeyondChat
   ```
3. **Install Dependencies**:
   ```bash
   npm install
   ```
4. **Run the Development Server**:
   ```bash
   npm run dev
   ```
5. **Open in Browser**:
   Visit `http://localhost:3000`



---



