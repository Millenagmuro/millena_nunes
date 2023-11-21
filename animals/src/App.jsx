import { useState } from 'react';
import './App.css';
import Cadastrar from './components/Cadastro';
import Tarefa from './components/Tarefa';
import Filtrar from './components/Filtrar';

function App() {

const [listaTarefas, setListaTarefas] = useState ([
  { id: 1, descricao: "Buldogue / Cachorro/ Mercado/ Procura-se", imagem:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQVR4OnzEsBOTa4Uu0cDYZAxIxMlWOzyzmgml5Zp-EMs1PT-2z0"}
  
 
]);

const addAnimal = (txtDescricao, txtImagem) => {
  const newTarefas = [...listaTarefas,
  {
    id: Math.floor(Math.random()*1000000),
    descricao: txtDescricao,
    imagem: txtImagem,
    isFinalizado: false,
  },
  ];

  setListaTarefas(newTarefas);

};

  const concluirTarefa = (id) => {
    const newTarefas = [...listaTarefas]

  newTarefas.map((item) => {
    if(item.id === id){
      item.isFinalizado = !item.isFinalizado 
    }
  })
   
  setListaTarefas (newTarefas);

  }

const removerTarefa = (id) => {
  const newTarefas = [...listaTarefas].filter(item => item.id !== id);
  
  setListaTarefas(newTarefas);
}

const [filtrar, setFiltrar] = useState('Todos');
const [search, setSearch] = useState('');
const [sort, setSort] = useState('');

  

  return (
    <>
     <div className="app">
       <h1 className='titulo_cadastrar'>ENCONTRE SEU PET</h1>
       <br></br>


       <Cadastrar addAnimal={addAnimal}/>

       <Filtrar filtrar={filtrar} setFiltrar={setFiltrar} search={search} setSearch={setSearch} setSort={setSort}/>

       <div className='listaTarefas'>
        {
          listaTarefas
          .filter(item => {
            if(item.descricao.toLowerCase().includes(search.toLowerCase())){
              return item;
            }
          })
          .filter(item => filtrar ===  "Todos" ? true:
           filtrar === "Concluidas" ? item.isFinalizado == true:
            item.isFinalizado == false)
          .sort((a,b) => sort ==='Crescente' ? a.descricao.localeCompare(b.descricao) :
                         sort ==='Decrescente' ? b.descricao.localeCompare(a.descricao) : false)
          .map((item) => (
            <Tarefa key={item.id} item={item} concluirTarefa={concluirTarefa} removerTarefa={removerTarefa} />
          ))
        }
      </div>
     </div>
    </>
 ) 
}

export default App