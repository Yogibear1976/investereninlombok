"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format, Locale } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerProps {
  fieldvalue: string;
  value?: Date;
  onChange: (value: Date | undefined) => void;
  locale?: Locale;
}

export function DatePicker({
  fieldvalue,
  value,
  onChange,
  locale,
}: DatePickerProps) {
  const todayDate = new Date();
  const tomorrow = todayDate.setDate(todayDate.getDate() + 1);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !value && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {value ? format(value, "PPP") : <span>{fieldvalue}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          locale={locale}
          mode="single"
          selected={value}
          onSelect={onChange}
          initialFocus
          disabled={[
            {
              dayOfWeek: [0, 6],
            },
            {
              before: todayDate,
            },
          ]}
          // disabled={(date) =>
          //   date < new Date() || date > new Date("2024-12-31")
          // }
          // disabled={{ dayOfWeek: [0, 6] }}
        />
      </PopoverContent>
    </Popover>
  );
}
