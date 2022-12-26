import "./globals.css";
import MainNavigation from "../components/layout/main-navigation";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <MainNavigation />
        <main>{children}</main>
        <div id="notification"></div>
      </body>
    </html>
  );
}
