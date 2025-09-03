import "./globals.css"
import Navbar from "@/components/header"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black antialiased transition-colors duration-300">
        <Navbar />
        {children}
      </body>
    </html>
  )
}