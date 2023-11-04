import "./Container.scss"

const Container = ( {children}) => {

    return (
        <div className="container my-5">
            <h2>Bienvenidos</h2>
            {children}
        </div>
    )
}

export default Container