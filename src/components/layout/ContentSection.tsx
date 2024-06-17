import styled from 'styled-components'

const MyContentSection = styled.section`
  margin: 5em 0;

  img {
    width: 100%;
  }

  h1,
  h3 {
    font-style: italic;
    color: var(--color-primary);
    text-align: center;
  }

  h1 {
    font-size: 2.5em;
    margin-bottom: 1.5em;
  }

  h1:has(+ p) {
    margin-bottom: 0;
  }

  h1 + p {
    text-align: center;
  }

  p {
    margin-bottom: 1em;
  }

  div {
    columns: 2;
    margin-bottom: 3em;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const ContentSection = () => {
  return (
    <MyContentSection>
      <h1>Who are we?</h1>
      <div>
        <img src="/img/restaurant-intro.jpg" alt="" />
        <p>
          Bem-vindo ao Veggie Bistro, um restaurante vegano acolhedor fundado em
          2015 no coração da cidade. Criado por amigos apaixonados por
          alimentação saudável, o Veggie Bistro oferece pratos deliciosos que
          celebram a riqueza dos ingredientes vegetais, utilizando apenas
          ingredientes frescos e locais.
        </p>
        <p>
          Sob a liderança do talentoso chef Ricardo Montalban, com mais de 15
          anos de experiência, o Veggie Bistro ganhou reputação por sua
          criatividade e compromisso com a sustentabilidade. Crescido em uma
          fazenda, Ricardo traz uma paixão profunda pelos alimentos naturais,
          transformando ingredientes simples em pratos visualmente deslumbrantes
          e ricos em sabor.
        </p>
        <p>
          O cardápio do Veggie Bistro inclui entradas como Bruschetta de Tomate
          e Manjericão, pratos principais como Lasanha de Berinjela e sobremesas
          como Torta de Limão, todas sem glúten e lactose. Com uma decoração
          aconchegante e atendimento amigável, o Veggie Bistro proporciona uma
          experiência memorável, destacando-se como um dos melhores destinos
          veganos da cidade.
        </p>
      </div>

      <h1>Our Menu</h1>
      <p>by Ricardo Montalban</p>
    </MyContentSection>
  )
}

export default ContentSection
