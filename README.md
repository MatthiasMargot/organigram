# organigram

Declaratively generate visual child-parent relationships in an organised tree-shape diagram.

### Install

```
npm install organigram
```

<p align="center">
create this:
</p>

<img width="100%" src="https://i.gyazo.com/c7590223eb73e6420b9de13265180650.png">

<p align="center">
like this:
</p>

```jsx
import Organigram from 'organigram'

const
  blueElement = <div className={'blue'} />,
  yellowElement = <div className={'yellow'} />,
  redElement = <div className={'red'} />,
  greenElement = <div className={'green'} />

const organisationalDiagram = (
  <Organigram element={blueElement}>
    <Organigram element={yellowElement} />
    <Organigram element={yellowElement} />
    <Organigram element={yellowElement}>
      <Organigram element={redElement}>
        <Organigram element={greenElement} />
        <Organigram element={greenElement} />
      </Organigram>
      <Organigram element={redElement} />
    </Organigram>
  </Organigram>
)
```

Declare a hierarchy by nesting `Organigram` elements into eachother and you get an organised diagram (tree-shape) that visually represents the parent-child relationship of your data/elements.

Organigram takes care of layout + linkage (white lines) while still leaving you with full control over what to render where in the generated tree.

### Wording

Organigram is an abbreviated composition of the two words `Organisational` and `Diagram`.

### Api

#### `<Organigram />`

| prop | type | description |
|-|-|-|
| element | `React.Node` | The top level element you want to render for this particular node in your organigram |
| children | `React.Node` | The children of the node specified in `element` (semantic not technical, the rendered output is not nested into the element passed in the `element` prop) |
