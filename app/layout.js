import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Daarick extensible",
  description: "Ruleta para el directo de daarick",
  icon: "/favicon.ico",
  keywords:
    "ruleta para streamers, ruleta interactiva, ruleta de premios, ruleta personalizada, ruleta online, ruleta en vivo, ruleta de sorteos, ruleta de suscriptores, ruleta de donaciones, ruleta de seguidores, ruleta de retos, ruleta de recompensas, ruleta de subs, ruleta de regalos, ruleta de bits, TheDaarick28, Daarick, streamer, entretenimiento en vivo, transmisiones en directo, juegos en vivo, streamer de videojuegos, contenido interactivo, premios en vivo, sorteos en directo, suscriptores, donaciones en vivo, comunidad de seguidores, retos en vivo, recompensas en vivo, transmisiones en línea, ruleta, juego de azar, casino, apuestas, entretenimiento, diversión, suerte, ganancias, premios, ruleta online, estrategia de ruleta, ruleta americana, ruleta europea, ruleta francesa, ruleta en vivo, ruleta móvil, bono de ruleta, casino en línea, casino en vivo, apuestas en línea, sistema de ruleta, cómo ganar en la ruleta, jugar a la ruleta, ruleta gratis, ruleta electrónica, ruleta virtual, ruleta de casino, ruleta clásica, ruleta moderna, ruleta multijugador, ruleta en 3D",
};

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
