import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([{ nome: 'teste' }]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor, // sobrepoe o valor da key especificada em relacao ao array recebido previamente
    });
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
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

          setValues(valoresIniciais);
        }}
      >
        <FormField

          label="Nome"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />
        <div>
          <label htmlFor="desc">
            Descrição
            <textarea
              id = "desc"
              type="text"
              value={values.descricao}

              name="descricao"
              onChange={handleChange}
            />
          </label>
        </div>
        <FormField
          type="color"
          name="cor"
          label="Cor"
          value={values.cor}
          onChange={handleChange}
        />

        {/* <div>
            <label>
                Cor
                <input type="color"
                    value={values.cor}
                    name = 'cor'
                    onChange = {handleChange}
                    // onChange={function funcaoHandlerQueOErroPediu(infosDoEvento) {
                    //     // console.log('[infosDoEvento]', infosDoEvento.target.value);
                    //     // console.log('[nomeCategoria]', nomeCategoria);
                    //     // setValues(infosDoEvento.target.value)
                    //     setValue('cor', infosDoEvento.target.value);
                    // }}
                />
            </label>
        </div> */}
        <Button>Cadastrar</Button>

      </form>
      <ul>
        {categorias.map((categoria, indice) => (
          <li key={`${categoria}${indice}`}>
            {categoria.nome}
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
