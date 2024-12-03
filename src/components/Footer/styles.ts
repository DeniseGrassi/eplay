import styled from 'styled-components'
import { cores } from '../../styles'

export const ContainerFooter = styled.footer`
  background-color: ${cores.cinza};
`
export const SectionTitle = styled.h4`
  color: ${cores.branca};
  font-size: 16px;
  font-weight: bold;
`
export const LinksFooter = styled.ul`
  display: flex;
  margin-top: 16px;
  font-size: 14px;
`
export const LinkFooter = styled.a`
  color: ${cores.cinzaClaro};
  text-decoration: none;
  margin-right: 8px;
`
export const FooterSection = styled.div`
  margin-bottom: 64px;
`
export const Copyright = styled.p`
  font-size: 14px;
  margin-bottom: 16px;
`
