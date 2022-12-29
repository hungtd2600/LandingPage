import "app/styles/component/elements/Button.scss";
import images from "public/images";

interface ButtonType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const Button: React.FC<ButtonType> = ({ title, style }) => {
  return (
    <button className="button" style={style}>
      {title === "Back" && <img alt="" src={images.arrowBack} />}
      {title}
      {title === "Next" && <img alt="" src={images.arrowNext} />}
    </button>
  );
};

export default Button;
