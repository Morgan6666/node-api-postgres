const clc = require("cli-color");
const CONFIG = require("../../config/Config");

class Logger {
	initializer;
	constructor(initializer: string) {
		this.initializer = initializer;
	}
	async log(message: string) {
		return console.log(
			clc.magenta(
				`${new Date(
					new Date().getTime() -
						new Date().getTimezoneOffset() * 60 * 1000
				).toISOString()}`
			),
			clc.yellow(CONFIG.DEBUG ? "[ DEV ]" : ""),
			clc.cyan(`[ ${this.initializer} ]`),
			clc.cyan(`${message}`)
		);
	}
	async success(message: string) {
		return console.log(
			clc.magenta(
				`${new Date(
					new Date().getTime() -
						new Date().getTimezoneOffset() * 60 * 1000
				).toISOString()}`
			),
			clc.yellow(CONFIG.DEBUG ? "[ DEV ]" : ""),
			clc.bgGreen(clc.whiteBright(`[ ${this.initializer} ]`)),
			clc.whiteBright(`${message}`)
		);
	}
	async error(message: string) {
		return console.log(
			clc.magenta(
				`${new Date(
					new Date().getTime() -
						new Date().getTimezoneOffset() * 60 * 1000
				).toISOString()}`
			),
			clc.yellow(CONFIG.DEBUG ? "[ DEV ]" : ""),
			clc.bgRed(clc.whiteBright(`[ ${this.initializer} ]`)),
			clc.bold(clc.redBright(`${message}`))
		);
	}
	async warn(message: string) {
		return console.log(
			clc.magenta(
				`${new Date(
					new Date().getTime() -
						new Date().getTimezoneOffset() * 60 * 1000
				).toISOString()}`
			),
			clc.yellow(CONFIG.DEBUG ? "[ DEV ]" : ""),
			clc.bgYellowBright(clc.whiteBright(`[ ${this.initializer} ]`)),
			clc.bold(clc.whiteBright(`${message}`))
		);
	}
}

export = Logger;
