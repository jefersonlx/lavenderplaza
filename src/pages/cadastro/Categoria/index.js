import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import userForm from '../../../hooks/userForm';

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, values, clearForm } = userForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL = window.location.href.includes('localhost')
      ? 'http://localhost:3001/categorias'
      : 'https://lavenderplaza.herokuapp.com/categorias';// url local vs publicada no heroku

    fetch(URL)
      .then(async (respostaDoServer) => {
        if (respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          setCategorias([
            ...resposta,
          ]);
          return;
        }
        throw new Error('Não foi possível pegar os dados');
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.titulo}
      </h1>
      <form
        style={{ background: values.cor }}
        onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();// previne execução do método original do on submit
          // console.log('testeSubmit');
          setCategorias([
            ...categorias, // o ... serve para pegar o array inteiro, no nosso caso esta sendo criado o array todo de novo, por isso pegar o velho e juntar ao novo
            values,
          ]);

          clearForm();
        }}
      >
        <FormField

          label="Titulo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />
        <FormField
          label="Descrição"
          name="descricao"
          type="textarea"
          value={values.descricao}
          onChange={handleChange}
        />
        <FormField
          type="color"
          name="cor"
          label="Cor"
          value={values.cor}
          onChange={handleChange}
        />
        <Button>Cadastrar</Button>

      </form>
      {categorias.length === 0 && (
      <div>
        Loadeando...
      </div>
      )}
      <ul>
        {categorias.map((categoria, indice) => (
          <li key={`${categoria}${indice}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>
      <Link to="/">
        Ir para Home
      </Link>

    </PageDefault>

  );
}

export default CadastroCategoria;
