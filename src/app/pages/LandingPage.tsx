import * as yup from "yup";
import { FC, ReactElement } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

import Footer from "app/components/modules/Footer";
import NavBar from "app/components/modules/NavBar";
import Reasons from "app/components/modules/Reasons";
import Services from "app/components/modules/Services";
import Stats from "app/components/modules/Stats";
import Project from "app/components/modules/Project";
import Button from "app/components/elements/Button";

import { projectList } from "app/const/project";
import { reasonList } from "app/const/reasons";
import { serviceList } from "app/const/services";
import { statList } from "app/const/stats";
import { menuNavbarList, menuProjectList } from "app/const/menu";
import images from "assets/images";
import "app/styles/pages/landing.scss";

import { useForm, SubmitHandler } from "react-hook-form";

const schema = yup.object({
  yourName: yup.string().required(),
  phone: yup
    .string()
    .required()
    .matches(
      // eslint-disable-next-line no-useless-escape
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    ),
  email: yup.string().email().required(),
  contacting: yup.string().required(),
});

type FormValues = {
  yourName: string;
  email: string;
  contacting: string;
  phone: string;
  message: string;
};

const LandingPage: FC = (): ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({ resolver: yupResolver(schema) });
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <NavBar menuNavbarList={menuNavbarList} />
      <section id="home" className="hero">
        <img src={images.hero} alt="" />
      </section>
      <Reasons reasonList={reasonList} />
      <section id="aboutus" className="aboutus">
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
      <Services serviceList={serviceList} />
      <Stats statList={statList} />
      <section className="ads">
        <div className="container">
          <div className="ads-content">
            <h3 className="content-heading">
              Free consultation with exceptional quality
            </h3>
            <p className="content-desc">
              Just one call away: <a href="tel: +84 1102 2703">+84 1102 2703</a>
            </p>
          </div>
          <Button className="button ads-button">Get your consultation</Button>
        </div>
      </section>
      <Project projectList={projectList} menuProjectList={menuProjectList} />
      <section className="cta" id="contactus">
        <div className="container">
          <div className="cta-heading">
            <h2 className="heading-title">What can us do for you?</h2>
            <p className="heading-desc">
              We are ready to work on a project of any complexity, whether it’s
              commercial or residential.
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="cta-content">
              <div className="content-form">
                <input
                  className={`${errors.yourName ? "isValidate" : ""}`}
                  {...register("yourName", { required: true })}
                  type="text"
                  placeholder="Your Name*"
                />
                <input
                  className={`${errors.email ? "isValidate" : ""}`}
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Email*"
                />
                <input
                  className={`${errors.contacting ? "isValidate" : ""}`}
                  {...register("contacting", { required: true })}
                  type="text"
                  placeholder="Reason for Contacting*"
                />
                <input
                  className={`${errors.phone ? "isValidate" : ""}`}
                  {...register("phone", { required: true })}
                  type="text"
                  placeholder="Phone*"
                />
                <textarea
                  {...register("message")}
                  className="content-textarea"
                  placeholder="Messages"
                />
              </div>
              <p className="content-tutorial">
                <strong>*</strong> indicates a required field
              </p>
            </div>
            <div className="cta-final">
              <Button type="submit" className="button cta-button ">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default LandingPage;
