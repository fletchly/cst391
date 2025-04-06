import {useEffect, useState} from "react";
import {checkAuth} from "../../service/NoteService.ts";

export function Test() {
    const [user, setUser] = useState('')

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const data = await checkAuth();
                setUser(data.user.username)
            } catch (error) {
                console.log(error);
            }
        };

        fetchUser();
    }, []);

    return (
        <>{user}</>
    );
}