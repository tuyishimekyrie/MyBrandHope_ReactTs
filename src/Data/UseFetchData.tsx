import axios from "axios";
import { useEffect, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const UseFetchData = (url:any) => {
  const [controller] = useState(new AbortController());

  useEffect(() => {
    const fetchData = async () => {
      const signal = controller.signal;
      try {
        const response = await axios.get(url, { signal });
        console.log(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [controller, url]);

  return controller;
};

export default UseFetchData;
