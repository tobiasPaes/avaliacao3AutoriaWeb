function ConteudoCalendario(){
    return(
        <section className="container">
            <h5 className="text-center">CALENDÁRIO</h5>
            <article>
                <div className="text-center">2021.1</div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Data</th>
                            <th scope="col">Informação</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>14/05/2021 à 21/05/2021</td>
                            <td>Matrícula para o período 2021.1.</td>
                        </tr>
                        <tr>
                            <td>07/06/2021 à 08/06/2021</td>
                            <td>Re-matrícula para o período 2021.1.</td>
                        </tr>
                        <tr>
                            <td>07/06/2021</td>
                            <td>Início do período letivo 2021.1.</td>
                        </tr>
                        <tr>
                            <td>14/06/2021</td>
                            <td>Início do período trancamento de turma 2021.1.</td>
                        </tr>
                        <tr>
                            <td>16/07/2021</td>
                            <td>Término do período trancamento de turma 2021.1.</td>
                        </tr>
                        <tr>
                            <td>31/10/2021</td>
                            <td>Término do período letivo 2021.1.</td>
                        </tr>
                    </tbody>
                </table>
            </article>

            <article>
                <div className="text-center">2021.2</div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Data</th>
                            <th scope="col">Informação</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>30/09/2021 à 07/10/2021</td>
                            <td>Matrícula para o período 2021.2.</td>
                        </tr>
                        <tr>
                            <td>18/10/2021 à 20/10/2021</td>
                            <td>Re-matrícula para o período 2021.2.</td>
                        </tr>
                        <tr>
                            <td>04/10/2021</td>
                            <td>Início do período letivo 2021.2.</td>
                        </tr>
                        <tr>
                            <td>25/10/2021</td>
                            <td>Início do período trancamento de turma 2021.2.</td>
                        </tr>
                        <tr>
                            <td>26/11/2021</td>
                            <td>Término do período trancamento de turma 2021.2.</td>
                        </tr>
                        <tr>
                            <td>19/02/2022</td>
                            <td>Término do período letivo 2021.2.</td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </section>
    )
}

export default ConteudoCalendario;