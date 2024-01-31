import "./App.css";
import Myfooter from "./components/MyfooterComponent";
import Mywelcome from "./components/MywelcomeComponent";
import MynavComponent from "./components/MynavComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import BooklistComponent from "./components/BooklistComponent";
import ArrayofBook from "../src/data/history.json";

function App() {
  return (
    <>
      <header>
        <MynavComponent />
      </header>
      <main className="bg-light">
        <Mywelcome />
        <h1 id="allbook" className="text-center">
          All the books
        </h1>
        <BooklistComponent books={ArrayofBook} />
      </main>
      <footer>
        <Myfooter />
      </footer>
    </>
  );
}

export default App;
