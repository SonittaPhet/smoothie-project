const router = require("express").Router();
const { Smoothie } = require("../../Models/Smoothie");

//Smoothie Fetching Route (ADD VEGGIES TOO)

router.get("/smoothie/all-smoothie", async (request, response) => {
  await Smoothie.find({"smoothie_information.type": "Fruits"})
    .exec()
    .then((data) => {
      response.status(200).json(data);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/api/smoothie-information/:id", async (request, response) => {
  // console.log(request.params.id)
  await Smoothie.findOne({ _id: request.params.id })
    .exec()
    .then((data) => {
      return response.status(200).json(data);
    })
    .catch((error) => {
      return response.status(400).json(error);
    })
})

module.exports = router;
