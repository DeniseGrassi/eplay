import { TagStyles } from './styles'

export type Props = {
  size?: 'small' | 'big'
  children: React.ReactNode
}

const Tag = ({ children, size = 'small' }: Props) => (
  <TagStyles size={size}>{children}</TagStyles>
)

export default Tag
