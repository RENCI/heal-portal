import PropTypes from 'prop-types'
import { Link as RouterLink } from '@reach/router'

export const ExternalLink = ({ to, children }) => <a href={ to } target="_blank" rel="noopener noreferrer">{ children }</a>

export const Link = ({ to, children, ...props }) => {
  const externalUrlPattern = new RegExp(/^https?:\/\//)
  const externalUrlMatch = externalUrlPattern.exec(to)
  const LinkComponent = externalUrlMatch ? ExternalLink : RouterLink
  return <LinkComponent to={ to } { ...props }>{ children }</LinkComponent>
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
