import {defineConfig} from 'vite';

export default defineConfig(({command})=>({
 base:command==='build'?'/drink_web/':'/',
 esbuild:{jsx:'automatic'},
 build:{rollupOptions:{output:{manualChunks:{three:['three'],lottie:['lottie-web'],animation:['gsap']}}}}
}));
