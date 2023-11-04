import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import Container from './components/Container/Container';
import Counter from './components/Counter/Counter';

function App() {

  const profesor = {
    nombre: "Stephan Laudern",
    rol: "Profesor"
  }

  const tutor = {
    nombre: "Arnaldo Cholga",
    rol: "Tutor"
  }

  return (
    <div>
      <NavBar />



      <Container>
        <ItemListContainer profesor={profesor.nombre} tutor={tutor.nombre} />
      </Container>
      <Counter/>

    </div>
  );
}

export default App;