import React, { useState } from 'react'
import { FavouritesButton } from '../Watch/SWatch'
import {
  CollapseWrapper,
  CustomPanel,
  Desc,
  InfoItem,
  PanelItem,
  SubscribeWrapper,
  Title,
} from './SSubscribe'

export const SubscribePage: React.FC = () => {
  const [subscribeType, setSubscribeType] = useState<
    string | string[]
  >()

  const handleChange = (key: string | string[]) => {
    console.log(key)
    setSubscribeType(key)
  }

  return (
    <SubscribeWrapper>
      <CollapseWrapper
        accordion
        onChange={handleChange}
        bordered={false}>
        <CustomPanel header='Базовая подписка' key='base'>
          <PanelItem>
            <InfoItem>
              <Title>Длительность подписки</Title>
              <Desc>30 дней</Desc>
            </InfoItem>
            <InfoItem>
              <Title>Стоимость подписки</Title>
              <Desc>125 рублей</Desc>
            </InfoItem>
          </PanelItem>
        </CustomPanel>
        <CustomPanel header='Средняя подписка' key='middle'>
          <PanelItem>
            <InfoItem>
              <Title>Длительность подписки</Title>
              <Desc>90 дней</Desc>
            </InfoItem>
            <InfoItem>
              <Title>Стоимость подписки</Title>
              <Desc>350 рублей</Desc>
            </InfoItem>
          </PanelItem>
        </CustomPanel>
        <CustomPanel
          header='Максимальная подписка'
          key='pro'>
          <PanelItem>
            <InfoItem>
              <Title>Длительность подписки</Title>
              <Desc>180 дней</Desc>
            </InfoItem>
            <InfoItem>
              <Title>Стоимость подписки</Title>
              <Desc>575 рублей</Desc>
            </InfoItem>
          </PanelItem>
        </CustomPanel>
      </CollapseWrapper>
      <FavouritesButton
        disabled={subscribeType === undefined}>
        Оформить
      </FavouritesButton>
    </SubscribeWrapper>
  )
}
