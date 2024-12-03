import {
  ContainerFooter,
  SectionTitle,
  LinksFooter,
  LinkFooter,
  FooterSection,
  Copyright
} from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <ContainerFooter>
    <div className="container">
      <FooterSection>
        <SectionTitle> Categorias</SectionTitle>
        <LinksFooter>
          <li>
            <LinkFooter> RPG</LinkFooter>
          </li>
          <li>
            <LinkFooter> AÇÃO</LinkFooter>
          </li>
          <li>
            <LinkFooter> AVENTURA </LinkFooter>
          </li>
          <li>
            <LinkFooter> ESPORTES</LinkFooter>
          </li>
          <li>
            <LinkFooter> SIMULAÇÃO</LinkFooter>
          </li>
          <li>
            <LinkFooter> ESTRATÉGIA</LinkFooter>
          </li>
          <li>
            <LinkFooter> FPS</LinkFooter>
          </li>
        </LinksFooter>
      </FooterSection>
      <FooterSection>
        <SectionTitle> Acesso Rápido</SectionTitle>
      </FooterSection>
      <Copyright>
        {currentYear} - &copy; Todos os direitos reservados - DeniseGrassiDev
      </Copyright>
    </div>
  </ContainerFooter>
)

export default Footer
