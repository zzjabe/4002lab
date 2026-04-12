import { Router } from "express";
import * as employeeController from "../controllers/employeeController";
import { requireUser } from "../middlewares/auth";

const router = Router();

router.get("/", employeeController.getEmployees);

router.post("/", requireUser, employeeController.createEmployee);

router.put("/:id", requireUser, employeeController.updateEmployee);

router.delete("/:id", requireUser, employeeController.deleteEmployee);

export default router;
