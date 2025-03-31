import Header from "./components/Header";
import Logement from "./components/Logement";
import Avis from "./components/Avis";
import Footer from "./components/Footer";

function App() {
  return (
<<<<<<< HEAD
    <div className='app-container'>
      <Header />
      <main className='main-content'>
=======
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
>>>>>>> c09684b (modification demandees)
        <Logement />
        <Avis />
      </main>
      <Footer />
    </div>
  );
}

export default App;
