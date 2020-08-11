import React from "react";
import axios from "axios";

export const useGet = (url: string) => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [response, setResponse] = React.useState<any>();
  const [error, setError] = React.useState<any>();

  React.useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        res.data.Error !== undefined
          ? setError(res.data.Error)
          : setResponse(res.data);
        setLoading(false);
      })
      .catch((error) => (setLoading(false), setError(error)));
  }, [setLoading]);

  return { loading, response, error };
};
