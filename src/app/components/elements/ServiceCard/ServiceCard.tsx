import { FC, ReactElement, useRef } from "react";
import { ServiceType } from "app/types/Type";
import { useEffect } from "react";
import "app/components/elements/ServiceCard/ServiceCard.scss";

const ServiceCard: FC<ServiceType> = (service): ReactElement => {
  const card = useRef<HTMLInputElement>(null);
  const cardService = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const cardElement = card.current;
    const cardServiceElement = cardService.current;
    if (service.theme === "white") {
      cardElement?.classList.add("theme-white");
      cardServiceElement?.classList.add("primary-color");
    }
  });

  return (
    <div className="card" ref={card}>
      <div key={service.id} className="card-icon">
        <img src={service.imageUrl} alt="" />
      </div>
      <div className="card-bulkhead" />
      <div ref={cardService} className="card-sevice">
        {service.service}
      </div>
    </div>
  );
};

export default ServiceCard;
