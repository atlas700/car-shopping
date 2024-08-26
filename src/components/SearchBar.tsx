"use client";

import { Car, SearchIcon } from "lucide-react";
import { FormEvent, useState } from "react";
import { SearchManufacturers } from "./CompanyComboBox";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState<string>("");
  const [model, setModel] = useState<string>("");

  const router = useRouter();

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (manufacturer === "") {
      return toast.error("Please provide manufacturer to search.");
    }

    updateSearchParams(manufacturer, model);
  };

  const updateSearchParams = (manufacturer: string, model: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (manufacturer) searchParams.set("manufacturer", manufacturer);
    else searchParams.delete("manufacturer");
    if (model) searchParams.set("model", model);
    else searchParams.delete("model");

    const newPathName = `${window.location.pathname}?${searchParams}`;

    router.push(newPathName);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="relative flex sm:space-x-4 space-y-2 sm:space-y-0 flex-col self-start sm:flex-row"
    >
      <SearchManufacturers
        manufacturer={manufacturer}
        setManufacturer={setManufacturer}
      />
      <div className="relative">
        <Car className="w-5 h-5 absolute left-2 top-1/2 translate-y-[-50%]" />
        <Input
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="model"
          className="pl-10"
        />
      </div>
      <Button type="submit" className="w-fit">
        {" "}
        <SearchIcon className="w-5 h-5" />{" "}
      </Button>
    </form>
  );
};
