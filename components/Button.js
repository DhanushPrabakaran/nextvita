import Link from "next/link";

const Button = ({ src, title }) => (
  <p>
    <Link target="_self" rel="noopener" href={src}>
      <i>{title}</i>
    </Link>
  </p>
);

export default Button;
