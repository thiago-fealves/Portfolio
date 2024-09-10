// Modules
import { LanguageProvider } from "./language";

// Components
import NavBar from "./navbar";
import Footer from "./footer";
import ScrollToTopButton from "./scrollbutton";

// Main Layout
export default function Layout({ children }) {
  return (
    <>
      <LanguageProvider>
        <NavBar />
        <main>{children}</main>
        <ScrollToTopButton />
        <Footer />
      </LanguageProvider>
    </>
  );
}
