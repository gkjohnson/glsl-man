import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import alias from '@rollup/plugin-alias';

export default {
	input: './index.js',
    plugins: [commonjs(), resolve({ preferBuiltins: false }), alias({
        entries: [{
            find: 'emitter', replacement: 'events'
        }]
    })],
	output: {

		extend: true,
		format: 'module',
		file: './build/glsl-man.js',
		sourcemap: true,

	},

};