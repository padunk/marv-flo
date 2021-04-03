import { useEffect, useState } from "react";

type Size = {
    width: number;
    height: number;
};

export function useWindow() {
    const [windowSize, setWindowSize] = useState<Size>({
        width: 0,
        height: 0,
    });

    function handleResize() {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }

    useEffect(() => {
        if (!window) {
            return;
        }

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
}
