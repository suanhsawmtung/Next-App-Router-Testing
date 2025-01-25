import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import FilterIcon from "./icons/filter-icon"

export default function FilterDialog() {
  const [count] = useState(1)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" size="lg" className="gap-2 rounded-full bg-[#1E1E1E]">
          Filter
          {count && (
            <span className="w-5 h-5 rounded-full bg-[#FFD752] text-white text-sm flex items-center justify-center">
              {count}
            </span>
          )}
          <FilterIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-start gap-4">
            <DialogTitle className="font-bold text-2xl text-[#1E1E1E]">Filters*</DialogTitle>
            <Button variant="link" className="p-0 h-auto underline font-medium text-xl">
              Clear
            </Button>
          </div>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="grid gap-2">
            <label className="font-semibold text-xl text-[#1E1E1E]">Date</label>
            <div className="flex gap-2 items-center">
              <Button variant="secondary" size="sm" className="bg-[#FFD752] rounded-full text-sm font-semibold">
                Specific Date
              </Button>
              <span className="px-1">:</span>
              <Select>
                <SelectTrigger className="w-24">
                  <SelectValue placeholder="Jan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="jan">Jan</SelectItem>
                  <SelectItem value="feb">Feb</SelectItem>
                  <SelectItem value="mar">Mar</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-24">
                  <SelectValue placeholder="24" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="24">24</SelectItem>
                  <SelectItem value="25">25</SelectItem>
                  <SelectItem value="26">26</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Today", "Tomorrow", "This Week", "This Month"].map((option) => (
                <Button key={option} variant="outline" size="sm" className="border border-[#1E1E1E] rounded-full text-sm font-semibold" >
                  {option}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid gap-2">
            <label className="font-semibold text-xl text-[#1E1E1E]">Day of the Week</label>
            <div className="flex flex-wrap gap-2">
              <Button variant="secondary" size="sm" className="border border-[#1E1E1E] rounded-full text-sm font-semibold">
                Weekends
              </Button>
              {[
                "Weekdays",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ].map((day) => (
                <Button key={day} variant="outline" size="sm" className="border border-[#1E1E1E] rounded-full text-sm font-semibold" >
                  {day}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid gap-2">
            <label className="font-semibold text-xl text-[#1E1E1E]">Event Type</label>
            <div className="flex flex-wrap gap-2">
              {["Online", "In Person"].map((type) => (
                <Button key={type} variant="outline" size="sm" className="border border-[#1E1E1E] rounded-full text-sm font-semibold" >
                  {type}
                </Button>
              ))}
            </div>
          </div>
        </div>
        <Button className="w-full py-6 text-xl font-bold bg-[#1E1E1E] text-[#FEFDF6]">Show Events</Button>
      </DialogContent>
    </Dialog>
  )
}

