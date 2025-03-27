import {ChangeEvent, FormEvent, useState} from "react";

function Navbar() {
    const [search, setSearch] = useState({keyword: ""});

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name
        const value = e.target.value
        setSearch({
            ...search,
            [name]: value
        });
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(search)
        window.location.assign('/search/' + search.keyword);
    }

    return (
        <nav className={"navbar fixed-top navbar-expand-lg bg-body border-bottom"}>
            <div className={"container-fluid"}>
                <a href={"/"} className={"navbar-brand"}>
                    <i className='bx bx-note'></i>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex" role="search" onSubmit={handleSubmit}>
                        <input name={"keyword"} className="form-control me-2" type="search" placeholder="Search Notes" aria-label="Search" onChange={handleChange}/>
                        <button className="btn btn-outline-dark" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar