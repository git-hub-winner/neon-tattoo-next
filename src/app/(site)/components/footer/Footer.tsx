export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 py-10">
      <p className="text-center text-sm font-semibold">
        &copy; {currentYear} Neon Tattoo. All rights reserved.
      </p>
    </footer>
  );
};
