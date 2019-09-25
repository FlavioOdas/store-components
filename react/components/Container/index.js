import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './Container.css'

const render = ({ className, children, ...props }, ref) => {
  const classes = classNames(
    styles.container,
    'mh5 mh6-m mh8-l mh9-xl',
    className
  )

  return (
    <section {...props} className={classes} ref={ref}>
      {children}
    </section>
  )
}

render.displayName = 'Container'

const Container = React.forwardRef(render)

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Container
