type PackageCardProps = {
  price: number;
  title: string;
  service: string[];
};

export const PackageCard = ({ price, title, service }: PackageCardProps) => {
  return (
    <div className="flex flex-col">
      <div className="bg-primary py-10 text-center text-white">
        <p className="text-5xl">${price}</p>
      </div>
      <div className="bg-teal-600 py-2 text-center text-white uppercase">
        <p className="uppercase">{title}</p>
      </div>
      <div className="border-x px-4 py-6">
        {service.map((item, index) => (
          <div key={index} className="flex flex-col">
            <h3 className="py-2 text-center">{item}</h3>
            <div
              className={`h-px w-full bg-gray-100 ${index === service.length - 1 && "mb-6"}`}
            ></div>
          </div>
        ))}
      </div>

      <a
        href="#"
        className="bg-black p-2 text-center font-semibold text-white uppercase"
        target="_blank"
        rel="noreferrer noopener"
      >
        Book now!
      </a>
    </div>
  );
};
