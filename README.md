# Effect Bug Repro

## Setup

1. Clone repo
1. Run `yarn`
1. Run `yarn build` (You can run `yarn build:clean` to reset the build cache)

(You can also run `yarn dev:ts:esm` and `yarn dev:ts:cjs` in two terminals for auto-watch builds.)

## Run

1. `cd packages/playgrounds/playground-starter`
1. `yarn contentlayer build`

### Working case

![](https://i.imgur.com/Q6anqvz.png)

### Hanging case:

![](https://i.imgur.com/CmKpkJ2.png)

### How to make it fail/hang

- Comment out `packages/@contentlayer/source-files/src/index.ts:150-151`
- Comment out `packages/@contentlayer/core/src/generation/generate-dotpkg.ts:86`
- Comment in `packages/@contentlayer/core/src/generation/generate-dotpkg.ts:87-89`
