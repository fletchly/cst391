import {useEffect, useState} from 'react';
import Card from './Card';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import albums from './albums.json'
import {SearchForm} from "./SearchForm.tsx";

interface Album {
    id: number;
    artist: string;
    title: string;
    description: string;
    year: number;
    image: string;
}

const App = () => {
    const [albumList, setAlbumList] = useState<Album[]>([]);
    const [searchPhrase, setSearchPhrase] = useState('');

    const updateSearchResults = (phrase: string) => {
        console.log(`phrase is ${phrase}`);
        setSearchPhrase(phrase);
    }

    useEffect(() => {
        setAlbumList(albums);
    }, [albumList]);

    const renderedList = () => {
        return albumList.map((album) => {
            if (
                album.description.toLowerCase().includes(searchPhrase.toLowerCase()) ||
                searchPhrase === ''
            )
                return (
                    <Card key={album.id}
                          albumTitle={album.title}
                          albumDescription={album.description}
                          buttonText='OK'
                          imageUrl={album.image}
                    />
                );
            else console.log(`Does not match ${searchPhrase}`)
        });
    };
    return (
        <>
            <div className={'container'}>
                <SearchForm onSubmit={updateSearchResults}/>
            </div>
            <div className='container d-flex flex-wrap'>{renderedList()}</div>
        </>
    );
};
export default App;