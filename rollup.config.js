const typescript = require('rollup-plugin-typescript2');
export default {
    input: './index.ts',

    plugins: [
        typescript({
            exclude: 'node_modules/**',
            typescript: require('typescript'),
        }),
    ],
    // external: ['raf', 'any-scroll'],
    output: [{
        // globals: { 'any-scroll': 'AnyTouch',raf:'raf' },
        format: 'umd',
        name: 'AnyWheel',
        file: `./dist/any-wheel.umd.js`,
        sourcemap: false,
    },{
        format: 'es',
        name: 'AnyWheel',
        file: `./dist/index.es.js`,
        sourcemap: false,
    },{
        format: 'cjs',
        exports:'default',
        name: 'AnyWheel',
        file: `./dist/indes.cjs.js`,
        sourcemap: false,
    }]
};