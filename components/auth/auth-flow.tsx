"use client"

import { useState } from "react"
import { WelcomeView } from "./welcome-view"
import { SignUpView } from "./sign-up-view"
import { LoginView } from "./login-view"
import { ForgotPasswordView } from "./forgot-password-view"

type View = "welcome" | "signup" | "login" | "forgot"

export function AuthFlow() {
  const [currentView, setCurrentView] = useState<View>("welcome")

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#CFEFEC] p-0 sm:p-6">
      <div className="relative w-full max-w-[400px] overflow-hidden bg-[#CFEFEC] shadow-2xl sm:min-h-[800px] sm:rounded-[2rem]">
        {currentView === "welcome" && (
          <WelcomeView
            onLogin={() => setCurrentView("login")}
            onSignUp={() => setCurrentView("signup")}
          />
        )}
        {currentView === "signup" && (
          <SignUpView
            onBack={() => setCurrentView("welcome")}
            onLogin={() => setCurrentView("login")}
          />
        )}
        {currentView === "login" && (
          <LoginView
            onBack={() => setCurrentView("welcome")}
            onSignUp={() => setCurrentView("signup")}
            onForgot={() => setCurrentView("forgot")}
          />
        )}
        {currentView === "forgot" && (
          <ForgotPasswordView onBack={() => setCurrentView("login")} />
        )}
      </div>
    </div>
  )
}
