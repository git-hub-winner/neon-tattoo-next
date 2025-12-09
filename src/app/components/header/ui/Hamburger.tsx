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
        <Button variant="outline">Меню</Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>NeonTattoo</SheetTitle>
          <SheetDescription>
            Профессиональная тату-студия в Кишинёве. Индивидуальные эскизы, стерильность, качество и
            опыт.
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col gap-6 p-4">
          <div className="flex flex-col gap-2">
            <h3 className="mb-1 font-semibold">Часы работы</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Пн–Пт: 10:00 – 19:00
              <br />
              Сб–Вс: 11:00 – 17:00
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="mb-1 font-semibold">Адрес</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              ТЦ Atrium
              <br />
              Чеканы, Кишинёв, Молдова
            </p>

            <SheetClose asChild>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-sm transition hover:opacity-80"
              >
                Открыть в Google Maps
              </a>
            </SheetClose>
          </div>
        </div>

        <SheetFooter className="mt-6 flex flex-col items-start space-y-2">
          <SheetClose asChild>
            <a
              href="#about"
              className="text-muted-foreground hover:text-foreground text-sm transition"
            >
              О нас
            </a>
          </SheetClose>

          <SheetClose asChild>
            <a
              href="#services"
              className="text-muted-foreground hover:text-foreground text-sm transition"
            >
              Услуги
            </a>
          </SheetClose>

          <SheetClose asChild>
            <a
              href="https://t.me/neontattoo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground text-sm transition"
            >
              Telegram
            </a>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
