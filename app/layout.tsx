import { walsheimPro } from "@/lib/font";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
// import { GoogleAnalytics } from "@/components/analytics/google-analytics";

import { Toaster } from "@/components/ui/sonner";
import { NavBar } from "@/components/navbar/navbar";
import { CallToAction } from "@/components/sections/layout/call-to-action";
import { Choice } from "@/components/sections/layout/choice";

import { Footer } from "@/components/footer/site-footer";
// import { CookieBanner } from "@/components/analytics/cookiebanner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" suppressHydrationWarning className={walsheimPro.className}>
      {/* <GoogleAnalytics GA_TRACKING_ID={process.env.GA_TRACKING_ID as string} /> */}
      <body className="min-h-screen bg-background antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />
          <NavBar />
          <div>{children}</div>
          <Choice />
          <CallToAction />
          <Footer />
          {/* <CookieBanner /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
