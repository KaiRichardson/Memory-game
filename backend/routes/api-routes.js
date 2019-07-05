const Data = require("../models");

module.exports = function(app, router) {
  // this is our get method
  // this method fetches all available data in our database
  router.get("/getData", (req, res) => {
    Data.User.find((err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: data });
    });
  });

  // this is our update method
  // this method overwrites existing data in our database
  router.post("/updateData", (req, res) => {
    const { id, update } = req.body;
    Data.User.findByIdAndUpdate(id, update, err => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
  });

  // this is our delete method
  // this method removes existing data in our database
  router.delete("/deleteData", (req, res) => {
    const { id } = req.body;
    Data.User.findByIdAndRemove(id, err => {
      if (err) return res.send(err);
      return res.json({ success: true });
    });
  });

  // this is our create methid
  // this method adds new data in our database
  router.post("/putData", (req, res) => {
    let data = new Data();

    const { id, message } = req.body;

    if ((!id && id !== 0) || !message) {
      return res.json({
        success: false,
        error: "INVALID INPUTS"
      });
    }
    data.message = message;
    data.id = id;
    data.save(err => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
  });

  // append /api for our http requests
  app.use("/api", router);
};
