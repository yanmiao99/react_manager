import { Result, Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const NotAuth = () => {
  const navigate = useNavigate()

  const gotoHome = () => {
    navigate('/')
  }

  return (
    <Result
      status='403'
      title='403'
      subTitle='抱歉，您没有权限访问此页面。'
      extra={
        <Button type='primary' onClick={gotoHome}>
          返回首页
        </Button>
      }
    />
  )
}

export default NotAuth
