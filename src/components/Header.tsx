import logoMark from "../assets/logo-mark.png";
import { NAME } from "../data";
import { useThemeToggle } from "../hooks/useThemeToggle";
import { PAGES, PAGE_LABELS, type PageId } from "../routes";

export default function Header({ page }: { page: PageId }) {
  const toggleTheme = useThemeToggle();
  return (
    <header>
      <nav aria-label="Main">
        <a className="brand" href="#home">
          <img className="brand__logo" src={logoMark} alt="Bobby Ink logo" width={25} height={40} />
          <span>{NAME}</span>
        </a>
        {PAGES.map((id) => (
          <a key={id} className="nav-link" href={`#${id}`} aria-current={id === page ? "page" : undefined}>
            {PAGE_LABELS[id]}
          </a>
        ))}
        <button id="theme-toggle" type="button" aria-label="Toggle dark mode" onClick={toggleTheme}>
          Theme
        </button>
      </nav>
    </header>
  );
}
