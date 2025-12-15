"use client"

import { useState } from "react"
import { Check, ChevronDown, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface YearDropdownProps {
  years: number[]
  selectedYear: number | null
  onYearChange: (year: number | null) => void
}

export function YearDropdown({ years, selectedYear, onYearChange }: YearDropdownProps) {
  const [open, setOpen] = useState(false)

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="min-w-[200px] h-12 justify-between border-2 border-border/40 bg-card/80 backdrop-blur-sm hover:bg-card hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 group"
        >
          <span className="flex items-center gap-3">
            <Calendar className="w-4 h-4 text-muted-foreground/70 group-hover:text-primary transition-colors duration-300" />
            <span className="flex flex-col items-start">
              <span className="text-[10px] text-muted-foreground/60 uppercase tracking-wider font-medium">Filter</span>
              <span className="text-sm font-semibold tracking-tight">{selectedYear || "All Years"}</span>
            </span>
          </span>
          <ChevronDown
            className={`w-5 h-5 text-muted-foreground/70 transition-all duration-500 group-hover:text-primary ${
              open ? "rotate-180 scale-110" : ""
            }`}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="min-w-[200px] bg-card/98 backdrop-blur-2xl border-2 border-border/40 shadow-2xl shadow-black/10 p-2"
      >
        <DropdownMenuItem
          onClick={() => onYearChange(null)}
          className="cursor-pointer hover:bg-primary/10 transition-all duration-300 rounded-lg px-4 py-3 mb-1 group/item"
        >
          <div className="flex items-center justify-between w-full">
            <span className="font-medium tracking-tight group-hover/item:text-primary transition-colors text-base">
              All Years
            </span>
            {selectedYear === null && (
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                <Check className="w-3 h-3 text-primary" strokeWidth={3} />
              </div>
            )}
          </div>
        </DropdownMenuItem>

        <div className="h-[1px] bg-border/40 my-2" />

        {years.map((year) => (
          <DropdownMenuItem
            key={year}
            onClick={() => onYearChange(year)}
            className="cursor-pointer hover:bg-primary/10 transition-all duration-300 rounded-lg px-4 py-3 group/item"
          >
            <div className="flex items-center justify-between w-full">
              <span className="font-medium tracking-tight group-hover/item:text-primary transition-colors text-base">
                {year}
              </span>
              {selectedYear === year && (
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center animate-in zoom-in-50 duration-300">
                  <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                </div>
              )}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
    // </CHANGE>
  )
}
