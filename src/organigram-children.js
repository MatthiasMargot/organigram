import React from 'react'

function enhanceWithOrganiChildProps (child, i) {

  const sole = this.length === 1
  const first = i === 0
  const last = i === this.length - 1

  return React.cloneElement(
    child,
    {
      child: true,
      sole,
      first,
      last,
    },
  )
}

const OrganiChildren = ({
  children,
  ...rest,
}) => {
  /* normalize in case of single child */
  const childrenArray = children instanceof Array
    ? children
    : [children]

  const clones = React.Children.map(
    childrenArray,
    enhanceWithOrganiChildProps,
    childrenArray,
  )

  return (
    <div className={'organi-row'} {...rest}>
      {clones}
    </div>
  )
}

export default OrganiChildren
