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
        name: 'watchWheel',
        file: `./dist/watch-wheel.umd.js`,
        sourcemap: false,
    },{
        format: 'es',
        name: 'watchWheel',
        file: `./dist/index.es.js`,
        sourcemap: false,
    },{
        format: 'cjs',
        exports:'default',
        name: 'watchWheel',
        file: `./dist/indes.cjs.js`,
        sourcemap: false,
    }]
};