Feature: Comprando uma passagem aérea pelo site Smiles

Scenario: Efetuar um pedido de viagem aérea
    Given eu acesse o site
    When estiver na home, quero informar os dados do meu voo
    And valido meu pedido
    And aceito o termo de compra e confirmo meu pedido
    Then valido se sou encaminhado para tela de login do site
