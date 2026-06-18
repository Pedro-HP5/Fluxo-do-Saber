"use client"

import type { FormEvent } from "react"
import { ArrowLeft, MailOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ForgotPasswordView({ onBack }: { onBack: () => void }) {
  function handleSubmit(e: FormEvent) {
    e.preventDefault()
  }

  return (
    <div className="flex h-full min-h-[800px] flex-col bg-[#CFEFEC]">
      {/* Green header */}
      <div className="rounded-b-[2.5rem] bg-[#00C896] px-6 pb-10 pt-8 shadow-md">
        <button
          onClick={onBack}
          aria-label="Voltar"
          className="text-slate-900 transition-opacity hover:opacity-70"
        >
          <ArrowLeft className="size-6" aria-hidden="true" />
        </button>
        <div className="mt-4 text-center">
          <h1 className="text-3xl font-bold text-slate-900">Recuperar Senha</h1>
          <p className="mt-2 text-pretty text-sm text-slate-700">
            Digite seu e-mail e enviaremos um código para redefinir sua senha.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-1 flex-col px-6 pb-10 pt-8">
        <div className="flex flex-col gap-1">
          <Label htmlFor="recover-email" className="mb-1 font-bold text-slate-900">
            E-mail
          </Label>
          <Input
            id="recover-email"
            type="email"
            placeholder="Digite seu e-mail"
            autoComplete="email"
            className="border-slate-300 bg-white text-slate-900 shadow-sm placeholder:text-slate-400"
          />
        </div>

        <Button
          type="submit"
          className="mt-6 h-12 w-full rounded-xl bg-[#00C896] text-base font-extrabold text-black shadow-md hover:bg-[#00b386] hover:text-black"
        >
          Enviar código
        </Button>

        <div className="mt-auto flex flex-col items-center pt-10 text-center">
          <MailOpen
            className="mx-auto mb-6 h-24 w-24 text-slate-900"
            strokeWidth={1.5}
            aria-hidden="true"
          />
          <p className="text-pretty text-base font-bold text-slate-900">
            Verifique sua caixa de entrada e siga as instruções.
          </p>
        </div>
      </form>
    </div>
  )
}
