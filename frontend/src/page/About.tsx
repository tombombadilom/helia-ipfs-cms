import React from 'react';
import { Card, CardContent, CardDescription, CardTitle } from "../components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import slide1 from "../assets/slide/slide1.png";
import slide2 from "../assets/slide/slide2.png";
import slide3 from "../assets/slide/slide3.png";
import slide4 from "../assets/slide/slide4.png";

const slides = [slide1, slide2, slide3, slide4];
const About = () => {
  return (
    <div
      className="w-screen h-basis-1/2 rounded-lg bg-cover bg-no-repeat p-12 text-center"
    >
      <h1>About</h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="mx-auto"
      >
        <CarouselContent>
          {Array.from({ length: 4 }).map((_, index) => (
            <CarouselItem key={index} className="w-screen">
              <div className="p-1">
                <Card
                  className="bg-no-repeat bg-cover bg-center rounded-lg"
                  style={{
                    backgroundImage: `url(${slides[index]})`
                  }}
                >
                  <CardTitle>
                    blah
                  </CardTitle>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </CardContent>
                  <CardDescription>
                    blah
                  </CardDescription>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
export default About;