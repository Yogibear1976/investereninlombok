"use client";

import * as React from "react";
import { addDays, format, Locale } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerProps {
  className?: string;
  fieldvalue: string;
  range?: DateRange | undefined;
  onChange: (value: DateRange | undefined) => void;
  locale?: Locale;
}

export function DatePickerWithRange({
  className,
  fieldvalue,
  range,
  onChange,
  locale,
}: DatePickerProps) {
  const todayDate = new Date();
  const tomorrow = todayDate.setDate(todayDate.getDate() + 1);

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal",
              !range && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="text-muted-foreground mr-2 h-4 w-4" />
            {range?.from ? (
              range.to ? (
                <>
                  {format(range.from, "LLL dd, y")} -{" "}
                  {format(range.to, "LLL dd, y")}
                </>
              ) : (
                format(range.from, "LLL dd, y")
              )
            ) : (
              <span>{fieldvalue}</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            locale={locale}
            initialFocus
            mode="range"
            defaultMonth={range?.from}
            selected={range}
            onSelect={onChange}
            numberOfMonths={2}
            disabled={[
              {
                before: todayDate,
              },
            ]}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
