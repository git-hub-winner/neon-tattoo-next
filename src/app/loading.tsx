import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="group relative">
        <div className="absolute -inset-1 animate-pulse rounded-full bg-linear-to-r from-green-500 to-lime-500 opacity-30 blur transition duration-1000 group-hover:opacity-50" />

        <div className="relative h-28 w-28 rounded-full bg-white p-4">
          <Image
            width={64}
            height={64}
            src="/logo.svg"
            alt="Neon Tattoo тату студия в Кишинёве"
            className="h-full w-full animate-pulse rounded-full object-contain"
          />
        </div>
      </div>

      <div className="mt-16 text-center">
        <h3 className="mb-2 text-2xl font-bold text-gray-800">Создаём ваш эскиз...</h3>
        <p className="text-gray-500">Студия Neon Tattoo</p>
      </div>
    </div>
  );
}
