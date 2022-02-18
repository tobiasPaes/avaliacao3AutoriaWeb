import ConteudoDocumento from "./conteudoPgDoc";
import Rodape from "./footer";
import Cabeçalho from "./header";
import Info from "./infoGeral";
import Menu from "./nav";


const PgDocumentos = () => {
    return (
        <div>
            <Cabeçalho/>
            <Info/>
            <Menu/>
            <ConteudoDocumento/>
            <Rodape/>
        </div>
    )
}

export default PgDocumentos;