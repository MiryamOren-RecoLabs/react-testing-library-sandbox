import React, { useEffect, useState } from "react";
import { fetchData } from "./fetchFunction"

const ComponentThatFetchDataFromServer = (): JSX.Element => {
    const [stringToDisplay, setStringToDisplay] = useState<string>('loading');
    useEffect(() => {
        const getData = async() => {
            const dataFromServer = await fetchData();
            setStringToDisplay(dataFromServer);
        }
        getData();
    }, []);

    return <p>{stringToDisplay}</p>;
}

export default ComponentThatFetchDataFromServer;