/* eslint-disable @typescript-eslint/no-empty-function */
import { logger } from "@shared/services/logger/logger.service";
import express, { Express } from "express";

export class ServerModule {
	static instance: ServerModule;
	private server: Express;

	private constructor() {}

	static create() {
		if (!this.instance) {
			this.instance = new ServerModule();
			this.instance.server = express();
		}

		return this.instance;
	}

	start(port: number) {
		if (!this.server) throw new Error("server not initialized.");

		this.server.listen(port, () => {
			logger.log(`server start http://localhost:${port}`);
		});

		return this;
	}
}
