import './App.css';

//Importando um componente externo
import HelloWorldDIO from './components/HelloWorldDIO';
import HelloWorldDIOClass from './components/HelloWorldDIOClass';
import HelloPeople from './components/HelloPeople';

//Função que agrupa todos os componentes que serão renderizados
function App() {

  //Retorno da função
  return (
    <div className="App">

      {/* Chamando o componente importado */}
      <HelloWorldDIO />
      <HelloWorldDIOClass />
      <HelloPeople name="Leandro" age="27" /> 
    </div>
  );
}

//Exportar o componente App para ser renderizado
export default App;