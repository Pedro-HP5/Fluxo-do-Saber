"use client"

import Image from "next/image"
import { ArrowRight, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WelcomeView({
  onLogin,
  onSignUp,
}: {
  onLogin: () => void
  onSignUp: () => void
}) {
  return (
    <div className="relative flex h-full min-h-[800px] flex-col">
      <Image
        src="/images/welcome-student.png"
        alt="Estudante universitária usando o smartphone ao ar livre"
        fill
        priority
        className="object-cover object-top"
      />
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 flex items-center gap-2 px-6 pt-8 text-white">
        <BookOpen className="size-7" aria-hidden="true" />
        <span className="text-xl font-bold tracking-tight">Fluxo do Saber</span>
      </div>

      <div className="relative z-10 mt-auto px-6 pb-6">
        <h1 className="text-pretty text-4xl font-bold leading-tight text-white">
          Encontre o produto e o preço perfeitos para você.
        </h1>
      </div>

      <div className="relative z-10 rounded-t-3xl bg-[#00C896] px-6 pb-10 pt-8 text-white">
        <Button
          onClick={onLogin}
          className="h-14 w-full rounded-xl border border-gray-200 bg-white text-base font-bold text-slate-900 shadow-lg hover:bg-gray-50"
        >
          Fazer Login
        </Button>
        <button
          onClick={onSignUp}
          className="mt-5 flex w-full items-center justify-center gap-2 text-sm font-bold text-black transition-opacity hover:opacity-70"
        >
          Ou crie uma conta
          <ArrowRight className="size-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
