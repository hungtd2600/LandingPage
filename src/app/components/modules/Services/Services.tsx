import { FC, ReactElement } from "react";
import { ServiceType } from "app/types/Type";
import images from "public/images";
import ServiceCard from "app/components/elements/ServiceCard/ServiceCard";
import "app/components/modules/Services/Services.scss";

const listService: ServiceType[] = [
  {
    id: 1,
    imageUrl: images.serviceIcon1,
    service: "Construction",
    theme: "white",
  },
  {
    id: 2,
    imageUrl: images.serviceIcon2,
    service: "Renovation",
    theme: "blue",
  },
  {
    id: 3,
    imageUrl: images.serviceIcon3,
    service: "Construction",
    theme: "white",
  },
  {
    id: 4,
    imageUrl: images.serviceIcon4,
    service: "Repair Services",
    theme: "blue",
  },
  {
    id: 5,
    imageUrl: images.serviceIcon5,
    service: "Architecture",
    theme: "white",
  },
  {
    id: 6,
    imageUrl: images.serviceIcon6,
    service: "Electric",
    theme: "blue",
  },
];

const Services: FC = (): ReactElement => {
  return (
    <section className="services">
      <div className="container">
        <h2 className="services-title">Services</h2>
        <div className="services-content">
          {listService.map((item) => (
            <ServiceCard
              key={item.id}
              id={item.id}
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
