import LoginForm from "@/components/login-form"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-600">Invitro Medical</h1>
          <p className="mt-2 text-gray-600">Book appointments with top healthcare professionals</p>
        </div>
        <LoginForm />
      </div>
    </main>
  )
}
