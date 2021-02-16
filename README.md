# React SVG Loaders

[![Build Status](https://travis-ci.org/ajwann/react-loading-icons.svg?branch=master)](https://travis-ci.org/ajwann/react-loading-icons)
[![npm version](https://badge.fury.io/js/react-loading-icons.svg)](https://badge.fury.io/js/react-loading-icons)
![Unit Test CI](https://github.com/dkress59/react-loading-icons/workflows/Unit%20Test%20CI/badge.svg)

This is a zero-dependency React adaptation of Sam Herberts [SVG Loaders](https://github.com/SamHerbert/SVG-Loaders) library. **Built with React 17 and TypeScript.**

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
import LoadingIcons from 'react-loading-icons';
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

Each of these components should be able to accept any [SVG tag presentation attributes](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Presentation) as props.

## Common Usage

```tsx
// render the Puff loader with a stroke opacity of .125
<Puff strokeOpacity=".125" />

// render the Puff loader with a stroke of mint green
<Puff stroke="#98ff98" />

// render the Puff loader with a stroke of mint green and a stroke opactiy of .125
<Puff stroke="#98ff98" strokeOpacity=".125" />
```
