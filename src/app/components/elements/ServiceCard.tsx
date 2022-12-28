import { FC, ReactElement, useRef } from "react";
import { useEffect } from "react";
import "app/styles/component/elements/ServiceCard.scss";

export type ServiceCardProps = {
  id: number;
  imageUrl: string;
  service: string;
  theme: string;
};

const ServiceCard: FC<ServiceCardProps> = (
  props: ServiceCardProps
): ReactElement => {
  const card = useRef<HTMLInputElement>(null);
  const cardService = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const cardElement = card.current;
    const cardServiceElement = cardService.current;
    if (props.theme === "white") {
      cardElement?.classList.add("theme-white");
      cardServiceElement?.classList.add("primary-color");
    }
  });

  return (
    <div className="card" ref={card}>
      <div key={props.id} className="card-icon">
        <img src={props.imageUrl} alt="" />
      </div>
      <div className="card-bulkhead" />
      <div ref={cardService} className="card-sevice">
        {props.service}
      </div>
    </div>
  );
};

export default ServiceCard;
