function ConteudoPrincipal(){
    
    const inlineBlock={
        display:"inline-block",
    }
    const inline={
        display:"inline",    
    }
    const marginTop={
        marginTop:"110px",
    }
    const marginTop90={
        marginTop:"90px",
    }
    const marginLeft25={
        marginLeft:"25px",
    }
    const estiloArtigoPai={
        display:'block',
        width:'100%', 
        heigth:'300px'
    }
    const estiloArtigoFilho={
        width:'95%',
        height:'300px', 
        border:'1px solid black',
        paddingLeft: '5px',
    }
    const estiloParagrafo={
        textDecoration: 'underline',
    }
    
    return(
        <section className="container">
            <article>
                <h5 className="text-center">APRESENTACAO</h5>
                <figure style={inlineBlock}>
                    <img src="	https://arquivos.info.ufrn.br/arquivos/201407408477332148643a980769a39f0/capa.jpg" />
                </figure>
                <p style={inline}>O Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas (TADS) tem como objetivo a 
                    formação de profissionais capazes de compreender o processo de construção e reconstrução do 
                    conhecimento no domínio da análise e desenvolvimento de sistemas e, dessa forma, realizar atividades 
                    e concepção, especificação, projeto, implementação, avaliação, suporte e manutenção de sistemas 
                    computacionais, orientando sua ação na sociedade em geral e no mundo do trabalho em particular para 
                    a busca de soluções para o setor produtivo (notadamente o setor primário da economia) e para a 
                    melhoria da qualidade de vida das populações. Os profissionais formados atuarão na área de análise 
                    e desenvolvimento de sistemas, podendo exercer atividades no campo da análise de sistemas, engenharia 
                    de software, gerência de projetos e administração de bancos de dados.
                </p>
                <p className="container" style={marginTop}>
                    Além da formação geral em Tecnologia em Análise e Desenvolvimento de Sistemas, o curso tem objetivo 
                    de promover a integração entre as ciências agrárias e a denominada Tecnologia da Informação (TI) 
                    com suas diversas subáreas, obtendo-se assim uma gama de benefícios e ampliação do espectro de 
                    formação profissional em nível superior, considerando que um curso desta natureza permitirá ao 
                    egresso propor soluções tecnológicas em software e/ou hardware para as ciências agrárias ou, 
                    usando uma nomenclatura mais específica e mercadológica, para a cadeia do agronegócio e da 
                    agricultura familiar, sendo, nesse sentido estratégico para o desenvolvimento regional e nacional. 
                    Tais objetivos baseiam-se na formação de Tecnólogos com capacidade técnico-científica e visão 
                    integral, ética e humanística, comprometidos com o bem estar da sociedade envolvida e com o 
                    desenvolvimento sustentável, exercendo todas as competências relacionadas à profissão.
                </p>   
            </article>
            <article className="container" style={marginTop90}>
                <p className="text-primary">Coordenacao do Programa: <strong className="text-dark">Carla Fernandes da Costa Curvelo</strong></p>
                <p className="text-primary" style={marginLeft25}><small>Telefone/Ramal: <span className="text-dark">(84)3342-2297/227</span></small> </p>
                <p className="text-primary" style={marginLeft25}>Email: <a className="text-dark" href="mailto: tads@eaj.ufrn.br">tads@eaj.ufrn.br</a></p>
                <p className="text-primary">Título do Profissional: <strong className="text-dark">Nenhum conteúdo disponível até o momento</strong></p>
                <p className="text-primary">Área de Conhecimento CNPQ: <strong className="text-dark">Outra</strong></p>
                <p className="text-primary">Convênio Acadêmico: <strong className="text-dark">Nenhum conteúdo disponível até o momento</strong></p>
                <p className="text-primary">Modalidade de Curso: <strong className="text-dark">Presencial</strong></p>
                <p className="text-primary">Endereço Alternativo: <a className="text-dark" href="mailto: tads@eaj.ufrn.br"><strong>http://tads.eaj.ufrn.br/projects/</strong></a></p>
            </article>

            <article className="container" style={estiloArtigoPai}>
                <figure>
                    <img/>
                </figure>
                <article style={estiloArtigoFilho}>
                    <p className="text-center" style={estiloParagrafo}>Calendario</p>
                    Fique por dentro dos eventos relacionados ao nosso Calendário Acadêmico.
                    <ul>
                        <li>30/09/2021 - 07/10/2021<br/><em>Matrícula para o período 2021.2.</em></li>
                        <li>18/10/2021<br/><em>Início do período letivo 2021.2.</em></li>
                        <li>30/09/2021 - 07/10/2021<br/><em>Matrícula para o período 2021.2.</em></li>
                    </ul>
                    <div><a href="#">Clique aqui para ver mais do calendario</a></div>
                </article>

                <article style={estiloArtigoFilho}>
                    <p className="text-center" style={estiloParagrafo}>Noticia</p>
                    Veja abaixo as noticias referentes ao nosso Curso
                    <ul>
                        <li><a href="https://sigaa.ufrn.br/sigaa/public/curso/noticias_desc.jsf?lc=lc=pt_BR&id=94598200&noticia=155571796" className="text-dark">Calendário para projeto de TCC Ano/Semestre 2022.1</a></li>
                        <li><a href="https://sigaa.ufrn.br/sigaa/public/curso/noticias_desc.jsf?lc=lc=pt_BR&id=94598200&noticia=155571787" className="text-dark">Semana de defesa de Trabalhos de Conclusão de Curso - Ano/Semestre 2021.2</a></li>
                        <li><a href="https://sigaa.ufrn.br/sigaa/public/curso/noticias_desc.jsf?lc=lc=pt_BR&id=94598200&noticia=154957459" className="text-dark">Plano de curso das disciplinas de 2021.2</a></li>
                    </ul>
                </article>

            </article>
        </section>
    )
}

export default ConteudoPrincipal;