import type { ReactNode } from "react";
type Props = {
  children: ReactNode;
};
const PokemonCardsContainer = ({ children }: Props) => {
  return (
    <section className="mx-auto px-4 sm:px-6 lg:px-8 py-5 mt-4">
      <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
        {children}
      </div>
    </section>
  );
};

export default PokemonCardsContainer;
