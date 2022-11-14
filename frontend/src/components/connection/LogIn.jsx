import React, {useState} from 'react';
import InputTemplate from "./InputTemplate";

const LogIn = () => {
    const [user, setUser] = useState(null);
    const [pwd, setPwd] = useState(null);


     const handleSubmit = () => {
         const loginData = {
             user: user,
             pwd: pwd,
         }

     }


    return (
        <div>
            <InputTemplate handleData={(e) => setUser(e)} label={"Email"}/>
            <InputTemplate handleData={(e) => setPwd(e)} label={"Password"}/>


            <div className="modal-action">
                <label htmlFor="my-modal" className="btn" onClick={() => handleSubmit()}>Submit!</label>
            </div>
        </div>
    );
};

export default LogIn;