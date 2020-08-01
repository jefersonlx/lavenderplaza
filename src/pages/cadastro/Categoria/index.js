import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';



function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: ''
    }
    const [categorias, setCategorias] = useState([{ nome: 'teste' }]);
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor // sobrepoe o valor da key especificada em relacao ao array recebido previamente
        })
    }

    //não deu certo poque a desconstrução do .target fez com que o getAttribute perdesse o contexto 
    // function handleChange(infosDoEvento) {
    //     const { getAttribute, value } = infosDoEvento.target;
    //     setValue(
    //         getAttribute('name'),
    //         value
    //     );
    // }
    //primeira versão do handle
    function handleChange(infosDoEvento) {
        setValue(
            infosDoEvento.target.getAttribute('name'),
            infosDoEvento.target.value
        );
    }
    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>
            <form style={{ background: values.cor }} onSubmit={function handleSubmit(infosDoEvento) {
                infosDoEvento.preventDefault();// previne execução do método original do on submit
                //console.log('testeSubmit');
                setCategorias([
                    ...categorias,// o ... serve para pegar o array inteiro, no nosso caso esta sendo criado o array todo de novo, por isso pegar o velho e juntar ao novo 
                    values
                ])

                setValues(valoresIniciais);
            }}>
              <FormField 
              type = 'text'
              label = 'Nome'
              name = 'nome' 
              value ={ values.nome}
              onChange = {handleChange}
              />
                <div>
                    <label>
                        Descrição
                        <textarea type="text"
                            value={values.descricao}
                            
                            name = 'descricao'
                            onChange = {handleChange}
                            // onChange={function funcaoHandlerQueOErroPediu(infosDoEvento) {
                            //     // console.log('[infosDoEvento]', infosDoEvento.target.value);
                            //     // console.log('[nomeCategoria]', nomeCategoria);  
                            //     // setValues(infosDoEvento.targekt.value)
                            //     setValue('descricao', infosDoEvento.target.value);
                            // }}
                        />
                    </label>
                </div>
                <FormField 
                type = 'color'
                name = 'cor'
                label = 'Cor'
              value ={ values.cor}
              onChange = {handleChange}
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
                <button>Cadastrar</button>

            </form>
            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                }
                )
                }
            </ul>
            <Link to="/">
                Ir para Home
        </Link>

        </PageDefault>

    );
}

export default CadastroCategoria;