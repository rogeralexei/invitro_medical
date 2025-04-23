"use client"

import { useAppointments } from "@/store/appointment-store"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon, ClockIcon, MapPinIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { formatDate } from "@/lib/utils"

export default function AppointmentsPage() {
  const { appointments } = useAppointments()

  if (appointments.length === 0) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Appointments</h1>
          <p className="text-muted-foreground mt-2">View and manage your upcoming appointments</p>
        </div>
        <Card className="border-dashed">
          <CardContent className="pt-6 text-center">
            <div className="flex flex-col items-center justify-center space-y-3 py-12">
              <CalendarIcon className="h-12 w-12 text-muted-foreground/50" />
              <div className="space-y-1">
                <h3 className="text-xl font-semibold">No appointments yet</h3>
                <p className="text-muted-foreground">Book an appointment with one of our doctors to get started</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">My Appointments</h1>
        <p className="text-muted-foreground mt-2">View and manage your upcoming appointments</p>
      </div>

      <Tabs defaultValue="upcoming">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {appointments.map((appointment) => (
              <Card key={appointment.id} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={appointment.doctor.photo || "/placeholder.svg"} alt={appointment.doctor.name} />
                      <AvatarFallback>{appointment.doctor.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base">{appointment.doctor.name}</CardTitle>
                      <CardDescription>{appointment.doctor.specialty}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <CalendarIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{formatDate(appointment.date)}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <ClockIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{appointment.time}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPinIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{appointment.doctor.location}</span>
                    </div>
                    <Badge variant="outline" className="mt-2">
                      Confirmed
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="past">
          <div className="rounded-md bg-muted/50 p-8 text-center">
            <h3 className="text-lg font-medium">No past appointments</h3>
            <p className="text-muted-foreground mt-2">Your past appointment history will appear here</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
