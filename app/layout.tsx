import "./globals.css";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/Footer";

export const metadata = {
  title: "Junior Entreprise ENSIAS",
  description: "Junior Entreprise ENSIAS Website",
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
        <meta
          property="og:image"
          content="https://ensiasje.netlify.app/preview.jpg"
        />
        <meta property="og:title" content="Junior Entreprise ENSIAS" />
        <meta
          property="og:description"
          content="Junior Entreprise ENSIAS Website"
        />
        <meta property="og:site_name" content="Junior Entreprise ENSIAS" />
        <meta property="og:url" content="https://ensiasje.netlify.app" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="keywords" content="ENSIAS, Junior, Entreprise, JE ENSIAS, Junior Entreprise ENSIAS, JEE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Junior Entreprise ENSIAS" />
        <meta
          name="twitter:description"
          content="Junior Entreprise ENSIAS Website"
        />
        <meta
          name="twitter:image"
          content="https://ensiasje.netlify.app/preview.jpg"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
