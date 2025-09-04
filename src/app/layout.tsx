import "./globals.css"
import Navbar from "@/components/header"

export const metadata = {
  title: "Piyush — AI Engineer & Product Builder",
  description: "I build AI-powered apps and chatbots. Clean design × strong engineering.",
  keywords: ["Piyush", "AI engineer", "product builder", "RAG", "LangChain", "Next.js"],
  authors: [{ name: "Piyush", url: "https://your-site.com" }],
  openGraph: {
    title: "Piyush — AI Engineer & Product Builder",
    description: "I build AI-powered apps and chatbots. Clean design × strong engineering.",
    url: "https://your-site.com",
    siteName: "Piyush",
    images: [
      {
        url: "../images/profilepic1.png",
        width: 1200,
        height: 630,
        alt: "Piyush — AI Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Piyush — AI Engineer & Product Builder",
    description: "I build AI-powered apps and chatbots. Clean design × strong engineering.",
    images: ["../images/profilepic1.png"],
  },
  icons: {
    icon: "/pt.svg",          // favicon fallback (used by many browsers)
    shortcut: "/pt.svg",
    apple: "/apple-touch-icon.png", // optional iOS touch icon
  },
};

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