import DoctorDirectory from "@/components/doctor-directory"

export default function DashboardPage() {
  return (
    <div className="space-y-6"> 
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Find a Doctor</h1>
        <p className="text-muted-foreground mt-2">
          Browse our network of trusted healthcare professionals and book your appointment
        </p>
      </div>
      <DoctorDirectory />
    </div>
  )
}
