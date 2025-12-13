import { CustomNavLink } from "../../ui/CustomNavLink";

export const Navigation = () => {
  return (
    <nav className="hidden items-center gap-6 md:flex lg:gap-15">
      <CustomNavLink to="about" text="О нас" />
      <CustomNavLink to="services" text="Услуги" />
      <CustomNavLink to="portfolio" text="Портфолио" />
      <CustomNavLink to="packages" text="Пакеты" />
      <CustomNavLink to="contacts" text="Контакты" />
    </nav>
  );
};
