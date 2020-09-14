import React from 'react';
import { NextPage } from 'next';

import Layout from '@components/layout/layout';

import { AboutMeStyles } from '@styles/pages/about-me.styles';
import { H1Styles } from '@styles/texts/h1.styles';
import { PStyles } from '@styles/texts/p.styles';

interface AboutMeProps {}

const AboutMe: NextPage<AboutMeProps> = () => {
  return (
    <Layout title="About me">
      <AboutMeStyles>
        <H1Styles mb={50}>
          <span>Cyrielle</span>,<br /> Designer UI<span>/</span>UX<span>.</span>
        </H1Styles>
        <PStyles letterSpacing={1}>
          Moi c’est Cyrielle, designer spécialisée en expérience et interface utilisateur.
          <br />
          Mes atouts :<br />
          - j’ai travaillé dans des entreprises variées : startup dans le recrutement, petite
          entreprise automobile, grande entreprise de logiciels pharmaceutiques, agence de
          communication digitale et print;
          <br />
          - j’ai effectué des missions pour des entreprises renommées dans leur secteur comme
          Antargaz (énergies), Perrigo (santé animale), l’ANEM (mutualité), Axionable (AI et Data),
          Weldom (bricolage), Thélem (assurances)…
          <br />
          - un bachelor en webdesign qui m’a appris les bases du code (communication facilitée avec
          les dev);
          <br />- je parle l’anglais couramment.
        </PStyles>
      </AboutMeStyles>
    </Layout>
  );
};

export default AboutMe;
