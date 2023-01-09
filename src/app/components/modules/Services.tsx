import { FC, ReactElement, useEffect, useRef } from "react";

import "app/styles/component/modules/services.scss";

type TService = {
  id: number;
  imageUrl: string;
  service: string;
  theme: string;
};

type ServiceProps = {
  serviceList: TService[];
};

const Services: FC<ServiceProps> = ({ serviceList }): ReactElement => {
  const ServiceCard = (props: TService): ReactElement => {
    const card = useRef<HTMLInputElement>(null);
    const cardService = useRef<HTMLInputElement>(null);

    useEffect(() => {
      const cardElement = card.current;
      const cardServiceElement = cardService.current;
      if (props.theme === "white") {
        cardElement?.classList.add("theme-white");
        cardServiceElement?.classList.add("primary-color");
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <div className="card" ref={card}>
        <div className="card-icon">
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
    <section id="services" className="services">
      <div className="container">
        <h2 className="services-title">Services</h2>
        <div className="services-content">
          {serviceList.map((item) => (
            <ServiceCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
