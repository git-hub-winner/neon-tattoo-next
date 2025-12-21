import { Check, PhoneCall } from "lucide-react";
import Image from "next/image";

export const Course = () => {
  return (
    <section id="course" className="scroll-m-20 pb-10 md:pb-15">
      <div className="container flex flex-col gap-10">
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
          <h2 className="text-xs tracking-widest uppercase"> курсы тату мастера в Кишинёве</h2>
          <h3 className="text-4xl font-semibold uppercase md:text-6xl">курсы тату</h3>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4 rounded-lg border border-gray-200 bg-gray-50 p-4 sm:p-6">
              <h3 className="text-xl font-bold text-gray-900">
                Курс обучения искусству татуировки
              </h3>
              <span className="text-primary text-3xl font-bold">450 €</span>
              <p className="text-lg">
                <strong>Длительность:</strong> 7 дней (один теоретический и шесть практических)
              </p>
              <p>
                Идеально подходит для начинающих тату-мастеров. Интенсивный практический курс с
                индивидуальным подходом к каждому ученику.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold text-gray-900">Главные преимущества курса:</h3>
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-2">
                  <Check className="text-primary size-6 shrink-0" />
                  <span>Практика с первого дня — все уроки выполняются на живых моделях</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-primary size-6 shrink-0" />
                  <span>Полное обеспечение материалами и оборудованием</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-primary size-6 shrink-0" />
                  <span>Поддержка после окончания курса и помощь в подборе инструментов</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold">Что вы получите на курсе:</h3>

            <div className="flex flex-col gap-2">
              <h4 className="flex items-center text-lg font-semibold">
                <span className="text-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-teal-50">
                  1
                </span>
                Теоретический день
              </h4>
              <ul className="marker:text-primary flex list-disc flex-col gap-2 pl-8 sm:pl-12">
                <li>Основы ухода за татуировками</li>
                <li>Оборудование для татуировки: выбор и использование</li>
                <li>Стерилизация и гигиена в тату-студии</li>
                <li>Основы анатомии кожи и техники безопасности</li>
              </ul>
            </div>

            <div className="mb-8">
              <h4 className="mb-4 flex items-center text-lg font-semibold">
                <span className="text-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-teal-50">
                  6
                </span>
                Практических дней
              </h4>
              <ul className="marker:text-primary flex list-disc flex-col gap-2 pl-8 sm:pl-12">
                <li>Основы нанесения контуров</li>
                <li>Техники создания теней и градиентов</li>
                <li>Закраски и работа с плотностью цвета</li>
                <li>Работа с цветными пигментами</li>
                <li>Все уроки выполняются на реальных моделях</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4 rounded-lg border border-blue-100 bg-linear-to-r from-blue-50 to-gray-50 p-6">
            <h4 className="text-lg font-bold">Дополнительные бонусы:</h4>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2">
                <span>🎁</span>
                Подарок: обучающий журнал с полным конспектом курса
              </li>
              <li className="flex items-center gap-2">
                <span>📜</span>
                Диплом в печатном и электронном виде (румынский, английский и по желанию ещё один
                язык)
              </li>
              <li className="flex items-center gap-2">
                <span>🛠️</span>
                Всё оборудование и материалы предоставим, но можно приносить и своё
              </li>
              <li className="flex items-center gap-2">
                <span>🤝</span>
                Помощь в подборе инструментов после курса и постоянная поддержка
              </li>
            </ul>
          </div>

          <a
            href="tel:+37379146506"
            className="bg-primary mx-auto flex w-fit items-center justify-center gap-2 rounded-lg px-4 py-3 font-medium text-white"
          >
            <PhoneCall className="size-5 shrink-0" />
            Записаться +37379146506
          </a>
          <p className="text-center">Остались вопросы? Свяжитесь с нами через контакты выше</p>
        </div>
      </div>
    </section>
  );
};
