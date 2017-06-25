//Dependencies
import babel from 'rollup-plugin-babel';
import localResolve from 'rollup-plugin-local-resolve';

//Module
export default {
	entry: 'lib/index.js',
	format: 'cjs',
	dest: 'index.js',
	plugins: [
		localResolve(),
		babel({
			exclude: 'node_modules/**',
		}),
	],
};