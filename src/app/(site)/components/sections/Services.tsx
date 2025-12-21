import { MoveRight } from "lucide-react";
import Image from "next/image";

import { CustomNavLink } from "../ui/CustomNavLink";

export const Services = () => {
  return (
    <section
      id="services"
      className="grid w-full scroll-mt-20 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
    >
      <div className="relative min-h-[710px] w-full">
        <Image
          src="/images/services-neon-tattoo-studio-1.webp"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="h-full w-full object-cover"
          alt="Тату на плече цветы и бабочки в Кишиневе"
        />
      </div>

      <div className="flex flex-col gap-10 bg-black px-4 py-15 text-white sm:px-8 sm:py-25">
        <div className="border-primary border-4 p-6 text-center">
          <p className="text-2xl font-bold uppercase lg:text-5xl">Галерея татуировок</p>
        </div>
        <p>
          Здесь представлены примеры татуировок, выполненных мастерами Neon Tattoo. Каждая работа
          создаётся индивидуально с учётом идеи, пожеланий и особенностей клиента, без использования
          шаблонных решений.
        </p>
        <p>
          Мы оцениваем проект целиком, а не по сеансам или почасовой ставке. Фиксированная стоимость
          за всю работу позволяет сосредоточиться на результате и получить желаемый образ без
          затягивания процесса.
        </p>
        <p>
          Галерея отражает наш подход, уровень исполнения и внимание к деталям на каждом этапе
          работы.
        </p>
        <CustomNavLink
          className="bg-primary group flex w-fit items-center justify-between gap-4 p-4 font-bold tracking-widest uppercase hover:text-white"
          to="portfolio"
          text="Перейти в галерею"
          icon={
            <MoveRight
              className="transition-transform duration-300 group-hover:translate-x-1"
              size={24}
              strokeWidth={2}
            />
          }
        />
      </div>

      <div className="relative min-h-[710px] w-full">
        <Image
          src="/images/services-neon-tattoo-studio-2.webp"
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          alt="Тату ангела на теле от Neon Tattoo в Кишинёве"
        />
      </div>
      <div className="flex flex-col gap-10 bg-black px-4 py-15 text-white sm:px-8 sm:py-25 xl:hidden">
        <div className="border-primary border-4 p-6 text-center">
          <p className="text-2xl font-bold uppercase lg:text-5xl">О татуировке и процессе</p>
        </div>
        <p>
          Татуировка, это результат совместной работы мастера и клиента. Важно учитывать не только
          идею, но и зону нанесения, форму тела, масштаб и долговечность изображения.
        </p>
        <p>
          Подготовка, подбор эскиза и корректное планирование позволяют получить сбалансированный
          результат, который сохраняет внешний вид со временем и гармонично смотрится на коже.
        </p>
        <CustomNavLink
          className="bg-primary group flex w-fit items-center justify-between gap-4 p-4 font-bold tracking-widest uppercase hover:text-white"
          to="portfolio"
          text="Перейти в галерею"
          icon={
            <MoveRight
              className="transition-transform duration-300 group-hover:translate-x-1"
              size={24}
              strokeWidth={2}
            />
          }
        />
      </div>
    </section>
  );
};
