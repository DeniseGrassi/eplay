import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'
import resident from '../../assets/images/resident.png'
import starWars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'

export const promocoes: Game[] = [
  {
    title: 'Resident Evil 4',
    category: 'Ação',
    system: 'Windows',
    description: 'Resident Evil 4',
    infos: ['10%', 'R$250,00'],
    image: resident,
    id: 1
  },
  {
    title: 'Stars Wars',
    category: 'Ação',
    system: 'Windows',
    description: 'Resident Evil 4',
    infos: ['10%', 'R$250,00'],
    image: starWars,
    id: 2
  },
  {
    title: 'Zelda',
    category: 'Ação',
    system: 'Windows',
    description: 'Resident Evil 4',
    infos: ['10%', 'R$250,00'],
    image: zelda,
    id: 3
  },
  {
    title: 'Diablo',
    category: 'Ação',
    system: 'Windows',
    description: 'Resident Evil 4',
    infos: ['10%', 'R$250,00'],
    image: resident,
    id: 4
  }
]

export const emBreve: Game[] = [
  {
    title: 'Diablo',
    category: 'RPG',
    system: 'Windows',
    description: 'texto sobre o filme',
    infos: ['10%', 'R$250,00'],
    image: starWars,
    id: 5
  },
  {
    title: 'Diablo',
    category: 'RPG',
    system: 'Windows',
    description: 'texto sobre o filme',
    infos: ['10%', 'R$250,00'],
    image: starWars,
    id: 6
  },
  {
    title: 'Diablo',
    category: 'RPG',
    system: 'Windows',
    description: 'texto sobre o filme',
    infos: ['10%', 'R$250,00'],
    image: starWars,
    id: 7
  },
  {
    title: 'Diablo',
    category: 'RPG',
    system: 'Windows',
    description: 'texto sobre o filme',
    infos: ['10%', 'R$250,00'],
    image: starWars,
    id: 8
  }
]

const Categories = () => (
  <>
    <ProductsList title={'Promoções'} background={'gray'} games={promocoes} />
    <ProductsList background={'black'} games={emBreve} title={'Em Breve'} />
    <ProductsList title={'Promoções'} background={'gray'} games={promocoes} />
    <ProductsList background={'black'} games={emBreve} title={'Em Breve'} />
  </>
)

export default Categories
