import React from 'react'
import dayjs from 'dayjs'
import {
  CommentData,
  CommentDescription,
  CommentTitle,
  CommentWrapper,
  SUserOutlined,
  TitleDate,
  TitleNickname,
} from './SComments'

type TComments = {
  id: string
  username: string
  userImage: string
  text: string
  createdAt: string
  filmId: string
}

const Comments: React.FC<{ comments: TComments[] }> = (
  props
) => {
  const { comments } = props

  return (
    <>
      {comments.map((comment: TComments) => {
        return (
          <CommentWrapper key={comment.id}>
            {!comment.userImage.length && <SUserOutlined />}
            <CommentData>
              <CommentTitle>
                <TitleNickname>
                  {comment.username}
                </TitleNickname>
                <TitleDate>
                  {dayjs(comment.createdAt).format(
                    'D/M/YYYY HH[ч] - mm[мин] - ss[сек]'
                  )}
                </TitleDate>
              </CommentTitle>
              <CommentDescription>
                {comment.text}
              </CommentDescription>
            </CommentData>
          </CommentWrapper>
        )
      })}
    </>
  )
}

export default Comments
