import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FileDownloader } from "./components/FileDownloader";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Hero } from "./components/Hero";

// TODO:-

/**
 *
 * 1) Add Hero Page which shows all the tools that are available with a search bar. Each tool is represented in a card with a icon, title and a summary explaining what it does.
 * 2) Add routing so that each tools can be accessed individually.
 */
function App() {
  return (
    <>
      <Router>
          <Header />
          <main className="grow flex flex-col">
            <Routes>
              <Route path="/" element = {<Hero/>} />
              <Route path="/file-downloader" element = {<FileDownloader/>} />
            </Routes>
          </main>
          <Footer />
      </Router>
    </>
  );
}

export default App;
