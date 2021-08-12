 /// <reference types="Cypress"> ///

const ambiente = Cypress.config("baseUrl")
import AutomacaoElements from "../Elements/AutomacaoElements";
const Viagem = new AutomacaoElements;

class Pedido {

  AbrirUrl () {
    cy.visit(ambiente)
  }

   Partindo(){
     cy.get(Viagem.Partindo()).type("GRU");
     cy.contains('São Paulo, Brasil, Guarulhos (GRU)').click();
   }

   Destino(){
     cy.get(Viagem.Destino()).type("RIO")
     cy.contains('Rio de Janeiro, Brasil, Todos os Aeroportos (RIO)').click();
   }

   SelecionarIda(){
     cy.get(Viagem.ClicarCalendario()).click();
     cy.get(Viagem.SelecionarIda()).click({force: true});
   }

   SelecionarVolta(){
     cy.get(Viagem.SelecionarVolta()).click({force: true});
   }

   BotaoConfirmarDatas(){
     cy.get(Viagem.BotaoConfirmarDatas()).click({force: true});
    
   }

   BotaoBuscarVoo(){
     cy.get(Viagem.BotaoBuscarVoo()).click();
   }

   ClicarMilhasIda(){
     cy.get(Viagem.ClicarMilhasIda()).click();
   }

   ClicarMilhasVolta(){
     cy.get(Viagem.ClicarMilhasVolta()).click();
    
   }
   BilheteIda(){
     cy.get(Viagem.BilheteIda()).invoke('text').then((BilheteIda ) => {
       cy.log(BilheteIda )
       .should('contain', BilheteIda)
     })
   }

   BilheteVolta(){
     cy.get(Viagem.BilheteVolta()).invoke('text').then((BilheteVolta) => {
       cy.log(BilheteVolta)
       .should('contain', BilheteVolta)
     })
   }

 
   SelecionarTaxa(){
     cy.get(Viagem.SelecionarTaxa()).should('contain', '5.000 milhas')
   }

   TaxaDeEmbarque(){
     cy.get(Viagem.TaxaDeEmbarque()).invoke('text').then((TaxaDeEmbarque) => {
       cy.log(TaxaDeEmbarque)
       .should('contain', TaxaDeEmbarque)
     })
   }

   
   ClicarAceitoTermos(){
     cy.get(Viagem.ClicarAceitoTermos()).click();
     
   }

   ConfirmarReserva(){
     cy.get(Viagem.ConfirmarReserva()).click();
   }

   TelaDeLogin(){
     cy.get(Viagem.TelaDeLogin()).should('contain', "Acesse sua conta");
     cy.wait(1000);
     cy.screenshot();
   }
   
  

}
 export default Pedido;