import { useCallback, useEffect, useState } from "react";

const useGetMediumArticles = () => {
  const [articles, setArticles] = useState([]);

  const fetchArticles = useCallback(async () => {
    const response = await fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@akshaymattoo"
    );

    const data = await response.json();

    setArticles(data.items);
  }, []);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  return [articles, fetchArticles];
};

export default useGetMediumArticles;
