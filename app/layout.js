import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const JetBrainsMono = JetBrains_Mono({
  
  subsets: ["latin"],
});



export const metadata = {
  title: "Portfolio",
  description: "Website for Web-developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${JetBrainsMono.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
