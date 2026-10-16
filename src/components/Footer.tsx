import { NAME } from "../data";

export default function Footer() {
  return <footer>© {new Date().getFullYear()} {NAME}</footer>;
}
