import Game from '../../models/Game'
import Product from '../Product'
import { ContainerCard, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

const ProductsList = ({ title, background, games }: Props) => (
  <ContainerCard background={background}>
    <div className="container">
      <h2> {title} </h2>
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            title={game.title}
            category={game.category}
            system={game.system}
            description={game.description}
            infos={game.infos}
            image={game.image}
          />
        ))}
      </List>
    </div>
  </ContainerCard>
)

export default ProductsList
