import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'

import {
    main,
    source,
} from './package.json'

const extensions = [
    '.ts',
    '.tsx',
    '.js',
]

function external(id) {
    return !id.startsWith('.') && !id.startsWith('/')
}

function onwarn(message) {
    const suppressed = [
        'CIRCULAR_DEPENDENCY',
        'THIS_IS_UNDEFINED',
        'UNRESOLVED_IMPORT',
    ]

    if (!suppressed.includes(message.code)) {
        return console.warn(message.message)
    }
}

function createBuildConfig(options = {}) {
    return {
        ...options,
        external,
        onwarn,
        plugins: [
            ...(options.plugins || []),
            nodeResolve({ extensions }),
            babel({
                babelHelpers: 'runtime',
                exclude: 'node_modules/**',
                extensions,
            }),
        ],
    }
}

export default [
    createBuildConfig({
        input: source,
        output: {
            file: main,
            format: 'cjs',
            sourcemap: true,
        },
        plugins: [
            commonjs(),
        ],
    }),
]
