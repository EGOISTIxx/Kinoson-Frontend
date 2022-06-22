import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import { Form, Radio } from 'antd'
import ActorsSlider from '../../Components/ActorsSlider/ActorsSlider'
import Comments from '../../Components/Comments/Comments'
import Player from '../../Components/Player/Player'
import Trailer from '../../Components/Trailer/Trailer'
import { UserContext } from '../../Context/UserContext.context'
import { WatchContext } from '../../Context/WatchContext.context'
import formatPrice from '../../Utils/formatPrice'
import formatTrackTime from '../../Utils/formatTime'
import {
  PopularityLine,
  PopularityTitle,
} from '../Main/SMain'
import {
  CollapseWrapper,
  CommentsBlock,
  ContentInfo,
  CustomPanel,
  Desc,
  Description,
  FavouritesButton,
  GalleryWrapper,
  InfoItem,
  InfoTitle,
  OtherInfoWrapper,
  RaitingButton,
  RaitingItem,
  RaitingWrapper,
  SForm,
  SGroup,
  SIMDbLogo,
  SKinopoiskLogo,
  SSendOutlined,
  SUserOutlined,
  Title,
} from './SWatch'
import TextInput from '../../Components/TextInput/TextInput'
import useAxios from '../../Utils/hooks/useAxios'

