// import React from 'react';
import { useMediaQuery } from 'react-responsive';

export function useScreenType() {

    const screen1 = useMediaQuery({ maxWidth: 800 });
    const screen2 = useMediaQuery({ minWidth: 1265 });
    const screen3 = useMediaQuery({ minWidth: 800 });

    if (screen1) {
        return "screen1";
    }
    if (screen2) {
        return "screen2";
    }
    if (screen3) {
        return "screen3";
    }

}