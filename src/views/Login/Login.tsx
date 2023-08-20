import request from '@/utils/request'
import { useEffect } from 'react'
import { Button } from 'antd'
import storage from '@/utils/storage'
import { formatMoney } from '@/utils'

const Login = () => {
  useEffect(() => {
    request
      .post<string>('/users/login', {
        id: 123
      })
      .then(res => {})
  }, [])

  const handleStorage = (type: number) => {
    switch (type) {
      case 1:
        storage.set('name', '张三')
        storage.set('userInfo', {
          name: '李四',
          age: '18'
        })
        storage.set('fraction', 18)
        break
      case 2:
        console.log(storage.get('name'))
        console.log(storage.get('userInfo'))
        break
      case 3:
        storage.remove('name')
        break
      case 4:
        storage.clear()
        break
    }
  }

  // 格式化金额
  const handleFormatMoney = () => {
    const currentMoney = 123123123
    console.log(formatMoney(currentMoney))
  }

  return (
    <>
      <div>登录</div>

      <Button onClick={() => handleStorage(1)}>设置</Button>
      <Button onClick={() => handleStorage(2)}>获取</Button>
      <Button onClick={() => handleStorage(3)}>清除单个</Button>
      <Button onClick={() => handleStorage(4)}>清除全部</Button>

      <Button onClick={handleFormatMoney}>格式化金额</Button>
    </>
  )
}

export default Login
