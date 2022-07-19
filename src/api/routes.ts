const express = require("express")
const router = express.Router();

router.use("/bid", require("../api/components/bid/routes"))

export = router




