import styled from 'styled-components'
import { UserOutlined } from '@ant-design/icons'

export const SUserOutlined = styled(UserOutlined)`
  color: ${(props) => props.theme.colors.gray.gray2};
  font-size: 35px;
`

export const CommentWrapper = styled.div`
  max-width: 1150px;
  min-width: 1150px;
  width: 100%;
  background: #121212;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.59);
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 25px;
  column-gap: 30px;

  & > :first-child {
    
  }
`

export const CommentData = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  color: ${(props) => props.theme.colors.gray.gray2};
`

export const CommentTitle = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`

export const TitleNickname = styled.span`
  font-size: 14px;
  font-weight: 600;
  line-height: 19px;
`

export const TitleDate = styled.span`
  font-size: 13px;
  font-weight: 500;
  line-height: 15px;
  color: ${(props) => props.theme.colors.gray.gray4};
`

export const CommentDescription = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
`
