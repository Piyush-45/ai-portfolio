import "./globals.css";
import Navbar from "@/components/header";

export const metadata = {
  title: "Piyush — AI Engineer & Product Builder",
  description: "I build AI-powered apps and chatbots. Clean design × strong engineering.",
  keywords: ["Piyush", "AI engineer", "product builder", "RAG", "LangChain", "Next.js"],
  authors: [{ name: "Piyush", url: "https://piyush.live" }],

  icons: {
    icon: "/favicon.png",              // favicon (16x16 or 32x32 PNG works fine)
    apple: "/apple-touch-icon.png",    // optional (for iOS homescreen)
    shortcut: "/favicon.png",          // fallback for some browsers
  },

  openGraph: {
    title: "Piyush — AI Engineer & Product Builder",
    description: "I build AI-powered apps and chatbots. Clean design × strong engineering.",
    url: "https://piyush.live",
    siteName: "Piyush Tyagi",
    images: [
      {
        url: "/profilepic.png",        // ✅ use `/` (not ../images) because files in `public/`
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
    images: ["/profilepic.png"], // ✅ add correct twitter image
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
  );
}
