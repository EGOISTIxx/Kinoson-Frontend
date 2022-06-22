import { UserOutlined } from '@ant-design/icons'
import { Tabs } from 'antd'
import styled from 'styled-components'

const { TabPane } = Tabs

export const ProfileWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 105px 0 35px;
`

export const UserInfoWrapper = styled.div`
  display: flex;
  margin-bottom: 40px;
`

export const UserIconWrapper = styled.div`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px rgba(254, 243, 199, 0.59);
  overflow: hidden;

  & > :first-child {
    border-radius: 50%;
  }
`

export const UserDataWrapper = styled.div`
  margin-left: 40px;
  color: ${(props) => props.theme.colors.gray.gray2};
`

export const UserData = styled.span`
  font-size: 45px;
  font-weight: 700;
`

export const UserOtherContainer = styled.div`
  font-size: 20px;
  display: flex;
  column-gap: 15px;
`

export const OtherDataTitle = styled.span`
  color: ${(props) => props.theme.colors.gray.gray4};
`

export const OtherData = styled.span``

export const STabs = styled(Tabs)`
  color: ${(props) =>
    props.theme.colors.gray.gray2} !important;

  .ant-tabs-ink-bar {
    background: ${(props) =>
      props.theme.colors.yellow.yellow4};
  }

  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: ${(props) => props.theme.colors.yellow.yellow4};
  }

  .ant-tabs-tab:hover {
    color: ${(props) => props.theme.colors.yellow.yellow4};
  }

  .ant-tabs-tab-btn:focus,
  .ant-tabs-tab-remove:focus,
  .ant-tabs-tab-btn:active,
  .ant-tabs-tab-remove:active {
    color: ${(props) => props.theme.colors.yellow.yellow6};
  }
`

export const STabPane = styled(TabPane)`
  color: ${(props) =>
    props.theme.colors.gray.gray2} !important;
`

export const SUserOutlined = styled(UserOutlined)`
  font-size: 205px;
  color: ${(props) => props.theme.colors.yellow.yellow6};
`
