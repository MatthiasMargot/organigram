import React from 'react'

function strIf (str, bool) {
  return bool ? str : ''
}

const OrganiNode = ({
  last,
  first,
  child,
  parent,
  sole,
  children,
}) => {
  const nodeClass = 'organi-node'
    + strIf(' organi-node__child', child)
    + strIf(' organi-node__parent', parent)

  const linkClass = 'organi-link'
    + strIf(' organi-node__sole', sole)
    + strIf(' organi-link__middle', !last && !first && !sole)
    + strIf(' organi-link__first', first && !sole)
    + strIf(' organi-link__last', last && !sole)

  const link = child && <div className={linkClass} />
  const node = <div className={nodeClass}>{children}</div>

  return (
    <React.Fragment>
      {link}
      {node}
    </React.Fragment>
  )
}

export default OrganiNode
