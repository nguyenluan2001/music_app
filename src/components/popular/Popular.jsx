import React from 'react'
import {PopularContainer,WrapImage,Text,Overlay} from "./PopularStyle"
function Popular({theme}) {
    const style={
        color:theme=='dark'?"white":"black"
    }
    return (
        <PopularContainer>
            <h1 style={style}>Popular</h1>
            <WrapImage>
                <Text>
                    <p>Hip Hop</p>
                    <p>Latino</p>
                </Text>
                <Overlay></Overlay>
            </WrapImage>
        </PopularContainer>
    )
}

export default Popular
