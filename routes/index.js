const htmlRoutes = require("./htmlRoutes");
const apiRoutes = require("./apiRoutes");
const router = require("express").Router();

router.use("/", htmlRoutes);
router.use("/api", apiRoutes);

module.exports = router;