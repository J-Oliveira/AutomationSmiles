/* global Given, When, And, And, Then*/


import AutomacaoPage from '../pageobjects/AutomacaoPage';
const Viagem = new AutomacaoPage

Given(/^eu acesse o site$/, () => {
	Viagem.AbrirUrl();
});

When(/^estiver na home, quero informar os dados do meu voo$/, () => {
	Viagem.Partindo();
    Viagem.Destino();
    Viagem.SelecionarIda();
    Viagem.SelecionarVolta();
    Viagem.BotaoConfirmarDatas();
    Viagem.BotaoBuscarVoo();
});

And(/^valido meu pedido$/, () => {
	Viagem.ClicarMilhasIda();
    Viagem.ClicarMilhasVolta();
    Viagem.BilheteIda();
    Viagem.BilheteVolta();
    Viagem.SelecionarTaxa();
    Viagem.TaxaDeEmbarque();
});

And(/^aceito o termo de compra e confirmo meu pedido$/, () => {
    Viagem.ClicarAceitoTermos();
    Viagem.ConfirmarReserva();
});

Then(/^valido se sou encaminhado para tela de login do site$/, () => {
    Viagem.TelaDeLogin();
});
