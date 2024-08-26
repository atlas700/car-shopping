import Image from "next/image";
import { CarCardProps } from "./CarCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";

type carType = {
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

interface CardDetailsProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  car: carType;
}

export const CardDetails = ({ car, isOpen, setIsOpen }: CardDetailsProps) => {
  return (
    <div className="z-[200] w-full  max-w-lg">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader className="h-60">
            <div className="h-full w-full flex mt-2 flex-col gap-3 justify-center">
              <div className="flex-1 h-full w-full relative rounded-md">
                <Image
                  src="/hero.jpg"
                  alt="placeholder"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div className="h-20 w-full flex gap-2 justify-between items-center">
                <div className="relative flex-1 h-full w-full">
                  <Image
                    src={"/hero.jpg"}
                    alt="hero"
                    fill
                    className="object-cover rounded-sm"
                  />
                </div>
                <div className="relative flex-1 h-full w-full">
                  <Image
                    src={"/hero.jpg"}
                    alt="hero"
                    fill
                    className="object-cover rounded-sm"
                  />
                </div>
                <div className="relative flex-1 h-full w-full">
                  <Image
                    src={"/hero.jpg"}
                    alt="hero"
                    fill
                    className="object-cover rounded-sm"
                  />
                </div>
              </div>
            </div>
          </DialogHeader>
          <ScrollArea>
            <DialogDescription className="h-[280px]">
              <DialogTitle className="text-gray-900 font-bold text-xl  mb-1">
                {car.make} {car.model}
              </DialogTitle>
              <div className="flex flex-col gap-2 pr-5">
                {Object.entries(car).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="font-medium text-gray-500 capitalize">
                      {key.split("_").join(" ")}
                    </span>
                    <span className="text-black">{value}</span>
                  </div>
                ))}
              </div>
            </DialogDescription>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
};
