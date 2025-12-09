import { CustomNavLink } from "../../ui/CustomNavLink";

export const Navigation = () => {
  return (
    <nav className="hidden items-center gap-6 md:flex lg:gap-15">
      <CustomNavLink to="home" text="О нас" />
      <CustomNavLink to="home" text="Услуги" />
      <CustomNavLink to="home" text="Портфолио" />
      <CustomNavLink to="home" text="Пакеты" />
      <CustomNavLink to="home" text="Контакты" />
    </nav>
  );
};
