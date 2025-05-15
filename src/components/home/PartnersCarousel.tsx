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
    name: "Helius",
    description: "Our friends over at Helius have assisted us hugely with their RPC nodes, APIs, webhooks and anything dev related!",
    image: "/partners/helius.png",
  },
  {
    name: "GrapesJS",
    description: "GrapesJS is the premier javascript website builder, they've kindly let us integrate them into our development suite!",
    image: "/partners/grapesjs.png",
  },
  {
    name: "PumpFun",
    description: "PumpFun needs no introduction, they are our launch partners and will create our token!",
    image: "/partners/pumpfun.png",
  },
  {
    name: "Cloudflare",
    description: "Strengthening our domain and ensuring all of our API queries are successfully passed.",
    image: "/partners/cloudflare.png",
  },
  {
    name: "Dall-e",
    description: "By using Dall-e's amazing API we are able to generate amazing images for you to use in your websites!",
    image: "/partners/dalle.png",
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
