import Image from "next/image";

export const About = () => {
  return (
    <section id="about" className="container pb-10 md:pb-15">
      <div className="flex flex-col gap-10 md:gap-15">
        <div className="flex flex-col gap-10">
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
            <p className="text-xs tracking-widest uppercase">We love to Tattoo.</p>
            <p className="text-4xl font-semibold uppercase md:text-6xl">We are Brando</p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-center gap-10 2xl:grid-cols-3">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-bold tracking-widest uppercase">Почему выбирают нас</h3>
              <p className="mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat soluta nemo
                blanditiis aliquid velit quidem!
              </p>
              <div className="h-1 w-10 bg-green-300"></div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-bold tracking-widest uppercase">Почему выбирают нас</h3>
              <p className="mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat soluta nemo
                blanditiis aliquid velit quidem!
              </p>
              <div className="h-1 w-10 bg-green-300"></div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-bold tracking-widest uppercase">Почему выбирают нас</h3>
              <p className="mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat soluta nemo
                blanditiis aliquid velit quidem!
              </p>
              <div className="h-1 w-10 bg-green-300"></div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-bold tracking-widest uppercase">Почему выбирают нас</h3>
              <p className="mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat soluta nemo
                blanditiis aliquid velit quidem!
              </p>
              <div className="h-1 w-10 bg-green-300"></div>
            </div>
          </div>
          <div className="flex h-full w-full flex-col items-center justify-center gap-6 md:flex-row 2xl:col-span-2">
            <div className="relative aspect-3/4 max-h-[600px] w-full">
              <Image
                src="/images/about1.jpg"
                alt="О нас NeonTattoo"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-lg object-cover"
              />
            </div>

            <div className="relative aspect-3/4 max-h-[600px] w-full">
              <Image
                src="/images/about3.jpg"
                alt="О нас NeonTattoo"
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
