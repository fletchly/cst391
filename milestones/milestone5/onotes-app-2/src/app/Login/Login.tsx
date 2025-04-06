import {ChangeEvent, FormEvent, useState} from "react";
import {doLogin} from "../../service/AuthService.ts";
import {useNavigate} from "react-router-dom";

export function Login() {
    const [formData, setFormData] = useState({ username: "", password: "" })
    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>)=> {
        e.preventDefault();
        const token = await doLogin(formData.username, formData.password)

        if (token) {
            alert(token);
        } else {
            alert("Invalid credentials")
        }

        navigate('/test')
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