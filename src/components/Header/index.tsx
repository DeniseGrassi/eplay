import { Link } from 'react-router-dom'
import { HeaderStyles, LinkItem, Links, LinkCar } from './styles'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

const Header = () => (
  <HeaderStyles>
    <div>
      <Link to="/">
        {' '}
        <img src={logo} alt="EPLAY" />
      </Link>

      <nav>
        <Links>
          <LinkItem>
            <Link to="/categories"> Categorias </Link>
          </LinkItem>
          <LinkItem>
            <a href="#">Novidades </a>
          </LinkItem>
          <LinkItem>
            <a href="#">Promoções </a>
          </LinkItem>
        </Links>
      </nav>
    </div>
    <LinkCar href="#">
      0 - produto(s)
      <img src={carrinho} alt="Carrinho"></img>
    </LinkCar>
  </HeaderStyles>
)

export default Header
