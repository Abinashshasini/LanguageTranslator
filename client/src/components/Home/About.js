import React, { Fragment } from "react";
import image from "../../assets/image/trans1.gif";

const About = () => {
  return (
    <Fragment>
      <div className='container'>
        <h3 className='H1'>About Language Translator</h3>
        <div className='head1'>
          <img src={image} className='headImage1' />
        </div>
        <p className='para'>
          Human beings take about a year to learn a language but computers can
          learn in a day. In this project, we build a language translator web
          application that can translate from English to over 25+ languages.{" "}
        </p>
      </div>
    </Fragment>
  );
};
export default About;
