import React from "react";
import axios from "axios";

export const useGet = (url: string) => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [response, setResponse] = React.useState<any>(null);
  const [error, setError] = React.useState<any>(null);

  React.useEffect(() => {
    if (url !== "")
      axios
        .get(url)
        .then((res) => {
          if (res.data.Error !== undefined) {
            //Error exists
            setError(res.data.Error);
            setResponse(null);
          } else {
            setError(null);
            setResponse(res.data);
          }
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          setError(error);
          setResponse({});
        });
  }, [url]);

  return [loading, response, error];
};
