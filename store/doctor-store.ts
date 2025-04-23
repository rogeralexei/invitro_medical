import { create } from "zustand"
import type { Doctor } from "@/types"

interface DoctorState {
  doctors: Doctor[]
}

// Mock data for doctors
const mockDoctors: Doctor[] = [
  {
    id: "doctor-1",
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    photo: "/placeholder.svg?height=200&width=200",
    rating: 4.8,
    reviewCount: 124,
    location: "New York Medical Center",
    availableSlots: 5,
    tags: ["Heart Specialist", "Preventive Care"],
  },
  {
    id: "doctor-2",
    name: "Dr. Michael Chen",
    specialty: "Dermatology",
    photo: "/placeholder.svg?height=200&width=200",
    rating: 4.7,
    reviewCount: 98,
    location: "Skin Health Clinic",
    availableSlots: 3,
    tags: ["Skin Cancer", "Cosmetic Dermatology"],
  },
  {
    id: "doctor-3",
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrics",
    photo: "/placeholder.svg?height=200&width=200",
    rating: 4.9,
    reviewCount: 156,
    location: "Children's Wellness Center",
    availableSlots: 0,
    tags: ["Child Development", "Vaccinations"],
  },
  {
    id: "doctor-4",
    name: "Dr. James Wilson",
    specialty: "Orthopedics",
    photo: "/placeholder.svg?height=200&width=200",
    rating: 4.6,
    reviewCount: 87,
    location: "Joint & Spine Institute",
    availableSlots: 2,
    tags: ["Sports Medicine", "Joint Replacement"],
  },
  {
    id: "doctor-5",
    name: "Dr. Aisha Patel",
    specialty: "Neurology",
    photo: "/placeholder.svg?height=200&width=200",
    rating: 4.9,
    reviewCount: 112,
    location: "Brain & Nerve Center",
    availableSlots: 4,
    tags: ["Headache Specialist", "Stroke Care"],
  },
  {
    id: "doctor-6",
    name: "Dr. Robert Kim",
    specialty: "Psychiatry",
    photo: "/placeholder.svg?height=200&width=200",
    rating: 4.7,
    reviewCount: 76,
    location: "Mental Health Associates",
    availableSlots: 6,
    tags: ["Anxiety", "Depression"],
  },
  {
    id: "doctor-7",
    name: "Dr. Lisa Thompson",
    specialty: "Gynecology",
    photo: "/placeholder.svg?height=200&width=200",
    rating: 4.8,
    reviewCount: 143,
    location: "Women's Health Clinic",
    availableSlots: 0,
    tags: ["Prenatal Care", "Women's Health"],
  },
  {
    id: "doctor-8",
    name: "Dr. David Martinez",
    specialty: "Ophthalmology",
    photo: "/placeholder.svg?height=200&width=200",
    rating: 4.5,
    reviewCount: 92,
    location: "Vision Care Center",
    availableSlots: 3,
    tags: ["Cataract Surgery", "Glaucoma"],
  },
  {
    id: "doctor-9",
    name: "Dr. Jennifer Lee",
    specialty: "Endocrinology",
    photo: "/placeholder.svg?height=200&width=200",
    rating: 4.6,
    reviewCount: 68,
    location: "Diabetes & Hormone Center",
    availableSlots: 4,
    tags: ["Diabetes", "Thyroid Disorders"],
  },
]

export const useDoctors = create<DoctorState>()(() => ({
  doctors: mockDoctors,
}))
