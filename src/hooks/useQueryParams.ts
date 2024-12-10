import { useState, useEffect } from "react";

export default function useQueryParams(): Record<string, string | null> {
  const [params, setParams] = useState<Record<string, string | null>>({});

  useEffect(() => {
    const search = window.location.search;
    const queryParams = new URLSearchParams(search);
    const result: Record<string, string | null> = {};

    queryParams.forEach((value, key) => {
      result[key] = value;
    });

    setParams(result);
  }, []);

  return params;
}
