'use client';

export const Footer = () => {
  return (
    <footer className="py-10 text-center text-sm text-muted-foreground">
      &copy; {new Date().getFullYear()} NEXT Fitness. Все права защищены.
    </footer>
  );
};
