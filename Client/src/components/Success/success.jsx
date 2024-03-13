import React from "react";
import "./success.scss";
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';

export default function Success() {
    return (
        <div className="container">
            <div className="box">
                <div className="content" >
                    <CIcon icon={icon.cilCheckCircle} /> <br /> <br /> <br />
                    <h1>Success</h1><br /> <br />
                    <span><p>We received your purchase request<br /> we'll be in touch shortly!</p></span>
                </div>
            </div>
        </div>

    )
}


