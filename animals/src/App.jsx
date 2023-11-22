import { useState } from "react";
import "./App.css";
import Cadastrar from "./components/Cadastro";
import Tarefa from "./components/Tarefa";
import Filtrar from "./components/Filtrar";

function App() {

  const [listaTarefas, setListaTarefas] = useState([
    { id: 1, descricao: "Espécie: Cachorro\nRaça: Buldogue\nÚltima vez visto: Mercado\nAnimal Perdido ou Procura-se: Procura-se", imagem: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQVR4OnzEsBOTa4Uu0cDYZAxIxMlWOzyzmgml5Zp-EMs1PT-2z0" },
    { id: 2, descricao: "Espécie: Gato\nRaça: Himalaia\nÚltima vez visto: Posto de Saúde\nAnimal Perdido ou Procura-se: Perdido", imagem: "https://doglife.sydle.one/api/1/blog/_classId/5d66ed07e7c98a556a499a36/_download/63e3cb62fc32a602eaa1561f/63e3cb2c4e788f1cc17c986c?accessToken=eyJhbGciOiJIUzUxMiJ9.eyJjb2RlIjoiNWU5NzY2Y2M0MThhMmI3MTc1NGQ4M2U5IiwibG9naW4iOiJibG9nLmRvZ2xpZmUiLCJuYW1lIjoiQmxvZyBEb2dMaWZlIiwiX29yZ0lkIjoiNWQ2YmJhM2IzZTM4ZTg3NjgzNGY5Y2NmIiwiX2NsYXNzIjp7ImNsYXNzUGFja2FnZUlkZW50aWZpZXIiOiJfc3lzdGVtIiwiX2lkIjoiMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyIiwiX2NsYXNzSWQiOiIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAiLCJjbGFzc0lkZW50aWZpZXIiOiJfY2xhc3MifSwiX2NyZWF0aW9uRGF0ZSI6IjIwMjAtMDUtMjBUMjA6NDg6MzIuNzMxWiIsIl9sYXN0VXBkYXRlRGF0ZSI6IjIwMjAtMTEtMDZUMTQ6MDQ6MTguMTAxWiIsIl9sYXN0VXBkYXRlVXNlciI6eyJjbGFzc1BhY2thZ2VJZGVudGlmaWVyIjoiX3N5c3RlbSIsIl9pZCI6IjVlYzU2ZTVkMTkwZGFkMTQ2NmMwNzZhZSIsIl9jbGFzc0lkIjoiMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyIiwiY2xhc3NJZGVudGlmaWVyIjoiX3VzZXIifSwiX2NsYXNzUmV2aXNpb24iOiJlY2YyYmFmNWM5YjQ5NWM5ZDZkYjE0ZmFjZWRjMjAxMCIsIl9yZXZpc2lvbiI6IjVmYTU1N2UyMDAxMmYyMGU1ZGIyZTQ3YyIsImFjdGl2ZSI6dHJ1ZSwib3JnYW5pemF0aW9uSWQiOiJkb2dsaWZlIiwiYXV0aGVudGljYXRpb25DbGFzcyI6Il9zeXN0ZW0uX3VzZXIiLCJ0b2tlblZlcnNpb24iOjE2LCJpc0FwcER5bmFtaWNBdXRoVG9rZW4iOmZhbHNlLCJpYXQiOjE2MTU4MTUzMDIsImlzcyI6Imp3Iiwic3ViIjoiYWNjZXNzVG9rZW4ifQ.94GMea_byYtt2quY3O9rCcK8bjymzaLjT2VQzWQkP-5nYtbp_34tcSEXN1xt1SG1ZnXgeo0RDL-iROTcIoH2wg" },
    { id: 3, descricao: "Espécie: Pássaro\nRaça: Arara Azul\nÚltima vez visto: Zoológico\nAnimal Perdido ou Procura-se: Perdido", imagem: "https://i.pinimg.com/originals/9c/81/dd/9c81dd22f16fbafe0476cec05225fb38.jpg" },
  ]);


  const addAnimal = (txtDescricao, txtImagem) => {
    const newTarefas = [...listaTarefas, {
      id: Math.floor(Math.random() * 1000000),
      descricao: txtDescricao,
      imagem: txtImagem,
      isFinalizado: false,
    }];

    setListaTarefas(newTarefas);
  };

  const concluirTarefa = (id) => {
    const newTarefas = listaTarefas.map((item) => {
      if (item.id === id) {
        item.isFinalizado = !item.isFinalizado;
      }
      return item;
    });

    setListaTarefas(newTarefas);
  };

  const removerTarefa = (id) => {
    const newTarefas = listaTarefas.filter((item) => item.id !== id);

    setListaTarefas(newTarefas);
  };

  const [filtrar, setFiltrar] = useState("Todos");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  return (
    <>
      <div className="app">
        <h1 className='titulo_cadastrar'>ENCONTRE SEU PET</h1>
        <br></br>

        <Cadastrar addAnimal={addAnimal} />

        <Filtrar filtrar={filtrar} setFiltrar={setFiltrar} search={search} setSearch={setSearch} setSort={setSort} />

        <div className='listaTarefas'>
          {
            listaTarefas
              .filter((item) => {
                if (item.descricao.toLowerCase().includes(search.toLowerCase())) {
                  return item;
                }
              })
              .filter((item) => {
                return filtrar === "Todos" ? true :
                  filtrar === "Concluidas" ? item.isFinalizado === true :
                    item.isFinalizado === false;
              })
              .sort((a, b) => {
                return sort === "Crescente" ? a.descricao.localeCompare(b.descricao) :
                  sort === "Decrescente" ? b.descricao.localeCompare(a.descricao) : false;
              })
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