import Image from "next/image";

export const About = () => {
  return (
    <section className="container pb-10 md:pb-15">
      <div className="flex flex-col gap-4">
        <Image
          src="/images/about.jpg"
          width={300}
          height={40}
          alt="О нас NeonTattoo"
          className="mx-auto"
        />
      </div>
    </section>
  );
};
