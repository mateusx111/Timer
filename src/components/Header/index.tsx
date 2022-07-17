import { HeaderContainer } from './styles'

import logoIgnite from '../../assets/logo-ignite.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="Um triangulo sobreposto sobre o outro" />
      <nav>
        <a href="">Timer</a>
        <a href="">history</a>
      </nav>
    </HeaderContainer>
  )
}
