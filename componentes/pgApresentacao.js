import ConteudoPrincipal from "./conteudoPgPrincipal";
import Rodape from "./footer";
import Cabeçalho from "./header";
import Info from "./infoGeral";
import Menu from "./nav";


const PgApresentacao = () => {
    return (
        <>
            <Cabeçalho/>
            <Info/>
            <Menu/>
            <ConteudoPrincipal/>
            <Rodape/>
        </>
    )
}

export default PgApresentacao;