import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style404.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

function NotFound() {
  return (
    <div className="body404">
      <h1 className="h1404">Four Zero Four</h1>
      <h2 className="h2404"> Divirta-se enquanto procuramos sua página</h2>
      <iframe className="iframe404" title="bruaca" src="https://editor.p5js.org/jeferson.luiz.xavier/embed/D8GcsBiD6" />
    </div>
  );
}

ReactDOM.render(
  // <React.StrictMode>
  //   <Home />
  // </React.StrictMode>,
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      {/* o exact faz com o a aplicação exija o caminho exato até ali, se tiver mais coisa não encontrará */}
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/Categoria" component={CadastroCategoria} />
      <Route component={NotFound} />

      {/* <Route component={()=>(<div><h1>Four Zero Four</h1><h2> Divirta-se enquanto procuramos sua página</h2><iframe src="https://editor.p5js.org/jeferson.luiz.xavier/embed/D8GcsBiD6"></iframe></div>)} />  */}
      {/* como em todo switch temos o default, ou o 404, no caso é o último da linha */}

    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);

// todo o Home que é o componente principal, roda dentro do elemento root, que no caso é uma div lá no index.html
