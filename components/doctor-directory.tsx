"use client"

import { useState } from "react"
import { useDoctors } from "@/store/doctor-store"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ClockIcon, MapPinIcon, SearchIcon, StarIcon } from "lucide-react"
import BookingModal from "@/components/booking-modal"
import type { Doctor } from "@/types"

export default function DoctorDirectory() {
  const { doctors } = useDoctors()
  const [searchTerm, setSearchTerm] = useState("")
  const [specialty, setSpecialty] = useState("all")
  const [availability, setAvailability] = useState("all")
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Get unique specialties for filter
  const specialties = ["all", ...new Set(doctors.map((doctor) => doctor.specialty))]

  // Filter doctors based on search term, specialty, and availability
  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSpecialty = specialty === "all" || doctor.specialty === specialty
    const matchesAvailability =
      availability === "all" ||
      (availability === "available" && doctor.availableSlots > 0) ||
      (availability === "unavailable" && doctor.availableSlots === 0)

    return matchesSearch && matchesSpecialty && matchesAvailability
  })

  const handleBookAppointment = (doctor: Doctor) => {
    setSelectedDoctor(doctor)
    setIsModalOpen(true)
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search doctors by name or specialty"
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div>
          <Select value={specialty} onValueChange={setSpecialty}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by specialty" />
            </SelectTrigger>
            <SelectContent>
              {specialties.map((spec) => (
                <SelectItem key={spec} value={spec}>
                  {spec === "all" ? "All Specialties" : spec}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Select value={availability} onValueChange={setAvailability}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by availability" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Availability</SelectItem>
              <SelectItem value="available">Available</SelectItem>
              <SelectItem value="unavailable">Unavailable</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {filteredDoctors.length === 0 ? (
        <div className="rounded-md bg-muted/50 p-8 text-center">
          <h3 className="text-lg font-medium">No doctors found</h3>
          <p className="text-muted-foreground mt-2">Try adjusting your search or filter criteria</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredDoctors.map((doctor) => (
            <Card key={doctor.id} className="overflow-hidden">
              <div className="relative h-40 bg-gradient-to-r from-blue-50 to-indigo-50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Avatar className="h-24 w-24 border-4 border-white">
                    <AvatarImage src={doctor.photo || "/placeholder.svg"} alt={doctor.name} />
                    <AvatarFallback>{doctor.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              <CardContent className="pt-4">
                <div className="text-center mb-4">
                  <h3 className="font-semibold text-lg">{doctor.name}</h3>
                  <p className="text-muted-foreground">{doctor.specialty}</p>
                  <div className="flex items-center justify-center mt-1">
                    <div className="flex items-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`h-4 w-4 ${
                            i < doctor.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-1 text-sm text-muted-foreground">({doctor.reviewCount})</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <MapPinIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>{doctor.location}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <ClockIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>
                      {doctor.availableSlots > 0 ? `${doctor.availableSlots} slots available` : "No slots available"}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {doctor.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  disabled={doctor.availableSlots === 0}
                  onClick={() => handleBookAppointment(doctor)}
                >
                  {doctor.availableSlots > 0 ? "Book Appointment" : "Fully Booked"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      {selectedDoctor && (
        <BookingModal doctor={selectedDoctor} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  )
}
