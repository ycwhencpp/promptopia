import { useEffect, useState } from "react";
import { getProviders } from "next-auth/react";

const useProviders = () =>{
    const [Provider, setProvider] = useState({});

    useEffect(() => {
        const fetchProvider = async () => {
          const reponse = await getProviders();
          setProvider(reponse);
        };
        fetchProvider();
      }, []);

    return Provider;
}

export default useProviders