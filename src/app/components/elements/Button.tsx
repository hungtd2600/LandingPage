import "app/styles/component/elements/Button.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  onNavigate?: () => void;
}

const Button: React.FC<ButtonProps> = ({ style, children, onNavigate }) => {
  return (
    <button onClick={onNavigate} className="button" style={style}>
      {children}
    </button>
  );
};

export default Button;
