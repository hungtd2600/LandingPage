import "app/styles/component/elements/Button.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  hasIcon?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  style,
  hasIcon = false,
  ...props
}) => {
  return (
    <button {...props} className="button" style={style}>
      {title}
      {hasIcon && <i>arrow</i>}
    </button>
  );
};

export default Button;
