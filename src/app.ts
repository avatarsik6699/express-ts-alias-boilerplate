import { ServerModule } from "@modules/server/server.module";

const main = () => {
	const serverService = ServerModule.create().start(8080);
};

main();
