import React, {useEffect, useState} from 'react';

import SearchBtn from "../components/multistream/SearchBtn";
import Stream from "../components/multistream/Stream";


function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
}

const Multistream = () => {
    const [streams, setStreams] = useState([]);

    const [windowSize, setWindowSize] = useState(getWindowSize());


    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);



    //todo: make hover on like move search bar to left

    return (
        <div>
            <div className={'grid place-items-center group->hover:place-items-left'}>
                <SearchBtn streams={streams} label={'Enter stream name'} handleData={(e) => {
                    setStreams(oldArray => [...oldArray, e]);
                }}/>
            </div>

            <div className={"w-full h-full px-12 flex flex-row flex-wrap"}>
                {
                    streams.map(e => <Stream key={e.id} windowSize={windowSize} streamsLength={streams.length} stream={e}/>)
                }
            </div>
        </div>
    );
};

export default Multistream;