import { Home, Search } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="mx-auto flex max-w-2xl flex-col gap-10 text-center">
        <span className="text-4xl font-bold text-white">404</span>

        <p className="text-5xl font-bold">Страница не найдена</p>

        <p className="text-xl">
          К сожалению, страница, которую вы ищете, не существует или была перемещена.
        </p>

        <div className="flex flex-col gap-4 rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-center gap-2">
            <Search className="text-primary size-5 shrink-0" />
            <span className="font-medium">Что могло случиться?</span>
          </div>
          <ul className="marker:text-primary flex list-disc flex-col gap-2 pl-4 text-left">
            <li>Введен некорректный адрес</li>
            <li>Страница была удалена или перемещена</li>
            <li>Возможна временная недоступность</li>
          </ul>
        </div>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="bg-primary inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium text-white"
          >
            <Home className="size-5 shrink-0" />
            На главную
          </Link>
        </div>

        <div className="opacity-30">
          <div className="flex justify-center space-x-8">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="bg-primary h-2 w-2 animate-bounce rounded-full"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
