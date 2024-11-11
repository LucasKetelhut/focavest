import { Divider } from '@mantine/core';
import { Profile } from './Profile';

export function Updates() {
  return (
    <>
      <Divider
        color="#616E7D"
        variant="solid"
        label="Fórum"
        labelPosition="left"
        pb="sm"
        ff="monospace"
        fw="bold"
        mt="md"
      />
      <Profile
        name="ProfJunior"
        date="10/11/2024"
        location="Uberlândia - MG"
        text="Faltam poucas semanas para o vestibular! Hora de revisar, fazer simulados e manter o foco. Reta final, pessoal!"
        likes="Leonardo e mais 12 pessoas gostaram"
        comments="3 comentários"
      />
      <Profile
        name="UFMG"
        date="29/10/2024"
        location="Belo Horizonte - MG"
        text="O edital saiu! Confiram as datas e requisitos para não perderem nada importante. Organização agora é tudo!"
        likes="Lucas e mais 227 pessoas gostaram"
        comments="39 comentários"
      />
      <Profile
        name="UFU"
        date="22/09/2024"
        location="Uberlândia - MG"
        text="Sejam bem vindos alunos! É um prazer recebê-los em nosso Campus. Qualquer dúvida entre em contato com a REITORIA ou COORDENAÇÃO do seu curso."
        likes="Leonardo e mais 359 pessoas gostaram"
        comments="23 comentários"
      />
      <Profile
        name="Unitri"
        date="15/09/2024"
        location="Uberlândia - MG"
        text="Exames finais definidos para dia 11/12/2024."
        likes="Rafael e mais 119 pessoas gostaram"
        comments="12 comentários"
      />
    </>
  );
}
