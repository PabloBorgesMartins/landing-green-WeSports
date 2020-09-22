import React, { useCallback, useRef } from 'react';
import { FiMail } from 'react-icons/fi';
import { FaStar, FaUsers } from 'react-icons/fa';
import { IoMdAlert } from 'react-icons/io';
import { MdHourglassFull } from 'react-icons/md';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logoVerde.png';
import triangle1 from '../../assets/mulherVerde.png';
import triangle2 from '../../assets/tecladoVerde.png';
import triangle3 from '../../assets/foneVerde.png';

import Button from '../../components/Button';
import ButtonHeader from '../../components/ButtonHeader';
import Card from '../../components/Card';
import MoneyCard from '../../components/MoneyCard';
import InputGreen from '../../components/InputGreen';
import Footer from '../../components/Footer';

import {
  Container,
  Content,
  Page,
  Header,
  Logo,
  ContainerButtons,
  ContainerMid,
  ContainerCard,
  CardIntro,
  ContainerCaution,
  ContainerShop,
  ContainerSubscribe,
  ContainerContact,
} from './styles';

const SingUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'No mínimo 6 dígitos'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <>
      <Page>
        <Header>
          <ButtonHeader>Home</ButtonHeader>
          <a href="#cards">
            <ButtonHeader>Sobre</ButtonHeader>
          </a>
          <a href="#plans">
            <ButtonHeader>Planos</ButtonHeader>
          </a>
          <a href="#contact">
            <ButtonHeader>Contato</ButtonHeader>
          </a>
        </Header>
        <Logo src={logoImg} alt="WeSportsLogo" />
        <Container>
          <Content>
            <img src={triangle1} alt="WeSports" />
          </Content>
          <Content>
            <section>
              <h1>Treine com os melhores</h1>
              <p>
                Se você procura um treino de qualidade para poder aprender com
                os erros da equipe, você está no lugar certo.
              </p>
              <ContainerButtons>
                <a href="#plans">
                  <Button type="submit">Planos e preços</Button>
                </a>
                <a href="#contact">
                  <ButtonHeader type="submit">Comece agora</ButtonHeader>
                </a>
              </ContainerButtons>
            </section>
          </Content>
        </Container>
        <ContainerMid>
          <img src={triangle2} alt="WeSports" />
          <div>
            <h1>Prove sua gameplay!</h1>
            <p>Cansado de jogar com os mesmos times?</p>
            <p>Cansado de fazer treinos que não são produtivos?</p>
            <p>Prove seu nível!</p>
          </div>
        </ContainerMid>
        <ContainerCard id="cards">
          <CardIntro>
            <div className="title-font">
              <p>SCRIM de QUALIDADE</p>
            </div>
            <h1>Em que uma análise pode te ajudar?</h1>
            <p>
              O treino é fundamental para a melhora constante. Seja pra melhora
              individual ou a melhora como time. Descubra os pontos fracos e
              aumente o nível do seu time.
            </p>
            <a href="#plans">
              <Button>Todas as vantagens</Button>
            </a>
          </CardIntro>
          <div>
            <Card
              title="Coloque-se a prova"
              content="Veja qual o seu nível desafiando um time em um treino de qualidade."
            >
              <FaStar size={30} color="#29FFB6" />
            </Card>
            <Card
              title="Aprenda com os erros"
              content="Permita-se errar para saber onde pode melhorar."
            >
              <IoMdAlert size={30} color="#29FFB6" />
            </Card>
          </div>
          <div>
            <Card
              title="Melhore a team play"
              content="Não é só a melhora individual que vai melhorar sua equipe. Evolua como time."
            >
              <FaUsers size={30} color="#29FFB6" />
            </Card>
            <Card
              title="Treinos limitados"
              content="Os treinos são limitados e por tempo limitado. Portanto, aproveite a oportunidade."
            >
              <MdHourglassFull size={30} color="#29FFB6" />
            </Card>
          </div>
        </ContainerCard>
        <ContainerCaution>
          <img src={triangle3} alt="WeSports" />
          <div>
            <h1>VAGAS LIMITADAS</h1>
            <p>As vagas são limitadas e por tempo limitado.</p>
          </div>
        </ContainerCaution>
        <ContainerShop id="plans">
          <MoneyCard
            title="1 Treino"
            cardValue="R$30,00"
            content="Uma série MD1 com horario que cabe em sua agenda"
            cardSpan="Apenas R$6,00 por jogador"
          >
            <Button>Compre agora</Button>
          </MoneyCard>
          <MoneyCard
            title="3 Treinos"
            cardValue="R$50,00"
            content="Uma série MD3 com horario que cabe em sua agenda"
            cardSpan="Apenas R$10,00 por jogador"
          >
            <Button>Compre agora</Button>
          </MoneyCard>
          <MoneyCard
            title="5 Treinos"
            cardValue="R$60,00"
            content="Uma série MD5 com horario que cabe em sua agenda"
            cardSpan="Apenas R$12,00 por jogador"
          >
            <Button>Compre agora</Button>
          </MoneyCard>
        </ContainerShop>
        <p>Não gostou? Devolvemos seu dinheiro!</p>
        <ContainerSubscribe>
          <section>
            <h1>Faça parte de um seleto grupo de times</h1>
            <p>
              Quer fazer parte de um seleto grupo de times que buscam a melhora
              constante e treinos de qualidade? Inscreva-se em nossa Newsletter
              para ficar por dentro das novidades.
            </p>
          </section>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <InputGreen name="email" icon={FiMail} placeholder="E-mail" />
          </Form>
          <Button>Assinar</Button>
        </ContainerSubscribe>
        <h2>CONTATO</h2>
        <ContainerContact id="contact">
          <section>
            <h1>Alguma dúvida?</h1>
            <h1>Mande uma mensagem.</h1>
          </section>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <InputGreen name="userName" icon={FiMail} placeholder="Nome" />
            <InputGreen name="email" icon={FiMail} placeholder="E-mail" />
            <InputGreen name="message" icon={FiMail} placeholder="Mensagem" />
            <Button>Enviar</Button>
          </Form>
        </ContainerContact>
        <Footer />
      </Page>
    </>
  );
};

export default SingUp;

/*  */
