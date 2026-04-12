import express, { Express } from "express";
import employeeRoutes from "./api/v1/routes/employeeRoutes";
import departmentRoutes from "./api/v1/routes/departmentRoutes";
import roleRoutes from "./api/v1/routes/roleRoutes";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";

// Initialize Express application
const app: Express = express();

app.use(cors());

app.use(express.json());

app.use(clerkMiddleware());

app.use("/employees", employeeRoutes);

app.use("/departments", departmentRoutes);

app.use("/roles", roleRoutes);
// Define a route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

export default app;
