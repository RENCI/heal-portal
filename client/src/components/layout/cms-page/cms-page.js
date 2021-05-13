import { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'
import { Breadcrumb, Button, Divider, Layout, Typography } from 'antd'
import { EditOutlined as EditIcon } from '@ant-design/icons'
import { useAuth } from '../../../contexts'
import './cms-page.css'

const { Content } = Layout
const { Title } = Typography

export const CMSPage = ({ id, title, breadcrumbs, html }) => {
  const { user } = useAuth()

  return (
    <Fragment>
      
      {
        user.editor && (
          <Button
            type="ghost"
            size="large"
            icon={ <EditIcon /> }
            className="edit-button"
            href={ `http://localhost:1337/admin/plugins/content-manager/collectionType/application::page.page/${ id }` }
          />
        )
      }

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

      <br /><br />

      <Title className="page-title">{ title }</Title>

      <Divider />
      
      <Content
        className="page-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />

    </Fragment>
  )
}

CMSPage.propTypes = {
  title: PropTypes.string.isRequired,
  breadcrumbs: PropTypes.array.isRequired,
  html: PropTypes.string.isRequired,
}
