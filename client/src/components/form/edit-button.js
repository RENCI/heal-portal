import PropTypes from 'prop-types'
import { Button } from 'antd'
import {
  EditOutlined as EditIcon,
  SaveOutlined as SaveIcon,
} from '@ant-design/icons'

export const EditButton = ({ icon, ...props }) => {
  let Icon = <EditIcon />
  if (icon === 'save') {
    Icon = <SaveIcon />
  }
  return (
    <Button
      type="ghost"
      size="large"
      icon={ Icon }
      className="edit-button"
      { ...props }
    />
  )
}

EditButton.propTypes = {
  icon: PropTypes.oneOf(['edit', 'save'])
}

EditButton.defaultProps = {
  icon: 'edit',
}
