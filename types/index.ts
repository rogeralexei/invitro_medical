export interface Doctor {
  id: string
  name: string
  specialty: string
  photo: string
  rating: number
  reviewCount: number
  location: string
  availableSlots: number
  tags: string[]
}

export interface Appointment {
  id: string
  doctor: Doctor
  date: Date
  time: string
  status: "confirmed" | "cancelled" | "completed"
}
