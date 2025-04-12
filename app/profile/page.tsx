import Navbar from "@/components/navbar"

export default function Profile() {
  return (
    <div className="min-h-screen bg-gradient-blue">
      <Navbar />

      <main className="container mx-auto px-4 py-10 flex justify-center">
        <div className="bg-white rounded-xl p-6 md:p-10 w-full max-w-3xl shadow-lg">
          <h1 className="text-2xl md:text-3xl font-bold text-center text-blue-600 mb-1">
            SURAJ PASWAN
          </h1>
          <p className="text-center text-gray-500 text-sm md:text-base mb-8">
            it2024082@rcciit.org.in
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
            <ProfileField label="Registration Number" value="241170110502 OF 2024-2025" />
            <ProfileField label="Class Roll No" value="IT2024082" />
            <ProfileField label="Roll Number" value="11700224110" />
            <ProfileField label="Course" value="B.Tech-IT" />
            <ProfileField label="Semester" value="1" />
          </div>
        </div>
      </main>
    </div>
  )
}

function ProfileField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-gray-600 font-medium text-sm md:text-base">{label}:</p>
      <p className="font-semibold text-base md:text-lg">{value}</p>
    </div>
  )
}
