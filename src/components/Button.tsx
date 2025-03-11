import "../styles/App.css";

interface ButtonProps {
  url: string;
}

const Button = ({ url }: ButtonProps) => (
  <li>
    <a
      className="button"
      href={url}
      target="_blank"
    >
      Visit the app
    </a>
  </li>
);

export default Button;
