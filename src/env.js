const path = require('path')

module.exports = {
	//URL_GCC : process.env.URL_GCC || path.normalize('C:/Program Files (x86)/CodeBlocks/MinGW/bin/gcc.exe')
	URL_GCC : process.env.URL_GCC || '/usr/bin/g++',
	URL_PYTHON : process.env.URL_PYTHON || 'C:/Users/igorm/AppData/Local/Programs/Python/Python38-32/python.exe'
}
