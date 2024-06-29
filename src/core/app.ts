import bodyParser from "body-parser";
import express, {Request, Response, NextFunction} from "express";
import { handleApiError, ApiError } from "../entities/ApiError";
import userRoutes from "../routes/userRoutes";

const app = express();

app.use(bodyParser.json());
app.use('/api/users', userRoutes);

app.use((err: ApiError, req: Request, res: Response, next: NextFunction) => {
    handleApiError(err, res);
});

export default app;