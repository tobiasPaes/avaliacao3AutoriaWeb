function Info(){
    const estiloSection = {
        marginBotton: '10px',
        marginTop: '1rem',
        
    } 
    const inlineBlock ={
        display: 'inline-block',
    }
    const marginEsquerda ={
        marginLeft:'1.2rem'
    }
    const novaMargemEsquerda ={
        marginLeft:'3.5rem'
    }

    return(
        <section className="container bg-light" style={estiloSection}>
            <article style={inlineBlock}>
                <a href="#">
                    <img src="https://arquivos.info.ufrn.br/arquivos/201913023034eb6318005a55275305503/nometads.png" width="190px" height="96px"/>
                </a>
            </article>
            <article style={inlineBlock}>
                <div style={marginEsquerda}>
                    <a href="https://sigaa.ufrn.br/sigaa/public/home.jsf">CURSO DE ANALISE E DESENVOLVIMENTO DE SISTEMAS/EAJ</a>
                </div>
                <div>
                    <a className="text-dark" href="https://sigaa.ufrn.br/sigaa/public/home.jsf">ESCOLA AGRICOLA DE JUNDIAI - EAJ</a>
                    <span style={novaMargemEsquerda} className="text-primary">Telefone/Ramal:</span><span>(84) 3342-2297/227</span>
                </div>
                <div>
                    <a href="#">http://www.graduacao.ufrn.br/tads</a>
                </div>
            </article>

        </section>
    )
}

/*
 
*/
export default Info;