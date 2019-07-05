const db = require("../models");

// this is our get method
// this method fetches all available data in our database
app.get("/getData", (req, res) => {
    db.User.find((err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: data });
    });
  });
  
  // this is our update method
  // this method overwrites existing data in our database
  app.post("/updateData", (req, res) => {
    const { id, update } = req.body;
    db.User.findByIdAndUpdate(id, update, err => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
  });
//   "mongodb://user:password1@ds247637.mlab.com:47637/heroku_l274z5fq";

  // this is our delete method
  // this method removes existing data in our database
  app.delete("/deleteData", (req, res) => {
    const { id } = req.body;
    db.User.findByIdAndRemove(id, err => {
      if (err) return res.send(err);
      return res.json({ success: true });
    });
  });
  
  // this is our create methid
  // this method adds new data in our database
  app.post("/putData", (req, res) => {
    let db = new Data();
  
    const { id, message } = req.body;
  
    if ((!id && id !== 0) || !message) {
      return res.json({
        success: false,
        error: "INVALID INPUTS"
      });
    }
    db.message = message;
    db.id = id;
    db.save(err => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
  });
  
  // append /api for our http requests
  app.use("/api", app);
  