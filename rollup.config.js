import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/medical-chat.umd.js',
      format: 'umd',
      name: 'MedicalChatWidget',
      sourcemap: true
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({ useTsconfigDeclarationDir: true }),
      terser()
    ]
  },
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/medical-chat.esm.js',
      format: 'esm',
      sourcemap: true
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({ useTsconfigDeclarationDir: true }),
      terser()
    ]
  }
];