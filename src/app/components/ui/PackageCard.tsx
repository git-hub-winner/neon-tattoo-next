import { MessageCircle, PhoneCall } from "lucide-react";

type PackageCardProps = {
  price: number;
  title: string;
  service: string[];
};

export const PackageCard = ({ price, title, service }: PackageCardProps) => {
  return (
    <div className="hover:border-primary flex flex-col rounded-lg border border-gray-200 transition-colors duration-300">
      <div className="overflow-hidden rounded-t-lg bg-linear-to-r from-teal-50 to-blue-50 py-8 text-center">
        <p className="text-4xl font-bold text-gray-800">от {price} лей</p>
      </div>

      <div className="border-b px-6 py-4">
        <h3 className="text-center text-xl font-semibold text-gray-800">{title}</h3>
      </div>

      <div className="grow px-6 py-6">
        <ul className="space-y-3">
          {service.map((item, index) => (
            <li key={index} className="flex items-center">
              <div className="bg-primary mr-3 h-2 w-2 rounded-full"></div>
              <h3>{item}</h3>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-3 px-6 pb-6">
        <a
          href="https://t.me/Trinkonfox"
          className="border-primary text-primary inline-flex w-full items-center justify-center gap-2 rounded-lg border bg-white px-4 py-3 font-medium"
          target="_blank"
          rel="noreferrer noopener"
        >
          <MessageCircle className="size-5" />
          Telegram
        </a>

        <a
          href="tel:+37379146506"
          className="bg-primary inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 font-medium text-white"
        >
          <PhoneCall className="size-5" />
          +37379146506
        </a>
      </div>
    </div>
  );
};
