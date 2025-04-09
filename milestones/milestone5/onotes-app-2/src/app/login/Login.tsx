import {ChangeEvent, FormEvent, useState} from "react";

export function Login() {
    const [formData, setFormData] = useState({ username: "", password: "" })

    const handleSubmit = async (e: FormEvent<HTMLFormElement>)=> {
        e.preventDefault();

        alert(`${formData.username} - ${formData.password}`)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>)=> {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({
           ...formData,
           [name]: value,
        });
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type={"text"} name={"username"} value={formData.username}/>
                <input onChange={handleChange} type={"password"} name={"password"} value={formData.password}/>
                <button type={"submit"}>Submit</button>
            </form>
        </>
    );
}