import "app/styles/component/elements/button.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  onNavigate?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onNavigate, ...props }) => {
  return (
    <button onClick={onNavigate} {...props}>
      {children}
    </button>
  );
};

export default Button;
