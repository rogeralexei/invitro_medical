"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAppointments } from "@/store/appointment-store"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { CalendarIcon, CheckIcon, ClockIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import type { Doctor } from "@/types"

interface BookingModalProps {
  doctor: Doctor
  isOpen: boolean
  onClose: () => void
}

export default function BookingModal({ doctor, isOpen, onClose }: BookingModalProps) {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null)
  const [isBooking, setIsBooking] = useState(false)
  const { addAppointment } = useAppointments()
  const router = useRouter()

  // Generate mock time slots
  const timeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
  ]

  const handleBookAppointment = () => {
    if (!date || !selectedTimeSlot) return

    setIsBooking(true)

    // Simulate API call
    setTimeout(() => {
      addAppointment({
        id: `appointment-${Date.now()}`,
        doctor: doctor,
        date: date,
        time: selectedTimeSlot,
        status: "confirmed",
      })

      setIsBooking(false)
      onClose()
      router.push("/dashboard/appointments")
    }, 1000)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Book an Appointment</DialogTitle>
          <DialogDescription>
            Select a date and time slot to book your appointment with Dr. {doctor.name}
          </DialogDescription>
        </DialogHeader>

        <div className="flex items-center space-x-4 py-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={doctor.photo || "/placeholder.svg"} alt={doctor.name} />
            <AvatarFallback>{doctor.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-medium">{doctor.name}</h4>
            <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Select Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Select a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  disabled={(date) =>
                    date < new Date(new Date().setHours(0, 0, 0, 0)) ||
                    date > new Date(new Date().setDate(new Date().getDate() + 30))
                  }
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label>Select Time</Label>
            <RadioGroup
              value={selectedTimeSlot || ""}
              onValueChange={setSelectedTimeSlot}
              className="grid grid-cols-3 gap-2"
            >
              {timeSlots.map((slot) => (
                <div key={slot}>
                  <RadioGroupItem value={slot} id={`time-${slot}`} className="peer sr-only" />
                  <Label
                    htmlFor={`time-${slot}`}
                    className="flex items-center justify-center rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <ClockIcon className="mr-2 h-4 w-4" />
                    {slot}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleBookAppointment} disabled={!date || !selectedTimeSlot || isBooking} className="gap-2">
            {isBooking ? "Booking..." : "Confirm Appointment"}
            {!isBooking && <CheckIcon className="h-4 w-4" />}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
