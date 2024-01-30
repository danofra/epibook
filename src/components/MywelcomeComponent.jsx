import Alert from "react-bootstrap/Alert";

function Mywelcome() {
  return (
    <Alert variant="success" className="m-2 text-center">
      <Alert.Heading>
        Hey tu, se sei arrivato fin qui, vuol dire che vuoi conoscere la storia
        del tuo paese!
      </Alert.Heading>
      <p>
        Una vasta gamma di libri storici e di storie che ti permetteranno di
        capire meglio la tua cultura e i tuoi tradizionali.
      </p>
      <hr />
      <p>Scorri giù e scoprirai....</p>
    </Alert>
  );
}

export default Mywelcome;