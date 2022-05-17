# React Loading Icons

[![npm version](https://badge.fury.io/js/react-loading-icons.svg)](https://badge.fury.io/js/react-loading-icons)
![Unit Test CI](https://github.com/dkress59/react-loading-icons/workflows/Unit%20Test%20CI/badge.svg)
[![codecov](https://codecov.io/gh/dkress59/react-loading-icons/branch/master/graph/badge.svg?token=4KMKEPIAWM)](https://codecov.io/gh/dkress59/react-loading-icons)
![Integration Test CI](https://github.com/dkress59/react-loading-icons/workflows/Integration%20Test%20CI/badge.svg)

A pure SVG zero-dependency React adaptation of Sam Herbert's [SVG Loaders](https://github.com/SamHerbert/SVG-Loaders) library.

**Built with React 17 and TypeScript.**
Check out the [Demo](https://loading.damiankress.de)!

Also works with JavaScript, of course (supports ESM tree shaking).

## Usage

### Install from NPM

```bash
yarn add react-loading-icons
```

```bash
npm install react-loading-icons
```

### Import all the loaders in a namespaced fashion

You can import all the loaders at once:

```ts
import LoadingIcons from 'react-loading-icons'
```

and use them in a namespaced manner:

```tsx
<LoadingIcons.Bars />
```

### Import an individual loader

You can also import a single loader:

```ts
import { Bars } from 'react-loading-icons'
```

and use it without any fancy namespacing:

```tsx
<Bars />
```

You can even go as far as copying over a single .js file from the `dist/components` directory to your project — this way you can directly import a certain loading icon without having to import the whole package.

### Components

```tsx
<Audio />
<BallTriangle />
<Bars />
<Circles />
<Grid />
<Hearts />
<Oval />
<Puff />
<Rings />
<SpinningCircles />
<TailSpin />
<ThreeDots />
```

## Options

Each of these components will accept any [SVG tag presentation attributes](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Presentation) as well as all valid JSX properties (`key`, `onClick`, …) as props. Animation speed can be controlled via **speed** attribute (`1` = 100% speed, `.5` = 50% speed, `2` = 200%, and so on). The components are also smart about inheriting `fill`, `fillOpacity`, `stroke`, `strokeOpactiy` and `strokeWidth`, so these can also easily be controlled.

## Common Usage

```tsx
// renders the Puff icon with a mint green stroke
<Puff stroke="#98ff98" />

// renders the Puff icon's mint green stroke with an opacity of 12.5%
<Puff stroke="#98ff98" strokeOpacity={.125} />

// renders the Puff icon at 75% speed with a mint green stroke with an opacity of 12.5%
<Puff stroke="#98ff98" strokeOpacity={.125} speed={.75} />
```
