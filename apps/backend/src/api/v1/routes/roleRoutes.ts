import { Router } from "express";
import * as controller from "../controllers/roleController";
import { requireUser } from "../middlewares/auth";
import { requireRole } from "../middlewares/role";

const router = Router();

router.get("/", controller.getRoles);

router.post("/", requireUser, controller.createRole);

router.delete("/:id", requireUser, requireRole("admin"), controller.deleteRole);

export default router;
