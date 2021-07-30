import { Currency, ETHER, Token } from '@pancakeswap/sdk'
import { BinanceIcon } from '@pancakeswap/uikit'
import React, { useEffect, useMemo } from 'react'
import styled from 'styled-components'
import useHttpLocations from '../../hooks/useHttpLocations'
import { WrappedTokenInfo } from '../../state/lists/hooks'
import getTokenLogoURL from '../../utils/getTokenLogoURL'
import Logo from './Logo'

const StyledLogo = styled(Logo)<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`

export default function CurrencyLogo({
                                       currency,
                                       size = '24px',
                                       style,
                                     }: {
  currency?: Currency
  size?: string
  style?: React.CSSProperties
}) {
  const uriLocations = useHttpLocations(currency instanceof WrappedTokenInfo ? currency.logoURI : undefined)
  const srcs: string[] = useMemo(() => {
    if (currency === ETHER) return []

    if (currency instanceof Token) {
      if (currency instanceof WrappedTokenInfo) {
        if (currency.address.toLowerCase() === '0x6d98ac849df87ce5cb1b15cc25df6199b252be65') return [...uriLocations, 'https://pbs.twimg.com/profile_images/1416535012627947525/1gRU0qc3_400x400.png']
        return [...uriLocations, getTokenLogoURL(currency.address)]
      }
      if (currency.address.toLowerCase() === '0x6d98ac849df87ce5cb1b15cc25df6199b252be65') return ['https://pbs.twimg.com/profile_images/1416535012627947525/1gRU0qc3_400x400.png']
      return [getTokenLogoURL(currency.address)]
    }
    return []
  }, [currency, uriLocations])

  if (currency === ETHER) {
    return <BinanceIcon width={size} style={style}/>
  }

  return <StyledLogo size={size} srcs={srcs} alt={`${currency?.symbol ?? 'token'} logo`} style={style}/>
}
