import "./App.css";
import Myfooter from "./components/MyfooterComponent";
import Mywelcome from "./components/MywelcomeComponent";
import MynavComponent from "./components/MynavComponent";
import AllthebookComponent from "./components/AllthebookComponent";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <header>
        <MynavComponent />
        <Mywelcome />
      </header>
      <main>
        <>
          <AllthebookComponent />
        </>
      </main>
      <footer>
        <Myfooter />
      </footer>
    </>
  );
}

export default App;
