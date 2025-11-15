"use client";

import * as React from "react";
import { TimerIcon, HomeIcon } from "@radix-ui/react-icons";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ComboboxProps {
  fieldvalue: string;
  options: { label: string; value: string }[];
  value?: string;
  country?: boolean;
  onChange: (value: string) => void;
}

export const Combobox = React.forwardRef<HTMLButtonElement, ComboboxProps>(
  ({ fieldvalue, options, value, country, onChange }: ComboboxProps, ref) => {
    const [open, setOpen] = React.useState(false);

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn(
              "w-full justify-start text-left font-normal",
              !value && "text-muted-foreground"
            )}
          >
            {country ? (
              <HomeIcon className="text-muted-foreground mr-2 h-4 w-4" />
            ) : (
              <TimerIcon className="text-muted-foreground mr-2 h-4 w-4" />
            )}
            {value
              ? options.find((option) => option.value === value)?.label
              : fieldvalue}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="Search option..." />
            <ScrollArea className="h-72 overflow-auto">
              <CommandEmpty>No option found.</CommandEmpty>
              <CommandGroup>
                {options.map((option) => (
                  <CommandItem
                    key={option.value}
                    onSelect={() => {
                      onChange(option.value === value ? "" : option.value);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === option.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {option.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </ScrollArea>
          </Command>
        </PopoverContent>
      </Popover>
    );
  }
);
