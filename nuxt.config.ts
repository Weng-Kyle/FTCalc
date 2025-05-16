// https://nuxt.com/docs/api/configuration/nuxt-config
import { presetDaisy } from '@ameinhardt/unocss-preset-daisy';
import { defineNuxtConfig } from 'nuxt/config';
import { presetUno } from 'unocss';

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  css: ['@unocss/reset/tailwind.css'],
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/eslint', '@nuxt/image', '@unocss/nuxt'],
  unocss: {
    presets: [presetUno(), presetDaisy()]
  },
})