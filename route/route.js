const router = require("express").Router({ mergeParams: true });

router.use("/admin", require("./admin"));
router.use("/estate", require("./estate"));
router.use("/user", require("./user"));
router.use("/province", require("./province"));
router.use("/city", require("./city"));
router.use("/message", require("./message"));
router.use("/password", require("./password"));
router.use("/info", require("./info"));

module.exports = router;