export const WatchPage: React.FC = () => {
  const axiosPrivate = useAxios()

  const {
    currentFilm,
    filmActors,
    filmComments,
    getFilmComments,
    createComment,
    setCurrentFilm,
  } = useContext<any>(WatchContext)

  const [watchData, setWatchData] = useState(null)

  const { userData, setUserData } =
    useContext<any>(UserContext)

  const disabledButtonRef = useRef(
    userData?.changedRaitingFilms.some(
      (film: { filmId: string; raiting: string }) =>
        film?.filmId === currentFilm?.id
    )
  )

  useEffect(() => {
    if (currentFilm?.type === 'serial') {
      setWatchData(
        JSON.parse(currentFilm.watch)[0].data[0].watch
      )
    }
  }, [currentFilm])

  const handleAddToFavourites = useCallback(
    async (filmId) => {
      await axiosPrivate
        .post(`/user/updateFavourites`, {
          filmId,
        })
        .then((user) => {
          setUserData(user.data)
        })
    },
    []
  )

  const handleRemoveFromFavourites = useCallback(
    async (filmId) => {
      await axiosPrivate
        .post(`/user/removeFavourite`, {
          filmId,
        })
        .then((user) => {
          setUserData(user.data)
        })
    },
    []
  )

  const handleChangeRaiting = useCallback(
    async (filmId, raiting, internalRaiting) => {
      if (raiting === 'like') {
        await axiosPrivate
          .post(`/film/update/${filmId}`, {
            plus: Number(internalRaiting.plus) + 1,
            minus: internalRaiting.minus,
          })
          .then((film) => {
            setCurrentFilm(film.data)
          })

        await axiosPrivate
          .post(`/user/updateFilmRaiting`, {
            filmId,
            raiting,
          })
          .then((user) => {
            setUserData(user.data)
          })
      }

      if (raiting === 'dislike') {
        await axiosPrivate
          .post(`/film/update/${filmId}`, {
            plus: Number(internalRaiting.plus),
            minus: Number(internalRaiting.minus) + 1,
          })
          .then((film) => {
            setCurrentFilm(film.data)
          })

        await axiosPrivate
          .post(`/user/updateFilmRaiting`, {
            filmId,
            raiting,
          })
          .then((user) => {
            setUserData(user.data)
          })
      }
    },
    []
  )

  if (
    currentFilm === undefined ||
    !filmActors.length ||
    userData === undefined ||
    filmComments === undefined
  ) {
    return null
  }

  const handleFinish = (values: any) => {
    const { text } = values

    const userImage =
      userData.image === null ? '' : userData.image

    createComment(
      text,
      currentFilm.id,
      userData.username,
      userImage
    ).then(() => {
      getFilmComments(currentFilm.id)
    })
  }

  return (
    <>
      <Trailer
        poster={currentFilm.images.mainPoster}
        trailer={currentFilm.trailer}
      />
      <ContentInfo>
        <RaitingWrapper>
          <RaitingItem>
            <SKinopoiskLogo />{' '}
            {currentFilm.externalRainting.kinopoisk}
          </RaitingItem>
          <RaitingItem>
            <SIMDbLogo />{' '}
            {currentFilm.externalRainting.IMDb}
          </RaitingItem>
        </RaitingWrapper>
        <InfoTitle>
          <span>{currentFilm.titleRu}</span>
          <span>{currentFilm.titleEn}</span>
          <span>{currentFilm.releaseDate}</span>
        </InfoTitle>
        <OtherInfoWrapper>
          <InfoItem>
            <Title>Страна</Title>
            <Desc>{currentFilm.countries.join(', ')}</Desc>
          </InfoItem>
          <InfoItem>
            <Title>Режиссёр</Title>
            <Desc>{currentFilm.creators.join(', ')}</Desc>
          </InfoItem>
          <InfoItem>
            <Title>Жанр</Title>
            <Desc>{currentFilm.geners.join(', ')}</Desc>
          </InfoItem>
          <InfoItem>
            <Title>Год выхода</Title>
            <Desc>{currentFilm.releaseDate}</Desc>
          </InfoItem>
          <InfoItem>
            <Title>Длительность</Title>
            <Desc>
              {formatTrackTime(currentFilm.duration * 60)}
            </Desc>
          </InfoItem>
          <InfoItem>
            <Title>Сборы</Title>
            <Desc>{formatPrice(currentFilm.profit)}</Desc>
          </InfoItem>
        </OtherInfoWrapper>
        <Description>{currentFilm.description}</Description>
        <PopularityTitle style={{ marginBottom: '5px' }}>
          Актеры
        </PopularityTitle>
        <PopularityLine />
        <ActorsSlider actors={filmActors} />
        <PopularityTitle style={{ marginBottom: '5px' }}>
          Постеры
        </PopularityTitle>
        <PopularityLine />
        <GalleryWrapper>
          {currentFilm.posters
            .map((image: string, i: number) => [
              Math.random(),
              image,
            ])
            .sort()
            .map((image: string) => (
              <div key={image[0]}>
                <img src={image[1]} loading='lazy' />
              </div>
            ))}
        </GalleryWrapper>
        <Player player={watchData || currentFilm.watch} />
        <SGroup>
          <RaitingButton
            view='like'
            disabled={disabledButtonRef.current}
            onClick={() =>
              handleChangeRaiting(
                currentFilm.id,
                'like',
                currentFilm.internalRaiting
              )
            }>
            Нравится {currentFilm.internalRaiting.plus}
          </RaitingButton>
          <RaitingButton
            view='dislike'
            disabled={disabledButtonRef.current}
            onClick={() =>
              handleChangeRaiting(
                currentFilm.id,
                'dislike',
                currentFilm.internalRaiting
              )
            }>
            Не нравится {currentFilm.internalRaiting.minus}
          </RaitingButton>
        </SGroup>
        {!userData.favourites.includes(currentFilm.id) ? (
          <FavouritesButton
            onClick={() =>
              handleAddToFavourites(currentFilm.id)
            }>
            В избранное
          </FavouritesButton>
        ) : (
          <FavouritesButton
            onClick={() =>
              handleRemoveFromFavourites(currentFilm.id)
            }>
            Из избранного
          </FavouritesButton>
        )}
        {currentFilm.type === 'serial' && (
          <Radio.Group
            defaultValue={`${
              JSON.parse(currentFilm.watch)[0].title
            }_${
              JSON.parse(currentFilm.watch)[0].data[0].watch
            }`}
            onChange={(e) => {
              setWatchData(e.target.value.split('_')[1])
            }}
            style={{ maxWidth: '1200px', width: '100%' }}>
            {JSON.parse(currentFilm.watch).map(
              (serialItem: {
                title: string
                data: object[]
              }) => {
                return (
                  <CollapseWrapper bordered={false}>
                    <CustomPanel
                      header={serialItem.title}
                      key={serialItem.title}>
                      {serialItem.data.map(
                        (seriesData: any) => {
                          return (
                            <Radio.Button
                              value={`${serialItem.title}_${seriesData.watch}`}>
                              {seriesData.title}
                            </Radio.Button>
                          )
                        }
                      )}
                    </CustomPanel>
                  </CollapseWrapper>
                )
              }
            )}
          </Radio.Group>
        )}
        <PopularityTitle style={{ marginBottom: '5px' }}>
          Комментарии
        </PopularityTitle>
        <PopularityLine />
        <CommentsBlock>
          <SForm onFinish={handleFinish}>
            <SUserOutlined />
            <Form.Item name='text'>
              <TextInput
                type='text'
                placeholder='Оставьте свой комментарий...'
                isCommentary={true}
              />
            </Form.Item>
            <FavouritesButton htmlType='submit'>
              <SSendOutlined />
            </FavouritesButton>
          </SForm>
          <Comments comments={filmComments} />
        </CommentsBlock>
      </ContentInfo>
    </>
  )
}
