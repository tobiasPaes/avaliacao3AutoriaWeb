import react from "react";
import reactDom from "react-dom";
import App from "./componentes/App";

import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import PgApresentacao from "./componentes/pgApresentacao";
import PgCalendario from "./componentes/pgCalendario";
import PgProjPed from "./componentes/pgProjPed";
import PgNoticia from "./componentes/pgNoticias";
import PgDocumentos from "./componentes/pgDocumentos";

reactDom.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />    
            <Route path="pgApresentacao" element={<PgApresentacao/>}/>
            <Route path="pgCalendario" element={<PgCalendario/>}/>
            <Route path="pgProjPed" element={<PgProjPed/>}/>
            <Route path="pgNoticias" element={<PgNoticia/>}/>
            <Route path="pgDocumentos" element={<PgDocumentos/>}/>
        </Routes>
    </BrowserRouter>, 
    document.getElementById("root"))