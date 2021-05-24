import {  useMemo } from 'react'
import PropTypes from 'prop-types'
import { EditButton } from '../form'
import { useAuth } from '../../contexts'
import { Link } from '../link'
import ReactMarkdown from 'react-markdown'
import { Typography } from 'antd'
import './page.css'
import { Page } from './'

const { Title } = Typography

//

const componentMap = {
  a: ({ node, href, children, ...props }) => <Link to={ href } { ...props }>{ children }</Link>,
  h2: ({ node, children, ...props }) => <Title level={ 2 } { ...props }>{ children }</Title>,
  h3: ({ node, children, ...props }) => <Title level={ 3 } { ...props }>{ children }</Title>,
  h4: ({ node, children, ...props }) => <Title level={ 4 } { ...props }>{ children }</Title>,
  h5: ({ node, children, ...props }) => <Title level={ 5 } { ...props }>{ children }</Title>,
  ul: ({ node, children, ...props }) => <ul style={{ listStyleType: 'circle', padding: '0 1.5rem' }}>{ children }</ul>,
}

//

export const CMSPage = ({ id, title, breadcrumbs, markdown }) => {
  const { user } = useAuth()

  const MemoizedActions = useMemo(() => user.editor && <EditButton href={ `http://localhost:1337/admin/plugins/content-manager/collectionType/application::page.page/${ id }` } />, [id, user])

  return (
    <Page
      title={ title }
      breadcrumbs={ breadcrumbs }
      actions={ MemoizedActions }
    >
      <ReactMarkdown
        children={ markdown }
        components={ componentMap }
      />
    </Page>
  )
}

CMSPage.propTypes = {
  title: PropTypes.string.isRequired,
  breadcrumbs: PropTypes.array.isRequired,
  markdown: PropTypes.string.isRequired,
}
