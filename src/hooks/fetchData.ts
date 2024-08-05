import { useEffect, useState } from "react";

import axios from "axios";

const useFetch = (url: string) => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const response = await axios.get<any>(url);
                setData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

    }, [url]);

    return { data, loading, error };
};

export default useFetch;