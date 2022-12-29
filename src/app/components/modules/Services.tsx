import { FC, ReactElement, useEffect, useRef } from "react";
import "app/styles/component/modules/Services.scss";

type ServiceType = {
  id: number;
  imageUrl: string;
  service: string;
  theme: string;
};

type ServiceProps = {
  serviceList: ServiceType[];
};

const Services: FC<ServiceProps> = ({ serviceList }): ReactElement => {
  const ServiceCard: FC<ServiceType> = (props: ServiceType): ReactElement => {
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

  return (
    <section className="services">
      <div className="container">
        <h2 className="services-title">Services</h2>
        <div className="services-content">
          {serviceList.map((item) => (
            <ServiceCard
              id={item.id}
              key={item.id}
              imageUrl={item.imageUrl}
              service={item.service}
              theme={item.theme}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
