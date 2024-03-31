import "./App.css";
//4 -Importação de componentes
import FirstComponent from "./components/FirstComponent";
//5 - Desestruturando props
import SecondComponent from "./components/SecondComponent";
import Destruturing, { Category } from "./components/Destruturing";
import State from "./components/State";
import { createContext } from "react";
import Context from "./components/Context";
//8-Type
type textOrNull = string | null;
type fixed = "Isso" | "Ou" | "Será";

///9-Context
interface IAppContext {
  language: string,
  framework:string,
  projects:number
}

export const AppContext = createContext<IAppContext | null>(null)

function App() {
  // 1- Variáveis
  const name: string = "Natália";
  const age: number = 39;
  const isStuding: boolean = true;

  // 2 - Funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}`;
  };

  // 8- type
  const myText: textOrNull = "Tem algum texto aqui";
  let mySecondText: textOrNull = null;

  mySecondText = "opa";

  const testingFixed: fixed = "Isso";

  //9-Context
  const contextValue:IAppContext = {
    language: "Javascript",
    framework: "express",
    projects: 5,
  };

  return (
    <AppContext.Provider value={contextValue}>
   <div>
      <h1>Typescript com React</h1>
      <h2>Nome: {name}</h2>
      <h2>Idade: {age}</h2>
      <h2>Está Estudando? {isStuding ? "Sim" : "Não"}</h2>
      <h2>{userGreeting(name)}</h2>
      <FirstComponent />
      <SecondComponent name="Segundo" />
      <Destruturing
        title="1ºpost"
        content="Conteúdo"
        commentsQty={2}
        tags={["typescript", "javascript"]}
        category={Category.Ts}
      />
      <State />
      {myText && <p>Tem texto na variável</p>}
      {mySecondText && <p>Tem texto na variável</p>}
      {testingFixed}
      <Context />
    </div>
    </AppContext.Provider>
 
  );
}

export default App;
