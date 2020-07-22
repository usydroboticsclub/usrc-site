import styled from "styled-components"
import React from "react"
export default function VerticalCenter(props) {
    let D = styled.div`
    height:100%;
    >div{
        display:flex;
        flex-direction:column;
        height:100%;
    }

    >div::before{
        flex: 0 1 50%;
        content:" ";
    }
    
    >div::after{
        flex: 0 1 50%;
        content:" ";
    }
    >div>*{
        flex: 1 0 auto;
    }
    `;
    return <D style={props.style}>
        <div>
            {props.children}
        </div>
    </D>
}