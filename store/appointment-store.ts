import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { Appointment } from "@/types"

interface AppointmentState {
  appointments: Appointment[]
  addAppointment: (appointment: Appointment) => void
  cancelAppointment: (id: string) => void
}

export const useAppointments = create<AppointmentState>()(
  persist(
    (set) => ({
      appointments: [],
      addAppointment: (appointment) =>
        set((state) => ({
          appointments: [...state.appointments, appointment],
        })),
      cancelAppointment: (id) =>
        set((state) => ({
          appointments: state.appointments.filter((app) => app.id !== id),
        })),
    }),
    {
      name: "appointments-storage",
    },
  ),
)
