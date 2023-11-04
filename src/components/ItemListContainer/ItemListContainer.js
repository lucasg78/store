import { Button } from "react-bootstrap"

export const ItemListContainer = ({profesor, tutor}) => {
    return (
        <section>
            <hr/>
            <h3>Profesor {profesor} y Tutor {tutor}</h3> <br/>
            <Button variant="dark" size="xm">ENTER</Button>
        </section>
    )
}