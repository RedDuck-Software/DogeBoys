import React, { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { languageList } from 'config/localization/languages'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import useAuth from 'hooks/useAuth'
import { usePriceCakeBusd } from 'state/farms/hooks'
import { useProfile } from 'state/profile/hooks'
import { ethers } from 'ethers'
import BigNumber from 'bignumber.js'
import { Menu as UikitMenu } from '../../Uikit/widgets/Menu'
import config from './config'
import { PANCAKE_FACTORY_ABI, PANCAKE_PAIR_ABI, PANCAKE_ROUTER_ABI } from '../../config/abi/PancakeFactoryABI'
import ERC20_INTERFACE from '../../config/abi/erc20'

const Menu = (props) => {
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { isDark, toggleTheme } = useTheme()
  const [cakePriceUsd, setCakePriceUsd] = useState<number | undefined>()
  const { profile } = useProfile()
  const { currentLanguage, setLanguage, t } = useTranslation()
  useEffect(() => {
    (async () => {
      const provider = new ethers.providers.JsonRpcProvider(
        "https://bsc-dataseed.binance.org/"
      );
      // const dogeBoysAddress = '0x6d98ac849df87ce5cb1b15cc25df6199b252be65';
      const dogeBoysAddress = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c';
      const dogeBoysContract = new ethers.Contract(
        dogeBoysAddress,
        ERC20_INTERFACE,
        provider
      )
      const dogeBoysDecimals = await dogeBoysContract.decimals();
      const busdAddress = '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d';
      const pancakeFactoryContract = new ethers.Contract(
        "0xca143ce32fe78f1f7019d7d551a6402fc5350c73",
        PANCAKE_FACTORY_ABI,
        provider
      );
      const pairAddress = await pancakeFactoryContract.getPair(dogeBoysAddress, busdAddress);
      const pancakeRouterContract = new ethers.Contract(
        '0x10ED43C718714eb63d5aA57B78B54704E256024E',
        PANCAKE_ROUTER_ABI,
        provider
      );
      const pancakePairContract = new ethers.Contract(
        pairAddress,
        PANCAKE_PAIR_ABI,
        provider
      );
      const [{ _reserve0, _reserve1 }, token0, token1] = await Promise.all([
        pancakePairContract.getReserves(),
        pancakePairContract.token0(),
        pancakePairContract.token1(),
      ]);
      const amountOutFull = await pancakeRouterContract.getAmountOut(
        ethers.utils.parseUnits("1", dogeBoysDecimals),
        ethers.utils.parseUnits(`${_reserve1 }`),
        ethers.utils.parseUnits(`${_reserve0 }`)
      );
      // @ts-ignore
      setCakePriceUsd((+amountOutFull / (+'1e18')));
    })()
  }, [])

  return (
    <UikitMenu
      account={account}
      login={login}
      logout={logout}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={currentLanguage.code}
      langs={languageList}
      setLang={setLanguage}
      cakePriceUsd={cakePriceUsd}
      links={config(t)}
      profile={{
        username: profile?.username,
        image: profile?.nft ? `/images/nfts/${profile.nft?.images.sm}` : undefined,
        profileLink: '/profile',
        noProfileLink: '/profile',
        showPip: !profile?.username,
      }}
      {...props}
    />

  )
}

export default Menu
