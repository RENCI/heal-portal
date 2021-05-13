import { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Breadcrumb, Divider, Layout, Typography } from 'antd'
import { Link } from '@reach/router'
import '../layout.css'

const { Content } = Layout
const { Title } = Typography

export const Page = ({ title, breadcrumbs, children }) => {
  return (
    <Fragment>
      { title && <Title className="page-title">{ title }</Title> }
      {
        breadcrumbs && (
          <Breadcrumb className="breadcrumbs">
            {
              breadcrumbs.map(({ text, path }, i) => {
                if (i + 1 === breadcrumbs.length) {
                  return <Breadcrumb.Item key={ path }>{ text }</Breadcrumb.Item>
                }
                return <Breadcrumb.Item key={ path }><Link to={ path }>{ text }</Link></Breadcrumb.Item>
              })
            }
          </Breadcrumb>
        )
      }
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
  html: PropTypes.string,
  jsx: PropTypes.object,
}
