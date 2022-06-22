import styled from 'styled-components'
import { Collapse } from 'antd'

const { Panel } = Collapse

export const SubscribeWrapper = styled.div`
  margin: 0 auto;
  width: 80vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const CollapseWrapper = styled(Collapse)`
  width: 100%;
  background-color: transparent;
  margin-bottom: 50px;
`

export const CustomPanel = styled(Panel)`
  margin-bottom: 65px;
  border-bottom: 1px solid
    ${(props) => props.theme.colors.gray.gray2} !important;
  border-radius: 7px;

  &:first-child {
    box-shadow: 0px 4px 50px rgba(254, 243, 199, 0.59);
  }

  &:nth-child(2) {
    box-shadow: 0px 4px 50px rgba(251, 191, 36, 0.59);
  }

  &:last-child {
    box-shadow: 0px 4px 50px rgba(217, 119, 6, 0.59);
    margin-bottom: 0;
  }

  .ant-collapse-header {
    font-size: 16px;
  }

  & > * {
    color: ${(props) =>
      props.theme.colors.gray.gray2} !important;
  }
`

export const PanelItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 15px 15px;
  flex: 1 1 20rem;
  row-gap: 15px;
`

export const Title = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => props.theme.colors.gray.gray2};
`

export const Desc = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => props.theme.colors.gray.gray2};
  white-space: nowrap;
`
