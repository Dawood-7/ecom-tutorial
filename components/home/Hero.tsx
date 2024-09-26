import Link from "next/link";
import { Button } from "../ui/button";
import HeroCarousel from "./HeroCarousel";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tighter md:text-7xl md:leading-tight lg:text-8xl lg:leading-tight">
          we are changing the way people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          dolor, maxime sit officiis, velit perferendis, minus voluptatibus modi
          similique minima eum quis? Molestiae voluptatem corporis nihil
          voluptatum recusandae beatae fuga?
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link href="/products">Shop Now</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
};
export default Hero;
