const router = require("express").Router({ mergeParams: true });

router.use("/admin", require("./admin"));
router.use("/estate", require("./estate"));
router.use("/user", require("./user"));
router.use("/province", require("./province"));
router.use("/city", require("./city"));
router.use("/like", require("./like"));
router.use("/bookmark", require("./bookmark"));

module.exports = router;
