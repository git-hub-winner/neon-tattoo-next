import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link className="w-fit" href="/">
      <Image src="/logo.svg" width={48} height={48} priority alt="NeonTattoo Logo" />
    </Link>
  );
};
