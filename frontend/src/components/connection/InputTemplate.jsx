import React, {useState} from "react";

const Input = ({label, handleData}) => {
    const [input, setInput] = useState();

    return (
        <div className="form-control w-full max-w-xs pl-50">
            <label className="label">
                <span className="label-text">{label}</span>
            </label>
            <input type="text" onChange={(e) => {
                setInput(e.target.value)
                handleData(e.target.value)
            }}  placeholder="Type here" className="input input-bordered w-full max-w-xs"/>
        </div>
    )
}

export default Input;