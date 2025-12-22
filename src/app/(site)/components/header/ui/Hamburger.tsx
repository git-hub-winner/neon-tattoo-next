"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Hamburger() {
  return (
    <Sheet>
      <SheetTrigger className="flex md:hidden" asChild>
        <Button variant="outline">Записаться</Button>
      </SheetTrigger>

      <SheetContent className="flex h-dvh flex-col">
        <SheetHeader>
          <SheetTitle>Neon Tattoo</SheetTitle>
          <SheetDescription className="flex flex-col">
            Профессиональная тату-студия в Кишинёве.
            <span className="text-primary mt-2 text-sm font-bold">
              Работаем исключительно по предварительной записи
            </span>
          </SheetDescription>
        </SheetHeader>

        <div className="overflow-y-auto">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 pl-4">
              <SheetClose asChild>
                <a href="#about" className="hover:text-primary transition">
                  О нас
                </a>
              </SheetClose>

              <SheetClose asChild>
                <a href="#services" className="hover:text-primary transition">
                  Услуги
                </a>
              </SheetClose>

              <SheetClose asChild>
                <a href="#portfolio" className="hover:text-primary transition">
                  Портфолио
                </a>
              </SheetClose>

              <SheetClose asChild>
                <a href="#packages" className="hover:text-primary transition">
                  Пакеты
                </a>
              </SheetClose>

              <SheetClose asChild>
                <a href="#course" className="hover:text-primary transition">
                  Курсы тату
                </a>
              </SheetClose>

              <SheetClose asChild>
                <a href="#contacts" className="hover:text-primary transition">
                  Контакты
                </a>
              </SheetClose>
            </div>

            <div className="flex flex-col gap-2 pl-4">
              <p className="text-sm font-bold uppercase">Связаться с нами</p>
              <p className="text-sm leading-relaxed">
                <SheetClose asChild>
                  <a href="tel:+37379146506" className="text-primary hover:underline">
                    +373 79 146 506
                  </a>
                </SheetClose>
                <br />
                <span className="text-xs">(Telegram / WhatsApp / Viber)</span>
              </p>
            </div>

            <div className="flex flex-col gap-4 pl-4">
              <div>
                <p className="text-sm font-bold uppercase">Социальные сети</p>
                <p className="mt-2 text-sm">
                  Instagram:{" "}
                  <SheetClose asChild>
                    <a
                      href="https://instagram.com/trinko_tattoo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      @TrinkoTattoo
                    </a>
                  </SheetClose>
                </p>
              </div>
            </div>
          </div>
        </div>

        <SheetFooter className="mt-auto shrink-0 border-t pt-4">
          <div>
            <p className="text-sm font-bold uppercase">Часы работы</p>
            <p className="text-primary mt-2 text-sm font-bold">
              Работаем исключительно по предварительной записи
            </p>
            <ul className="mt-2 space-y-1 text-sm">
              <li className="flex flex-wrap items-center gap-2">
                <p>Понедельник – Пятница:</p>
                <div>
                  <time>10:00</time> – <time>20:00</time>
                </div>
              </li>
              <li className="flex flex-wrap items-center gap-2">
                <p>Суббота – Воскресенье:</p>
                <div>
                  <time>10:00</time> – <time>18:00</time>
                </div>
              </li>
            </ul>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
