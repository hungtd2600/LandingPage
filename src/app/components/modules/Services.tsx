import { FC, ReactElement, useEffect, useRef } from "react";
import Button from "app/components/elements/Button";
import images from "public/images";
import "app/styles/component/modules/services.scss";

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
  const ServiceCard = (props: ServiceType): ReactElement => {
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
    <>
      <section className="aboutus">
        <div className="container">
          <img className="aboutus-image" src={images.aboutUs} alt="" />
          <div className="aboutus-infor">
            <h2 className="infor-title">About us</h2>
            <p className="infor-desc">
              For more than 30 years we have been delivering world-class
              construction and we’ve built many lasting relationships along the
              way.
            </p>
            <p className="infor-desc">
              We’ve matured into an industry leader and trusted resource for
              those seeking quality, innovation and reliability when building in
              the U.S.
            </p>
            <div className="infor-more">
              <Button className="button aboutus-button">
                More on Our History
              </Button>
            </div>
          </div>
        </div>
      </section>
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
    </>
  );
};

export default Services;
