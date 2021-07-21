const router = require("express").Router();
const controller = require("./cors-enabled.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const cors = require('cors');

// const corsDelete = cors({methods: "DELETE"});
//router.use(cors())

router
  .route("/:corsId")
  //.all(cors())
  .get(controller.read)
  .put(controller.update)
  // .delete(corsDelete, controller.delete)
  .delete(controller.delete)
  //.options(corsDelete)
  .all(methodNotAllowed);

router
  .route("/")
  //.get(controller.list)
  .get(cors(), controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

module.exports = router;
