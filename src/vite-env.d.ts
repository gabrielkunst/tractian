/// <reference types="vite/client" />
/// <reference types="./types/svg.d.ts" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
