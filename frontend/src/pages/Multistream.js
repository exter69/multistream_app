import React, {useEffect, useState} from 'react';
import {TwitchPlayerNonInteractive} from "react-twitch-embed";

import SearchBtn from "../components/multistream/SearchBtn";

const Multistream = () => {
    const [search, setSearch] = useState(null);
    const [streams, setStreams] = useState([])


    const onSubmit = (e) => {
        setStreams(oldArray => [...oldArray, e])
    }


    useEffect(() => {
        const listener = event => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
                event.preventDefault();
                onSubmit(search);
                console.log(streams)
            }
        };
        document.addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener);
        };
    }, [search]);

    return (
        <div>
            <div className={'grid place-items-center'}>
                <SearchBtn label={'Enter stream name'} handleData={(e) => {
                    setSearch(e)
                }}/>
            </div>

            {
                streams.map(e => <TwitchPlayerNonInteractive channel={e}/>)
            }
        </div>
    );
};

export default Multistream;