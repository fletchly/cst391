import axios from 'axios';
import {Note} from "../model/Note.ts";

const BASE_URL = 'http://localhost:5001';

const api= axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getAllNotes = async () => {
    const response = await api.get('/notes');
    return response.data as Note[];
};

export const getNote = async (id: string) => {
    const response = await api.get(`/notes/${id}`);
    return response.data[0] as Note;
};

export const createNote = async (note: Note) => {
    const response = await api.post('/notes', note);
    return response.data;
};

export const updateNote = async (note: Note) => {
    const response = await api.put('/notes', note);
    return response.data;
};

export const deleteNote = async (id: string) => {
    const response = await api.delete(`/notes/${id}`);
    return response.data;
};

export const searchNotes = async (searchTerm: string) => {
    const response = await api.get(`/notes/search/${searchTerm}`);
    return response.data as Note[];
};