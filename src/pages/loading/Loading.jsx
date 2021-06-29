import React from 'react'
import {LoadingContainer} from "./LoadingStyle";
import loading from "../../loading.gif"
function Loading() {
    return (
        <LoadingContainer>
            <img src={loading} alt="" />
        </LoadingContainer>
    )
}

export default Loading
