import { Router } from "express";
import * as controller from "../controllers/roleController";
import { requireUser } from "../middlewares/auth";

const router = Router();

router.get("/", controller.getRoles);

router.post("/", requireUser, controller.createRole);

router.delete("/:id", requireUser, controller.deleteRole);

export default router;
