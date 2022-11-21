import React, {useEffect, useState} from 'react';
import {TwitchPlayerNonInteractive} from "react-twitch-embed";




const Stream = ({stream, streamsLength, windowSize}) => {
    const [setting, setSetting] = useState(stream)

    const streamPanelSize = streamsLength < 5 ? windowSize.innerWidth / (streamsLength /2) : windowSize.innerWidth / streamsLength;

    useEffect(() => {
        setSetting({
            name: setting.name,
            id: setting.id,
            option: {
                size: streamPanelSize,
            },
        })
        console.log(windowSize) //todo: do smtnhgs
    }, [windowSize])

    return (
        <div className={''} key={stream.id}>
            <TwitchPlayerNonInteractive channel={stream.name} width={setting.option.size} height={setting.option.size}/>

            <input onChange={e => {
                setSetting({
                    name: setting.name,
                    id: setting.id,
                    option: {
                        size: streamPanelSize * (e.target.value/100),
                    },
                })
            }} type="range" min="0" max="100" defaultValue={'0'} className="range" />
        </div>
    );
};

export default Stream;