import dynamic from "next/dynamic";
import Image from "next/image";

const Map = dynamic(() => import("@/app/(site)/components/ui/Map"), {
  loading: () => <p>Загрузка карты...</p>,
});

export const Contacts = () => {
  return (
    <section
      id="contacts"
      className="flex min-h-[calc(100dvh-80px)] scroll-mt-20 flex-col gap-10 pb-10 sm:gap-15 sm:pb-20"
    >
      <div className="flex flex-col gap-10 border-t border-gray-100">
        <div className="relative mx-auto h-[55px] w-full max-w-[350px]">
          <Image
            src="/images/section-decoration.webp"
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, 350px"
            className="object-contain"
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <h2 className="text-xs tracking-widest uppercase">Индивидуальные тату только у нас</h2>
          <p className="text-4xl font-semibold uppercase md:text-6xl">Как нас найти</p>
        </div>
      </div>

      <div className="container grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div className="flex flex-col gap-4 xl:max-w-1/2">
          <div className="flex flex-col gap-2">
            <p>Индивидуальные тату только у нас </p>
            <p className="text-sm font-bold uppercase">Как нас найти</p>
          </div>
          <p>
            Если у вас есть идея или вы хотите обсудить будущую работу напишите нам. Мы на связи и
            отвечаем на сообщения ежедневно.
          </p>

          <address className="flex flex-col gap-2 not-italic">
            <h3 className="text-sm font-bold uppercase">Наша студия</h3>
            <p>
              Торговый центр Atrium
              <br />
              ул. Албишоара 4, Кишинёв
            </p>
          </address>

          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-bold uppercase">Социальные сети</h3>
            <p>
              Instagram:{" "}
              <a href="https://instagram.com/TrinkoTattoo" className="text-primary hover:underline">
                @TrinkoTattoo
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-bold uppercase">Связаться с нами</h3>
            <p>
              <a href="tel:+37379146506" className="hover:underline">
                +373 79 146 506
              </a>
              <br />
              <span className="text-gray-600">(Telegram / WhatsApp / Viber)</span>
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-bold uppercase">Часы работы</h3>
            <p className="text-primary font-bold">
              Работаем исключительно по предварительной записи
            </p>
            <ul className="list-none space-y-1 pl-0">
              <li>
                Понедельник – Пятница: <time>10:00</time> – <time>20:00</time>
              </li>
              <li>
                Суббота – Воскресенье: <time>10:00</time> – <time>18:00</time>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <Map />
        </div>
      </div>
    </section>
  );
};
