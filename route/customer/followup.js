const router = require("express").Router();

const requestHandler = require("../../middleware/requestHandler");

const getAllController = require("../../controller/customer/followup/getAll");
const getController = require("../../controller/customer/followup/get");
const postController = require("../../controller/customer/followup/post");
const putController = require("../../controller/customer/followup/put");
const deleteController = require("../../controller/customer/followup/delete");

router.get("/all", requestHandler(getAllController));
router.get("/:id", requestHandler(getController));
router.post("/", requestHandler(postController));
router.put("/:id", requestHandler(putController));
router.delete("/:id", requestHandler(deleteController));

module.exports = router;
