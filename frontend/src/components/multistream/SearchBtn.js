import React, {useEffect, useState} from "react";

const SearchBtn = ({label, handleData}) => {
    const [input, setInput] = useState();


    return (
        <div className="form-control w-full max-w-xs pl-50">
            <input type="text" onChange={(e) => {
                setInput(e.target.value)
                handleData(e.target.value)
            }}  placeholder={label} className="input input-bordered w-full max-w-xs"/>
        </div>
    )
}

export default SearchBtn;