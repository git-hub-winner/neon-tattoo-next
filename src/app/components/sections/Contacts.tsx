import Image from "next/image";

export const Contacts = () => {
  return (
    <section id="contacts" className="flex flex-col gap-10 pb-10 sm:gap-15 sm:pb-20">
      <div className="flex flex-col gap-10 border-t border-gray-100">
        <div className="relative mx-auto h-[55px] w-full max-w-[350px]">
          <Image
            src="/images/about2.jpg"
            alt="О нас NeonTattoo"
            fill
            sizes="(max-width: 640px) 100vw, 350px"
            className="object-contain"
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <p className="text-xs tracking-widest uppercase">We love Creative Tattoo</p>
          <p className="text-4xl font-semibold uppercase md:text-6xl">How Find Us</p>
        </div>
      </div>

      <div className="container grid grid-cols-1 gap-10 sm:grid-cols-2">
        <div className="flex max-w-1/2 flex-col gap-10">
          <p>
            Have a project you&#39;re interested in discussing with us? Drop us a line below, we’d
            love to talk.
          </p>

          <div className="flex flex-col gap-2">
            <p className="text-sm uppercase">Our Studio</p>
            <p>301 The Greenhouse, Custard Factory, London, E2 8DY.</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-sm uppercase">General Enquiries</p>
            <p>sales@domain.com</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-sm uppercase">Call us</p>
            <p>+44 (0) 123 456 7890</p>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <p className="text-sm uppercase">Часы работы</p>
            <p>Понедельник - Пятница: 9:00 - 18:00</p>
            <p>Суббота: 10:00 - 16:00</p>
            <p>Воскресенье: закрыто</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-sm uppercase">Как мы работаем</p>
            <p>1. Обсуждение проекта</p>
            <p>2. Концепция и предложение</p>
            <p>3. Разработка и реализация</p>
            <p>4. Поддержка и развитие</p>
          </div>
        </div>
      </div>
    </section>
  );
};
