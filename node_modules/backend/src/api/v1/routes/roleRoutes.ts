import { Router } from "express";
import * as controller from "../controllers/roleController";

const router = Router();

router.get("/", controller.getRoles);

router.post("/", controller.createRole);

router.delete("/:id", controller.deleteRole);

export default router;
