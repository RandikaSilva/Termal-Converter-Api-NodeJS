const express = require("express");
const router = express.Router();

const moduleFunction = require("../../modules/FunctionModule");

router.get("/celToFahr/:Cel", async (req, res, next) => {
  try {
    const cel = req.params.Cel;
    res.json({
      result: await moduleFunction.celToFahr(cel),
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
});

router.get("/fahrToCel/:Fahr", async (req, res, next) => {
  try {
    const fahr = req.params.Fahr;
    res.json({
      result: await moduleFunction.fahrToCel(fahr),
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
});

router.get("/kelToFhar/:Kel", async (req, res, next) => {
  try {
    const kelV = req.params.Kel;
    res.json({
      result: await moduleFunction.kelToFhar(kelV),
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
});

router.get("/FharTokel/:Fhar", async (req, res, next) => {
  try {
    const fhar = req.params.Fhar;
    res.json({
      result: await moduleFunction.fharTokel(fhar),
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
