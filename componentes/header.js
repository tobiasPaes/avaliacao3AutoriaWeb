function Cabeçalho(){
    const estilo = {
        marginTop: '0.15rem',
    };
    const estilo1 ={
        marginLeft: '3.5rem'
    };
    const estilo2 ={
        marginLeft:'1.5rem'
    }
    const estilo3={
        marginLeft:'40px'
    }
    
    return(
        <header className="container-fluid bg-dark text-light">
           <div className="d-flex">
                <a href="https://sigaa.ufrn.br/sigaa/public/home.jsf" style={estilo} className="text-light">SIGAA - Sistema Integrado de Gestão de Atividades Acadêmicas</a>
                <div className="dropdown" style={estilo2}>  {/*antigo span*/}
                    <button style={estilo, estilo1} className="btn btn-outline-light btn-sm dropdown-toggle" type="button" id="idiomas" data-bs-toggle="dropdown"  aria-expanded="false">
                        Idiomas
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="idiomas">
                        <li><a className="dropdown-item" href="#">ingles</a></li>
                        <li><a className="dropdown-item" href="#">espanhol</a></li>
                        <li><a className="dropdown-item" href="#">frances</a></li>
                    </ul>
                </div>
            </div>
            <div className="float-end" style={estilo3}>
                <a href="https://ufrn.br/" >
                    <img src="https://www.sigaa.ufrn.br/sigaa/public/programa/img/instituicao_programa.png" width="102px" height="98px" alt="imagem para entrar no portal da ufrn"/>
                </a>
            </div>
        </header>
    )
} 

export default Cabeçalho;