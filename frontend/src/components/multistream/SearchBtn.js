import React, {useEffect, useState} from "react";


const checkError = (e) => {
    switch (e) {
        case 'whiteSpace':
            return 'white space detected';
        case 'exist':
            return 'Already in list'
        default:
            return 0
    }
}


const SearchBtn = ({label, handleData, streams}) => {
    const [streamsArray, setStreamsArray] = useState([]);
    const [input, setInput] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        setStreamsArray(streams);
    }, [streams]);


    //Detect "enter" key
    useEffect(() => {
        const listener = event => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
                event.preventDefault();
                console.log('zeub')
                onSubmit();
                setInput('');
            }
        };
        document.addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener);
        };
    }, [input]);

    const getLastId = () => {
        return streamsArray ? streamsArray[streamsArray.length - 1].id : null;
    }
    const onSubmit = () => {
        if (input) {
            const streamData = {
                name: input,
                id: getLastId() + 1,
                option: {
                    size: null,
                },
            };
            handleData(streamData);
        }
    }

    //check if already in list
    // const checkIfInList = () => {
    //     streamsArray.forEach((e) => {
    //         if (input === e.name) {
    //             setError('exist');
    //             return false;
    //         }
    //         return true;
    //     })
    // };

    //check if search is a link and clean it
    useEffect(() => {
        if (input && input.includes('https://www.twitch.tv/')) {
            setInput(input.replace('https://www.twitch.tv/', ''));
        }
    }, [input]);

    //check for space in search and clean it
    useEffect(() => {
        if (input && input.indexOf(' ') >= 0) {
            setInput(input.replace(' ', ''))
            setError('whiteSpace');
        } else
            setError(null);
    }, [input])

    return (
        <div className="form-control w-full max-w-xs pl-50">
            <label className="label">
                <input type="text" value={input} onChange={(e) => {
                    setInput(e.target.value)
                }} placeholder={label}
                       className={"input input-bordered w-full max-w-xs" + (error ? " input-error" : "")}/>
                <span className="label-text text-red">{error ? checkError(error) : ''}</span>
            </label>
        </div>
    )
}

export default SearchBtn;