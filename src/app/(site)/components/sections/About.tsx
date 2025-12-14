import Image from "next/image";

export const About = () => {
  return (
    <section id="about" className="container scroll-mt-20 pb-10 md:pb-15">
      <div className="flex flex-col gap-10 md:gap-15">
        <div className="flex flex-col gap-10">
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
            <h2 className="text-xs tracking-widest uppercase">Где сделать тату в Кишинёве</h2>
            <h1>Тату-салон Neon Tattoo в Кишинёве, индивидуальные эскизы и обучение</h1>
            <p className="text-4xl font-semibold uppercase md:text-6xl">Наши преимущества</p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-center gap-10 2xl:grid-cols-3">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <p className="text-xs font-bold tracking-widest uppercase">Наш подход</p>
              <p className="mb-2">
                Мы работаем с идеями, а не шаблонами. Каждый проект начинается с диалога и понимания
                того, что действительно подходит именно вам.
              </p>
              <div className="h-1 w-10 bg-green-300"></div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-xs font-bold tracking-widest uppercase">Опыт и практика</p>
              <p className="mb-2">
                За нашими работами стоит реальный опыт, уверенная техника и постоянное развитие в
                современных стилях татуировки.
              </p>
              <div className="h-1 w-10 bg-green-300"></div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-xs font-bold tracking-widest uppercase">Честная стоимость</p>
              <p className="mb-2">
                Мы предлагаем понятные и обоснованные цены без скрытых доплат, вы заранее понимаете
                результат и стоимость работы.
              </p>
              <div className="h-1 w-10 bg-green-300"></div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-xs font-bold tracking-widest uppercase">Внимание к деталям</p>
              <p className="mb-2">
                Форма, композиция, линии и пропорции, мы уделяем внимание мелочам, которые в итоге
                создают цельную и гармоничную работу.
              </p>
              <div className="h-1 w-10 bg-green-300"></div>
            </div>
          </div>
          <div className="flex h-full w-full flex-col items-center justify-center gap-6 md:flex-row 2xl:col-span-2">
            <div className="relative aspect-3/4 max-h-[600px] w-full">
              <Image
                src="/images/about-neon-tattoo-studio-1.webp"
                alt="Девушка с тату на плече и руке"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-lg object-cover"
              />
            </div>

            <div className="relative aspect-3/4 max-h-[600px] w-full">
              <Image
                src="/images/about-neon-tattoo-studio-2.webp"
                alt="Мужчина с тату на груди"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
