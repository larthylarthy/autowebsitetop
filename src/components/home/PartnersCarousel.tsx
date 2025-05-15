
import { useState } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

type Partner = {
  name: string;
  description: string;
  image: string;
};

const partners: Partner[] = [
  {
    name: "TechFuture Inc.",
    description: "Leading AI innovation for enterprise solutions.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    name: "WebMakers Studio",
    description: "Expert web development and design services.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  },
  {
    name: "Creative Vision",
    description: "Transforming ideas into visual masterpieces.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
  },
  {
    name: "Digital Nomads Co.",
    description: "Remote work solutions for the modern workforce.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  },
  {
    name: "Cloud Edge",
    description: "Enterprise-grade cloud infrastructure services.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
  },
  {
    name: "DataViz Pro",
    description: "Data visualization tools for complex analytics.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
  },
  {
    name: "CodeCraft Labs",
    description: "Custom software development for startups.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
  {
    name: "SmartSys Technologies",
    description: "Intelligent automation systems for businesses.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
  {
    name: "UX Innovate",
    description: "User experience research and design consultancy.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  },
  {
    name: "DevOps Solutions",
    description: "Streamlining development and operations workflows.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  },
];

const PartnersCarousel = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Trusted Partners</h2>
        
        <Carousel
          opts={{ 
            align: "start",
            loop: true,
          }}
          className="mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {partners.map((partner, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/4">
                <div className="relative group overflow-hidden rounded-lg">
                  <AspectRatio ratio={4/3}>
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </AspectRatio>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
                    <h3 className="text-white font-bold mb-2">{partner.name}</h3>
                    <p className="text-white/90 text-sm">{partner.description}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:flex items-center justify-center mt-8">
            <CarouselPrevious className="static transform-none mx-2" />
            <CarouselNext className="static transform-none mx-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default PartnersCarousel;
