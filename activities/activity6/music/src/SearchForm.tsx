import {SetStateAction, useState} from "react";

export const SearchForm = (props: {
    onSubmit(inputText: string): void;
}) => {
    const [inputText, setInputText] = useState("");
    const handleChangeInput = (event: { target: { value: SetStateAction<string>; }; }) => {
        setInputText(event.target.value);
        console.log(inputText);
    };
    const handleFormSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        props.onSubmit(inputText);
    };
    return (<div>
        <form onSubmit={handleFormSubmit}>
            <div className='form-group'><label htmlFor='search-term'>Search for</label> <input type='text'
                                                                                               className='form-control'
                                                                                               placeholder='Enter search term here'
                                                                                               onChange={handleChangeInput}/>
            </div>
        </form>
    </div>);
};