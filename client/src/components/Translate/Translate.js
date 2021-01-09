import React, { Fragment, useState } from "react";
import { Button } from "@material-ui/core";
import data from "./data";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import PropTypes from "prop-types";
import { translationResult } from "../../actions/translate";
import TranslateItem from "./TranslateItem";
import "../../App.css";

const Translate = ({ setAlert, translationResult }) => {
  const [formData, setFormData] = useState({
    text: " ",
    modelId: " ",
  });
  const { text, modelId } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (text == " " && modelId == 0) {
      setAlert("Invalid Credential", "danger");
    } else if (modelId == 0) {
      setAlert("Please Select The Language", "danger");
    } else if (text === null) {
      setAlert("Please Input some TEXT", "danger");
    } else {
      translationResult(formData);
    }
  };

  return (
    <Fragment>
      <div className='container'>
        <h3 className='H1'>Translate English To Other Languages</h3>
        <form className='TranslateContainer' onSubmit={(e) => onSubmit(e)}>
          <div>
            <div className='languageDiv'>
              <div>
                <select
                  name='Direct Language'
                  id='find-us'
                  className='ChoseButton'
                >
                  <option value='English' defaultValue>
                    English
                  </option>
                </select>
              </div>
              <div className='textDiv'>
                <textarea
                  id='text'
                  name='text'
                  className='textarea'
                  value={text}
                  onChange={(e) => onChange(e)}
                  placeholder='Input Your Text'
                  maxLength='100'
                ></textarea>
              </div>
            </div>
            <div className='languageDiv'>
              <div>
                <select
                  name='modelId'
                  value={modelId}
                  className='ChoseButton'
                  onChange={(e) => onChange(e)}
                >
                  {data.map((d) => (
                    <option key={d.id} value={d.languageid}>
                      {d.language}
                    </option>
                  ))}
                </select>
              </div>
              <TranslateItem />
            </div>
          </div>
          <div className='button'>
            <Button
              size='small'
              variant='contained'
              color='primary'
              type='submit'
            >
              Translate
            </Button>
          </div>
        </form>
        <p className='para'>
          Some English Words can't be translated to other languages Because of
          the limitation in the IBM Api(Free Version)
        </p>
      </div>
    </Fragment>
  );
};
Translate.prototype = {
  setAlert: PropTypes.func.isRequired,
  translationResult: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  translate: state.translate,
});
export default connect(mapStateToProps, { setAlert, translationResult })(
  Translate
);
