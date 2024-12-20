// import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { BackgroundGradientAnimation } from "@/components/ui/bg-gradient-animation";
import { AppProvider } from "@/utils/AppContext";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

const font = Open_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>AI Steel Weight Calculator | Metal Zone</title>
        <link rel="icon" href="favicon.ico" sizes="any" />
        <meta name="title" content="AI Steel Weight Calculator" />
        <meta
          name="description"
          content="AI powered steel weight calculator by Metal Zone General Trading LLC"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://calculator.metalzoneuae.com/"
        />
        <meta property="og:title" content="AI Steel Weight Calculator" />
        <meta
          property="og:description"
          content="AI powered steel weight calculator by Metal Zone General Trading LLC"
        />
        <meta
          property="og:image"
          content="https://calculator.metalzoneuae.com/ss.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://calculator.metalzoneuae.com/"
        />
        <meta property="twitter:title" content="AI Steel Weight Calculator" />
        <meta
          property="twitter:description"
          content="AI powered steel weight calculator by Metal Zone General Trading LLC"
        />
        <meta
          property="twitter:image"
          content="https://calculator.metalzoneuae.com/ss.png"
        />
      </head>
      <body
        className={
          font.className +
          " flex flex-col items-center text-black dark:text-white"
        }
      >
        <AppProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <BackgroundGradientAnimation containerClassName="bg-white dark:bg-zinc-900" />
            <div className="absolute w-screen h-screen flex flex-col items-center z-0 overflow-hidden overflow-y-auto">
              <Navbar />
              {children}
            </div>
          </ThemeProvider>
        </AppProvider>
      </body>
    </html>
  );
}
