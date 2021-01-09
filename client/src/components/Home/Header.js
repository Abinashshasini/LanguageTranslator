import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import image from "../../assets/image/trans2.png";

const Header = () => {
  return (
    <div className='container'>
      <h3 className='H1'>Language Translator App</h3>
      <div className='head'>
        <img src={image} className='headImage' />
      </div>
      <Link to='/translate' className='LinkButton'>
        <Button variant='contained' color='primary' size='large'>
          Let's Translate
        </Button>
      </Link>
    </div>
  );
};
export default Header;
