export function createTreeWorker() {
  return new Worker(new URL('../workers/treeWorker.ts', import.meta.url), {
    type: 'module',
  })
}
