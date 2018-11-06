import React from 'react'

import OrganiChildren from './organigram-children'
import OrganiNode     from './organigram-node'

const Organi = ({
  element,
  children,
  ...rest,
}) => {
  const hasChild =
    children instanceof Array
      ? children.length
      : children

  const organigramParent = (
    <OrganiNode parent={hasChild} {...rest}>
      {element}
    </OrganiNode>
  )

  const organigramChildren = hasChild && (
    <OrganiChildren>
      {children}
    </OrganiChildren>
  )

  return (
    <div>
      {organigramParent}
      {organigramChildren}
    </div>
  )
}

export default Organi
