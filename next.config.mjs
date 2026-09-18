import path from 'path'
import { fileURLToPath } from 'url'

/** Raíz del proyecto: evita que Turbopack use /home/tucan y vigile todo el disco. */
const projectRoot = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: projectRoot,
  },
}

export default nextConfig
