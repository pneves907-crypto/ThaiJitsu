# Site Thaijitsu — página única

Site de uma página para o estúdio de Boxe, Jiu Jitsu e Muay Thai no Alto de Pinheiros.
Objetivo de negócio: levar o visitante a **agendar uma aula-teste pelo WhatsApp**.

## Como abrir

Basta abrir o arquivo `index.html` no navegador. Não há build nem dependências.

Para ver como no servidor (recomendado antes de publicar):

```
node server.js
```

e acessar `http://localhost:8931`.

## Estrutura

| Arquivo | O que é |
| --- | --- |
| `index.html` | A página inteira, com todas as seções |
| `css/styles.css` | Visual (paleta, fontes, layout mobile primeiro) |
| `js/main.js` | Só o menu do celular e o ano do rodapé |
| `assets/` | Logo SVG e fotos do estúdio |
| `server.js` | Servidor só para visualização local (não vai para a hospedagem) |

## O que foi resolvido em relação ao site antigo

- Menu vazio → menu com âncoras (Modalidades, Para quem, Contato).
- Links de exemplo (`http://url`, `your@email`) e texto do WooCommerce → removidos.
- Botão de WhatsApp duas vezes → uma chamada forte, mais o botão fixo no cabeçalho e no topo.
- Telefone com toque para ligar (`tel:`) e mapa incorporado.
- Cores tiradas do logo original: o SVG usa `#ED1C24`.

## Paleta

| Cor | Hex | Uso |
| --- | --- | --- |
| Vermelho do logo | `#ED1C24` | Filetes, ícones, títulos sobre preto |
| Vermelho de ação | `#C62828` | Fundos com texto branco (botões, faixa) |
| Preto grafite | `#141414` | Fundos escuros |
| Branco | `#FFFFFF` | Fundo de apoio |
| Bege | `#E6DCC8` | Cartões de modalidade e textos sobre preto |

Por que dois vermelhos: o vermelho do logo sobre fundo branco dá contraste de 4,4:1, abaixo do
mínimo de 4,5:1 para texto. Nos botões e na faixa de aula-teste usamos `#C62828` (5,6:1), que o
próprio PRD já indicava. Combinado com o logo, continua fiel à identidade.

## Antes de publicar

1. Trocar o mapa (em `index.html`, seção "Onde estamos") pelos dados reais se o endereço mudar.
2. Confirmar se haverá redes sociais. Hoje não há ícones no rodapé, de propósito — o PRD manda
   remover os de exemplo e só voltar com os reais.
3. Fotos: as atuais são as que o estúdio já publicava. Vale trocar por fotos novas de aula em
   andamento e da fachada, conforme o item 12 do PRD.
4. Google Meu Negócio: atualizar endereço, telefone e link do site novo.

## Requisitos atendidos

- F1 Botão de WhatsApp com mensagem pré-preenchida (cabeçalho, topo e aula-teste)
- F2 Telefone com link `tel:`
- F3 Endereço com link para o mapa e mapa incorporado
- F4 Sem redes sociais de exemplo (removidas até existirem perfis reais)
- F5 Menu com âncoras
- F7 Sem WooCommerce, newsletter nem e-mail de exemplo

Audit Lighthouse: Acessibilidade 100 · Melhores Práticas 100 · SEO 100.
