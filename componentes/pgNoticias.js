import ConteudoNoticias from "./conteudoPgNoticias";
import Rodape from "./footer";
import Cabeçalho from "./header";
import Info from "./infoGeral";
import Menu from "./nav";


const PgNoticias = () => {
    return (
        <div>
            <Cabeçalho/>
            <Info/>
            <Menu/>
            <ConteudoNoticias/>
            <Rodape/>
        </div>
    )
}

export default PgNoticias;