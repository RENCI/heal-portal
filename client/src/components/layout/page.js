import { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Divider, Layout, Typography } from 'antd'
import { PageHeader } from './page-header'
import { Breadcrumbs } from './breadcrumbs'
import './layout.css'
import './page.css'

const { Content } = Layout
const { Title } = Typography

//

export const Page = ({ title, breadcrumbs, children, actions }) => {
  return (
    <Fragment>
      <PageHeader>
        <Breadcrumbs crumbs={ breadcrumbs } />
        { actions }
      </PageHeader>
      { title && <Title className="page-title">{ title }</Title> }
      <Divider />
      <Content className="page-content">
        { children }
      </Content>
    </Fragment>
  )
}

Page.propTypes = {
  title: PropTypes.string.isRequired,
  breadcrumbs: PropTypes.array,
  children: PropTypes.node.isRequired,
}

