<p align="center">
<strong>organigram</strong>
</p>

<p align="center">
create this:
</p>

<p align="center">
  <img width="600" src="https://i.gyazo.com/c7590223eb73e6420b9de13265180650.png">
</p>

<p align="center">
like this:
</p>

```jsx
const
  blueElement = <div className={'blue'} />,
  redElement = <div className={'red'} />,
  greenElement = <div className={'green'} />,
  yellowElement = <div className={'yellow'} />

render(
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

Declare the hierarchy of your Components by nesting them into eachother and `Organigram` takes care of layout + linkage (white lines) leaving you with full control over what to render where in the tree by simply passing a `React.Element` as the `element` prop.
