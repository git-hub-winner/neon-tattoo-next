"use client";
import Link from "next/link";
import { Button } from "../components/ui/button";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black p-8 text-white">
      <div className="max-w-md space-y-8 text-center">
        <div>
          <h1 className="mb-4 text-5xl font-bold">
            <span className="bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Ошибка!
            </span>
          </h1>
          <p className="mb-6 text-gray-400">Что-то пошло не так во время загрузки страницы</p>
          {error.message && (
            <div className="mb-6 rounded-lg bg-gray-900/50 p-4 text-left">
              <p className="font-mono text-sm wrap-break-word text-red-400">{error.message}</p>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-4">
          <Button
            onClick={reset}
            className="w-full rounded-lg bg-linear-to-r from-purple-600 to-pink-600 py-6 font-bold transition-all hover:from-purple-700 hover:to-pink-700"
          >
            Попробовать ещё раз
          </Button>
          <Link
            href="/"
            className="w-full rounded-lg bg-linear-to-r from-purple-600 to-pink-600 py-3 font-bold transition-all hover:from-purple-700 hover:to-pink-700"
          >
            На главную
          </Link>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-sm text-gray-500">
              Проблема остаётся?
              <a
                href="https://t.me/d0nt_sell"
                className="ml-2 text-purple-400 hover:text-purple-300"
              >
                Напишите нам
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
