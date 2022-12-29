import "app/styles/component/elements/Input.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = ({ ...props }) => {
  return (
    <input
      style={props.style}
      className="input"
      type="text"
      placeholder={props.placeholder}
    />
  );
};

export default Input;
