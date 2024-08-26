"use client";

import { ArrowRight, Cog, DollarSign, Fuel } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { calculateCarRent } from "@/lib/car-rent";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useHover } from "@uidotdev/usehooks";
import { SteeringWheel } from "./Icons";
import { CardDetails } from "./CardDetails";
import { generateCarImage } from "@/lib/fetch-cars";

export interface CarCardProps {
  car: {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    model: string;
    make?: string;
    transmission: string;
    year: number;
  };
}

export const CarCard = ({ car }: CarCardProps) => {
  const [ref, cardIsHover] = useHover();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const carRent = calculateCarRent({
    dailyRate: car.city_mpg,
    numberOfDays: 3,
  });

  return (
    <div>
      <Card ref={ref}>
        <CardHeader>
          <CardTitle>
            {car?.make} {car.model}
          </CardTitle>
          <CardDescription>
            <span className="flex mt-4">
              <span className="align-top">
                <DollarSign className="h-4 w-4" />
              </span>
              <span className="text-2xl text-zinc-700 font-bold">
                {carRent}
              </span>
              <span className="self-end">/day</span>
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent className="h-40 w-full">
          <div className="relative h-full w-full">
            <Image
              src={generateCarImage(car)}
              alt="placeholder"
              fill
              className="object-cover object-center"
            />
          </div>
        </CardContent>
        <CardFooter className="mt-6">
          {cardIsHover ? (
            <Button
              className="w-full"
              size={"sm"}
              onClick={() => setIsOpen(true)}
            >
              View more <ArrowRight className="ml-1.5 h-4 w-4" />
            </Button>
          ) : (
            <div className="w-full flex justify-between items-center">
              <div className="flex flex-col gap-2 items-center">
                <SteeringWheel className="text-purple-500 h-6 w-6" />
                <p className="text-[10px] font-medium">
                  {car.transmission === "a" ? "Automatic" : "Manual"}
                </p>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <Cog className="text-yellow-500 h-6 w-6" />
                <p className="text-[10px] font-medium">{car.drive}</p>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <Fuel className="text-green-500 h-6 w-6" />
                <p className="text-[10px] font-medium">{car.city_mpg}/MPG</p>
              </div>
            </div>
          )}
        </CardFooter>
      </Card>

      <CardDetails isOpen={isOpen} setIsOpen={setIsOpen} car={car} />
    </div>
  );
};
