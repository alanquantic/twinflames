import MirroredContactPage from "./pages/contactcopy/MirroredContactPage.jsx";
import MirroredHomePage from "./pages/sitecopy/MirroredHomePage.jsx";

function App() {
  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";

  if (pathname === "/contacto") {
    return <MirroredContactPage />;
  }

  return <MirroredHomePage />;
}

export default App;
