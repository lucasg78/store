import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
/* import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'; */
import Container from './components/Container/Container';
import Counter from './components/Counter/Counter';
import Counter2 from './components/Counter/Counter2';
import Counter3 from './components/Counter/Counter3';

function App() {

/*   const profesor = {
    nombre: "Stephan Laudern",
    rol: "Profesor"
  }

  const tutor = {
    nombre: "Arnaldo Cholga",
    rol: "Tutor"
  } */

  return (
    <div>
      <NavBar />
{/*       <ItemListContainer profesor={profesor.nombre} tutor={tutor.nombre} /> */}
      <Container/>
      <Counter/>
      <Counter2/>
      <Counter3/>
    </div>
  );
}

export default App;