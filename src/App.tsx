import { Navbar } from "./components/Navbar.tsx";
import { Footer } from "./components/Footer.tsx";
import { AppRouter } from "./router/AppRouter.tsx";
import './style/App.css'

export function App(){
  return (
    <>
      <Navbar />
      <AppRouter />
      <Footer />
    </>
  );
};