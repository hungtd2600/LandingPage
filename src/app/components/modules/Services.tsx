import { FC, ReactElement } from "react";
import { listService } from "app/const/services";
import ServiceCard from "app/components/elements/ServiceCard";
import "app/styles/component/modules/Services.scss";

const Services: FC = (): ReactElement => {
  return (
    <section className="services">
      <div className="container">
        <h2 className="services-title">Services</h2>
        <div className="services-content">
          {listService.map((item) => (
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
