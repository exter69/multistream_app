import React, {useEffect, useState} from 'react';

import '../../styles/components/connectionPortal.css';

import LogIn from "./LogIn";
import SignUp from "./SignUp";

function ConnectionPortal(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentObjPage, setCurrentObjPage] = useState(<SignUp/>);
    // page signup = 1
    // page login = 2

    const paginationHandle = (page) => {
        if (page < currentPage) {
            setCurrentPage(1);
            setCurrentObjPage(<SignUp/>)

        } else if (page > currentPage)  {
            setCurrentPage(2);
            setCurrentObjPage(<LogIn/>)
        }
    }

    const activePageHandle = (page) => {
        return currentPage === page ? "tab-active" : ""
    }


    return (
        <div>
            <label htmlFor="my-modal" className="btn">connection</label>

            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-2/6 max-w-3xl">
                    <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <div className="tabs">
                        <h1 className={"tab tab-bordered " + activePageHandle(1)}
                            onClick={() => paginationHandle(1)}>Sign up</h1>
                        <h1 className={"tab tab-bordered " + activePageHandle(2)}
                            onClick={() => paginationHandle(2)}>Log in</h1>
                    </div>

                    { currentObjPage }

                </div>
            </div>
        </div>
    );
}

export default ConnectionPortal;