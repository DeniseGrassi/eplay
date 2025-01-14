import { BannerImg, Titulo, Precos } from './styles'
import BannerHomemAranha from '../../assets/images/banner-homem-aranha.png'
import Tag from '../Tag/index'
import Button from '../Button'

const Banner = () => (
  <BannerImg style={{ backgroundImage: `url(${BannerHomemAranha})` }}>
    <div className="container">
      <Tag size="big"> Destaque do dia </Tag>

      <Titulo>Marvel&apos;s Spider-Man: Miles Morales PS5 & PS5</Titulo>
      <Precos>
        De <span> R$250,00 </span> <br />
        por apenas R$99,90
      </Precos>

      <Button
        type="link"
        to="/produto"
        title="Clique aqui para aproveitar esta oferta"
      >
        Aproveitar
      </Button>
    </div>
  </BannerImg>
)

export default Banner
