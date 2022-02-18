import { Link } from "react-router-dom";


function Menu(){

    return(
        <nav className="container navbar navbar-expand-lg navbar-dark bg-dark ">
            <a href="#" class="navbar-brand">
                MENU
            </a>
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                <span className=" navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="menu">
                <ul className="navbar-nav">
                    <li className="nav-item"> 
                        <Link to="/pgApresentacao"><a className="nav-link js-scroll-trigger">Apresentação</a></Link> 
                    </li>

                    <li className="nav-item"> 
                        <Link to="/pgCalendario"><a className="nav-link js-scroll-trigger">Calendário</a></Link> 
                    </li>

                    <li className="nav-item"> 
                        <Link to="/pgProjPed"><a className="nav-link js-scroll-trigger">Projeto Pedagógico do Curso</a></Link> 
                    </li>

                    <li className="nav-item"> 
                        <Link to="/pgNoticias"><a className="nav-link js-scroll-trigger">Notícias</a></Link> 
                    </li>

                    <li className="nav-item"> 
                        <Link to="/pgDocumentos"><a className="nav-link js-scroll-trigger">Documentos</a></Link> 
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Menu;