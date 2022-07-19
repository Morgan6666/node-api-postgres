const path = require("path");
const fs = require("fs");
const YAML = require("yaml");

const CONFIG_FILE = YAML.parse(
	fs.readFileSync(path.join(__dirname, `./config.yml`)).toString()
);
let CONFIG = CONFIG_FILE.DEBUG ? CONFIG_FILE.DEV : CONFIG_FILE.PRODUCTION;
CONFIG.DEBUG = CONFIG_FILE.DEBUG;

export = CONFIG;

