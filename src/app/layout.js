import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "Assignment-14",
  description: "NextJS Learning with OSTAD team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-tl from-teal-50 via-slate-50 to-indigo-50 min-h-screen">
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}
