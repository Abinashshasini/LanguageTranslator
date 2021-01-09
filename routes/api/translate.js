const express = require("express");
const router = express.Router();
const LanguageTranslatorV3 = require("ibm-watson/language-translator/v3");
const { IamAuthenticator } = require("ibm-watson/auth");
const languageTranslator = new LanguageTranslatorV3({
  version: "2020-10-24",
  authenticator: new IamAuthenticator({
    apikey: "dtF8tdfnhQl2dD3a5J6HfoSLjNXnLu-3LliACAGXR68O",
  }),
  url:
    "https://api.eu-gb.language-translator.watson.cloud.ibm.com/instances/e6e5b8d9-f0a0-4400-98ab-16d3e7761802",
});
router.use(express.json());
router.use(
  express.urlencoded({
    extended: false,
  })
);

router.post("/", async (req, res) => {
  try {
    console.log(req);
    const translateParams = ({ text, modelId } = req.body);
    const translationResult = await languageTranslator.translate(
      translateParams
    );
    console.log(translationResult.result.translations[0].translation);
    res.json(translationResult.result.translations[0].translation);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
