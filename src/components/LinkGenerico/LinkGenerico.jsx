import { MeuA } from "./style";

const LinkGenerico = (props) => (
    <MeuA href={props.endereco}>{props.texto}</MeuA>
);



export default LinkGenerico;