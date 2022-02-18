import ConteudoPPC from "./conteudoPgProjPed";
import Rodape from "./footer";
import Cabeçalho from "./header";
import Info from "./infoGeral";
import Menu from "./nav";


const PgProjPed = () => {
    return (
        <>
            <Cabeçalho/>
            <Info/>
            <Menu/>
            <ConteudoPPC/>
            <Rodape/>
        </>
    )
}

export default PgProjPed;