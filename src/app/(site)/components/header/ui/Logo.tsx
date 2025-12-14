import Image from "next/image";

export const Logo = () => {
  return (
    <a className="w-fit" href="#top">
      <Image src="/logo.svg" width={48} height={48} className="size-12!" alt="Neon Tattoo Logo" />
    </a>
  );
};
