import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import { UserContext } from '../../Context/UserContext.context'
import {
  OtherData,
  OtherDataTitle,
  ProfileWrapper,
  STabPane,
  STabs,
  SUserOutlined,
  UserData,
  UserDataWrapper,
  UserIconWrapper,
  UserInfoWrapper,
  UserOtherContainer,
} from './SProfile'
import { PROFILE_TABS } from '../../Constants/profile.constants'
import useAxios from '../../Utils/hooks/useAxios'
import {
  ItemImage,
  ItemName,
  SearchedItem,
  SLink,
} from '../Films/SFilms'

export const ProfilePage: React.FC = () => {
  const { userData, setUserData } =
    useContext<any>(UserContext)

  const [content, setContent] = useState<
    any[] | undefined
  >()

  const [isLoading, setIsLoading] = useState(false)

  const axiosPrivate = useAxios()

  useEffect(() => {
    let loading = true

    axiosPrivate.get('/user/likely').then(({ data }) => {
      setContent(data)
    })

    return () => {
      loading = false
    }
  }, [])

  const handleChangeTab = useCallback(
    async (value: string) => {
      setIsLoading(true)
      switch (value) {
        case PROFILE_TABS[0].key:
          await axiosPrivate
            .get('/user/likely')
            .then((data) => {
              setContent(data.data)
            })
            .finally(() => {
              setIsLoading(false)
            })
          return value
        case PROFILE_TABS[1].key:
          await axiosPrivate
            .get('/user/dislikely')
            .then((data) => {
              setContent(data.data)
            })
            .finally(() => {
              setIsLoading(false)
            })
          return value
        case PROFILE_TABS[2].key:
          await axiosPrivate
            .get('/user/favorite')
            .then((data) => {
              setContent(data.data)
            })
            .finally(() => {
              setIsLoading(false)
            })
          return value
        case PROFILE_TABS[3].key:
          await axiosPrivate
            .get('/user/comments')
            .then((data) => {
              setContent(data.data)
            })
            .finally(() => {
              setIsLoading(false)
            })
          return value
      }
    },
    []
  )

  console.log(userData)

  if (!userData && !content) {
    return null
  }

  return (
    <ProfileWrapper>
      <UserInfoWrapper>
        <UserIconWrapper>
          <SUserOutlined />
        </UserIconWrapper>
        <UserDataWrapper>
          <UserData>{userData.username}</UserData>
          <UserOtherContainer>
            <OtherDataTitle>Email</OtherDataTitle>
            <OtherData>{userData.email}</OtherData>
          </UserOtherContainer>
          <UserOtherContainer>
            <OtherDataTitle>Регистрация</OtherDataTitle>
            <OtherData>
              {dayjs(userData.createdAt)
                .locale('ru')
                .format('DD MMMM YYYY, HH:MM')}
            </OtherData>
          </UserOtherContainer>
          <UserOtherContainer>
            <OtherDataTitle>Подписка</OtherDataTitle>
            <OtherData>
              {userData.subscribeType === null
                ? 'нет подписки'
                : `до 12312skdfj`}
            </OtherData>
          </UserOtherContainer>
        </UserDataWrapper>
      </UserInfoWrapper>
      <STabs
        defaultActiveKey='like'
        onChange={handleChangeTab}>
        {PROFILE_TABS.map(
          (tab: { tab: string; key: string }) => {
            return (
              <STabPane key={tab.key} tab={tab.tab}>
                {content?.map((film: any) => (
                  <SLink
                    to={`/watch/${film.type}/${film.id}`}
                    key={film.id}>
                    <SearchedItem>
                      <ItemImage src={film.images.logo} />
                      <ItemName>
                        {film.titleRu} ({film.titleEn})
                      </ItemName>
                    </SearchedItem>
                  </SLink>
                ))}
                {!content?.length && !isLoading && (
                  <span>Здесь нет контента</span>
                )}
              </STabPane>
            )
          }
        )}
      </STabs>
    </ProfileWrapper>
  )
}
