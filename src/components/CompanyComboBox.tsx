"use client";

import * as React from "react";
import { Check, ChevronsUpDown, Earth, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const MANUFACTURERS = [
  {
    value: "volkswagen",
    label: "volkswagen",
  },
  {
    value: "mercedes-benz",
    label: "Mercedes Benz",
  },
  {
    value: "bmw",
    label: "BMW",
  },
  {
    value: "audi",
    label: "Audi",
  },
  {
    value: "toyota",
    label: "Toyota",
  },
];

interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export function SearchManufacturers({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) {
  const [open, setOpen] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string>("");

  const filteredManufacturers =
    value === ""
      ? MANUFACTURERS
      : MANUFACTURERS.filter((item) => item.value === value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[250px] justify-between"
        >
          <Earth className="mr-1.5 w-5 h-5" />
          {value
            ? filteredManufacturers.find((company) => company.value === value)
                ?.label
            : "Select Manufacturer"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0">
        <Command>
          <CommandInput placeholder="Search Manufacturer" />
          <CommandList>
            <CommandEmpty>No company found.</CommandEmpty>
            <CommandGroup>
              {filteredManufacturers.map((company) => (
                <CommandItem
                  key={company.value}
                  value={company.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setManufacturer(currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === company.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {company.label}
                  <X
                    className={cn(
                      "ml-auto h-4 w-4 hover:text-red-500",
                      value === company.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
