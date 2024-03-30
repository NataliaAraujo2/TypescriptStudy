import "./App.css";
//Importação de componentes
import FirstComponent from "./components/FirstComponent";

function App() {
  // 1- Variáveis
  const name: string = "Natália";
  const age: number = 39;
  const isStuding: boolean = true;

  // 2 - Funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}`
  }

  
  return (
    <div>
      <h1>Typescript com React</h1>
      <h2>Nome: {name}</h2>
      <h2>Idade: {age}</h2>
      <h2>Está Estudando? {isStuding ? "Sim" : "Não"}</h2>
      <h2>{userGreeting(name)}</h2>
      <FirstComponent />
    </div>
  );
}

export default App;
