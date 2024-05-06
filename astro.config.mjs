import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'hybrid' //se puede elegir que renderizar en sservidor
  //output: 'server' //con esto está funcionando en el servido, se vuelve "dinamica"
});