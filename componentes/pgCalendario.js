import ConteudoCalendario from "./conteudoPgCalendario";
import Rodape from "./footer";
import Cabeçalho from "./header";
import Info from "./infoGeral";
import Menu from "./nav";


const PgCalendario = () => {
    return (
        <>
            <Cabeçalho/>
            <Info/>
            <Menu/>
            <ConteudoCalendario/>
            <Rodape/>
        </>
    )
}

export default PgCalendario;