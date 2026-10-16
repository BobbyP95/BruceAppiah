import { useEffect, useState } from "react";
import { DEFAULT_PAGE, PAGES, type PageId } from "../routes";
import { NAME } from "../data";

function readHash(): PageId {
  const hash = window.location.hash.slice(1);
  return (PAGES as readonly string[]).includes(hash) ? (hash as PageId) : DEFAULT_PAGE;
}

/** Returns the current page id from the URL hash (e.g. #skills). */
export function useHashRoute(): PageId {
  const [page, setPage] = useState<PageId>(readHash);

  useEffect(() => {
    const onChange = () => setPage(readHash());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${page.charAt(0).toUpperCase()}${page.slice(1)} · ${NAME}`;
  }, [page]);

  return page;
}
