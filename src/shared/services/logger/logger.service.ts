import { Logger as TSLogger } from "tslog";

export interface ILogger {
	log: (msg: string) => void;
	err: (msg: string) => void;
	warn: (msg: string) => void;
}

class Logger implements ILogger {
	private logger: TSLogger;

	constructor() {
		this.logger = new TSLogger();
	}

	log = (msg: string) => {
		this.logger.info(msg);
	};
	err = (msg: string) => {
		this.logger.error(msg);
	};
	warn = (msg: string) => {
		this.logger.warn(msg);
	};
}

export const logger = new Logger();
