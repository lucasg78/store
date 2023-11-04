import "./Container.scss"

const Container = ( {children}) => {

    return (
        <div className="container my-5">
            <h2 className="fs-1 fw-bold">Welcome</h2>
            {children}
            <hr/>
        </div>
    )
}

export default Container