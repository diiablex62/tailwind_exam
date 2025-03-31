import Header from "./components/Header";
import Logement from "./components/Logement";
import Avis from "./components/Avis";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Logement />
        <Avis />
      </main>
      <Footer />
    </div>
  );
}

export default App;
