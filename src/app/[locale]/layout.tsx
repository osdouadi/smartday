import "../../styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { enUS } from "@clerk/localizations";
import { localizationAR } from "@/locale/clerk/ar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata = {
  title: "SmartDay",
  description: "شركة SmartDay للحلول الأمنية",
  icons: {
    icon: "/assets/favicon.ico",
  },
  verification: { google: "a2Zmz4uFlMsvSoei9YoR7bR3saW_Hot0f6FchXQrS1Q" },
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <NextIntlClientProvider messages={messages}>
      <ClerkProvider
        appearance={{
          elements: {
            footer: "hidden",
          },
          baseTheme: shadesOfPurple,
          variables: {
            colorPrimary: "#fefefe",
            colorBackground: "#1e6281",
            colorInputBackground: "#d1d5db",
            colorInputText: "#000",
          },
        }}
        localization={locale === "ar" ? localizationAR : enUS}
      >
        <html lang={locale} suppressHydrationWarning>
          <body
            dir={locale === "ar" ? "rtl" : "ltr"}
          >
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <Toaster />
            </ThemeProvider>
          </body>
          <script
            src="//code.tidio.co/ngupm52t6m5kabpkssu84ajalg8o3sdr.js"
            async
          ></script>
        </html>
      </ClerkProvider>
    </NextIntlClientProvider>
  );
}
