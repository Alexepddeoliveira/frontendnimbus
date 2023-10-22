import LinkGenerico from "../components/LinkGenerico/LinkGenerico";
import LinkSegundo from "../components/LinkSegundo";

const Primeiro = () => {
    const dados = [
        ["https://www.ibmec.br/", "ibmec"],
        ["https://estude.ibmec.br/ibmec-hubs", "ibmec-hubs"],
        ["https://www.mundoverde.com.br/", "mundo-verde"]
    ];

    const elementos = dados.map(
        (item, i) => (
                <LinkGenerico
                    key={i}
                    texto={item[1]}
                    endereco={item[0]}
                />
        )
    )
    return (<div>
                <h1>Primeiro</h1>
                 {elementos}
            </div>);
};

export default Primeiro;