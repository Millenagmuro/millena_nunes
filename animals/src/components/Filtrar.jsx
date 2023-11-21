function Filtrar({Filtrar, setFiltrar, search, setSearch, setSort}){
    return (
        <>
        <h2>Filtrar</h2>
        <div className="filtrar">
            <input type="text" placeholder="Digite para pesquisar"
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
            />
            <select value={Filtrar} onChange={(e) => setFiltrar(e.target.value)}>
                <option value="Todos">Todos</option>
                <option value="Concluidas">Encontrados</option>
                <option value="Pendentes">Em procura</option>
            </select>
            <button type="button" onClick={() => setSort('Crescente')}><span class="material-symbols-outlined">
arrow_drop_down
</span></button>
            <button type="button" onClick={() => setSort('Decrescente')}><span class="material-symbols-outlined">
arrow_drop_up
</span></button>
        </div>
       </>
    )
}

export default Filtrar;