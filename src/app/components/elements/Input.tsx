import "app/styles/component/elements/Input.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ placeholder, ...props }) => {
  return (
    <input {...props} className="input" type="text" placeholder={placeholder} />
  );
};

export default Input;
