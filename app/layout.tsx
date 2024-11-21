import "./globals.css";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/Footer";

export const metadata = {
  title: "ENSIAS Junior Entreprise",
  description: "ENSIAS Junior Entreprise Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_io/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
        <meta property="og:image" content="https://ensiasje.netlify.app/preview.png" />
        <meta property="og:title" content="ENSIAS Junior Entreprise" />
        <meta property="og:description" content="ENSIAS Junior Entreprise Website" />
        <meta property="og:url" content="https://ensiasje.netlify.app" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
