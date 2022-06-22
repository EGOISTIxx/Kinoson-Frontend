import styled from 'styled-components'
import {
  SearchOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Popover } from 'antd'

export const SSearchOutlined = styled(SearchOutlined)``
export const SUserOutlined = styled(UserOutlined)`
  font-size: 18px;
  color: ${(props) => props.theme.colors.gray.gray1};
`

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 65px;
  margin: 0 auto;
  user-select: none;
  z-index: 10;
`

export const HeaderLogo = styled.span`
  font-family: 'Faster One';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 38px;
  color: ${(props) => props.theme.colors.yellow.yellow5};
  text-transform: uppercase;
  text-shadow: 0px 4px 42.1px rgba(255, 172, 48, 0.8);
  cursor: pointer;
`

export const HeaderLinks = styled.div`
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const SPopover = styled(Popover)`
  cursor: pointer;
`
