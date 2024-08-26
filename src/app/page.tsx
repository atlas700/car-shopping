import { CarCard } from "@/components/CarCard";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { SearchBar } from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import { fetchCars } from "@/lib/fetch-cars";
import Image from "next/image";

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

interface HomeParams {
  searchParams: {
    manufacturer: string;
    model: string;
    year: number;
    fuel: string;
    limit: number;
  };
}

export default async function Home({ searchParams }: HomeParams) {
  const { manufacturer, model, fuel, limit, year } = searchParams;

  const allCars = (await fetchCars({
    manufacturer: manufacturer || "bmw",
    model: model || "",
    fuel: fuel || "",
    year: year || 2023,
    limit: limit || 10,
  })) as carType[];

  return (
    <MaxWidthWrapper>
      <div className="mt-28 grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-y-0 lg:gap-x-4 px-6 h-[70vh]">
        <div>
          <div className="flex flex-col gap-6 ">
            <h1 className="text-3xl md:text-6xl !leading-tight font-bold tracking-tight text-zinc-800 pt-8">
              Find, Book, or rent a car quickly and easily!
            </h1>
            <p className="text-pretty  text-gray-500 text-sm  max-w-[80%] w-full">
              Streamline your car rental experience with our effortless booking
              process.
            </p>

            <div className="mt-6 flex gap-2 items-center self-start">
              <Button className="rounded-full" size={"lg"}>
                Explore Cars
              </Button>
            </div>
          </div>
        </div>
        <div className="">
          <div className="relative w-full h-full mx-auto ">
            <Image
              src={"/hero.jpg"}
              alt="hero image"
              fill
              className="object-cover rounded-sm border-[3px] border-primary"
            />
          </div>
        </div>
      </div>

      <section className="mt-16 mb-16 min-w-full">
        <h2 className="font-bold text-3xl tracking-tight">Car Catalogue </h2>
        <p className="text-xs mt-3 mb-6">Explore out cars you might like</p>

        <div className="flex flex-col sm:flex-row sm:flex-wrap items-center sm:justify-between space-y-6 sm:space-x-6">
          {/* Company */}
          <SearchBar />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-3 sm:gap-x-4 sm:gap-y-4 md:gap-x-6 lg:gap-y-6 mt-16">
          {allCars.map((car, idx) => (
            <CarCard key={idx} car={car} />
          ))}
        </div>
      </section>
    </MaxWidthWrapper>
  );
}
