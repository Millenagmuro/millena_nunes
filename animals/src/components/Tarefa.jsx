function Tarefa({item, concluirTarefa, removerTarefa}) {
    return (
        <div className='tarefa'>
            
        <span style={{textDecoration: item.isFinalizado ? 'line-through' : ''}}>{item.descricao}</span>
        <img src={item.imagem} alt={item.descricao} style={{width:'150px', height:'150px', borderRadius:'10px'}}/>
        <span>{item.descrcao}</span>
            <div className='acoes'>
                <button className='botaoEncontrado' onClick={() => concluirTarefa(item.id)}>Encontrado</button>
                 
                <button className='botaoProcura' onClick={() => removerTarefa(item.id)}>Em procura</button>
                <button className='botaoremover' onClick={() => removerTarefa(item.id)}>Procurando</button>
             </div>
         </div>
    )

}

export default Tarefa