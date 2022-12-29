import "app/styles/component/elements/Input.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ placeholder, style }) => {
  return (
    <input
      style={style}
      className="input"
      type="text"
      placeholder={placeholder}
    />
  );
};

export default Input;
