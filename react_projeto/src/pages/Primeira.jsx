import LinkSegunda from "../components/LinkSegunda";
import LinkTerceira from "../components/LinkTerceira";

const Primeira = () => {
    return (<div>
            <header>Tabela</header>
            <br/>
            <div style={{display:"flex"}}>
                <LinkSegunda /> <br/> 
                <LinkTerceira />
            </div>;

        </div>)
};

export default Primeira;