import {useEffect, useRef} from "react";

export const useEffectOnlyUpdate = (callback: () => void, deps: any[]) => {
    const firstRender = useRef(true);
    useEffect(() => {
        if(firstRender.current){
            firstRender.current = false
            return
        }
        callback && callback();
    }, deps)
}