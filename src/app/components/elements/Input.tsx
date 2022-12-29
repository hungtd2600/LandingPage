import "app/styles/component/elements/Input.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = ({ ...props }) => {
  return (
    <input
      className="input"
      type={props.type}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
