import express from "express";
import { Server } from "http";
import cors from "cors";

export default class App {
  public app: express.Express;
  private server: Server | null;

  constructor() {
    this.app = express();
    this.server = null;
    this.config();

    this.app.get("/", (_req, res) => res.json({ ok: true }));
  }

  private config(): void {
    const corsOptions = {
      origin: [process.env.FRONTEND_URL || "http://localhost:4000"],
    };

    this.app.use(cors(corsOptions));

    this.app.use(express.json());
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }

  public stop(): void {
    if (this.server) {
      this.server.close();
    }
  }
}
