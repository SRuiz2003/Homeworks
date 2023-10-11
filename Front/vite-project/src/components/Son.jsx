import React, { memo } from "react";

export const Son = memo(({numero,increment}) => {
    console.log('reloaded Son...');
    return(
        <button
        onClick={() => {increment(numero)}}
        >
            {numero}
        </button>
    )
});