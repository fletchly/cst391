function Card (props: { albumTitle: string, albumDescription: string, imageUrl: string, buttonText: string }) {
    return (
        <>
            <div className="card" style={{width: '18rem'}}>
                <img src={props.imageUrl} className="card-img-top" alt={props.albumTitle}/>
                <div className="card-body">
                    <h5 className="card-title">{props.albumTitle}</h5>
                    <p className="card-text">{props.albumDescription}</p>
                    <button className="btn btn-primary">{props.buttonText}</button>
                </div>
            </div>
        </>
    )
}

export default Card