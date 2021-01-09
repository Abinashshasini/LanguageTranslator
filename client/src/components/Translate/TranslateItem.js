import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ProgressBar from "../Home/Progress";
import { translationResult } from "../../actions/translate";
const TranslateItem = ({
  translationResult,
  translate: { translate, loading },
}) => {
  useEffect(() => {
    translationResult();
  }, []);
  return (
    <Fragment>
      {loading ? (
        <ProgressBar />
      ) : (
        <Fragment>
          <div style={textDiv}>
            <textarea
              name='Translated-Text'
              placeholder='Translated Text'
              style={textArea}
            >
              {translate}
            </textarea>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};
const textDiv = {
  marginRight: "2px",
};
const textArea = {
  width: "95%",
  padding: "7px",
  borderRadius: "3px",
  height: "100px",
};

TranslateItem.propTypes = {
  translationResult: PropTypes.func.isRequired,
  translate: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  translate: state.translate,
});
export default connect(mapStateToProps, { translationResult })(TranslateItem);
