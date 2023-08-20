import { Spin } from 'antd'

interface ILoading {
  tip?: string
}

const Loading = ({ tip = 'Loading...' }: ILoading) => {
  return <Spin tip={tip} size='large' />
}

export default Loading
