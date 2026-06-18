"use client"

import type { FormEvent } from "react"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PasswordInput } from "./password-input"

export function LoginView({
  onBack,
  onSignUp,
  onForgot,
}: {
  onBack: () => void
  onSignUp: () => void
  onForgot: () => void
}) {
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
          <h1 className="text-3xl font-bold text-slate-900">Bem-Vindo de volta!</h1>
          <p className="mt-1 text-sm text-slate-700">Faça login para continuar.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-1 flex-col px-6 pb-8 pt-8">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <Label htmlFor="login-email" className="mb-1 font-bold text-slate-900">
              E-mail
            </Label>
            <Input
              id="login-email"
              type="email"
              placeholder="Digite seu e-mail"
              autoComplete="email"
              className="border-slate-300 bg-white text-slate-900 shadow-sm placeholder:text-slate-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <Label htmlFor="login-password" className="mb-1 font-bold text-slate-900">
              Senha
            </Label>
            <PasswordInput
              id="login-password"
              placeholder="Digite sua senha"
              className="border-slate-300 bg-white text-slate-900 shadow-sm placeholder:text-slate-400"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="keep"
                defaultChecked
                className="h-5 w-5 shrink-0 cursor-pointer"
                style={{ accentColor: "#00C896" }}
              />
              <Label htmlFor="keep" className="text-sm font-normal text-slate-600">
                Manter conectado.
              </Label>
            </div>
            <button
              type="button"
              onClick={onForgot}
              className="text-sm font-semibold text-[#00C896] hover:underline"
            >
              Esqueci minha senha
            </button>
          </div>
        </div>

        <div className="mt-auto pt-8">
          <Button
            type="submit"
            className="h-12 w-full rounded-xl bg-[#00C896] text-base font-extrabold text-black shadow-md hover:bg-[#00b386] hover:text-black"
          >
            Entrar
          </Button>
          <p className="mt-4 text-center text-sm text-slate-500">
            Ainda não tem conta?{" "}
            <button
              type="button"
              onClick={onSignUp}
              className="font-semibold text-[#00C896] hover:underline"
            >
              Criar conta.
            </button>
          </p>
        </div>
      </form>
    </div>
  )
}
