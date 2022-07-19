const CONFIG = require("../../config/Config");
const { Client } = require("pg");
const logger = new (require("../../api/services/Logger"))("Database");


class PostgresORM {

	constructor() {}
	private async connect(): Promise<typeof Client | null> {
		try {
			const client = new Client({
				user: CONFIG.DATABASE.POSTGRES.USER,
				host: CONFIG.DATABASE.POSTGRES.HOST,
				database: CONFIG.DATABASE.POSTGRES.DATABASE,
				password: CONFIG.DATABASE.POSTGRES.PASSWORD,
				port: CONFIG.DATABASE.POSTGRES.PORT,
			});
			await client.connect();
			logger.log(
				`Connected to ${CONFIG.DATABASE.POSTGRES.DATABASE} database`
			);
			return client;
		} catch (err: any) {
			logger.error(err);
			return null;
		}
	}
	private async disconnect(client: typeof Client): Promise<boolean> {
		try {
			await client.end();
			logger.log(
				`Disconnected from ${CONFIG.DATABASE.POSTGRES.DATABASE} database`
			);
			return true;
		} catch (err: any) {
			logger.error(err);
			return false;
		}
	}
	async request(query: string) {
		try {
			const connection = await this.connect();
			if (!connection) {
				return null;
			}
			const result = await connection.query(query);
			this.disconnect(connection);
			logger.log(
				`Requested to ${CONFIG.DATABASE.POSTGRES.DATABASE} database`
			);
			return result;
		} catch (err: any) {
			logger.error(err.message);
			return null;
		}
	}
}
export {  PostgresORM };
