class AutomacaoElements{

    Partindo = () => {return '#inputOrigin'}   
    Destino = () => {return '#inputDestination'}
    ClicarCalendario = () => {return '#_smilesflightsearchportlet_WAR_smilesbookingportlet_departure_date'}
    SelecionarIda = () => {return '.ui-datepicker-group-first > .ui-datepicker-calendar > tbody > :nth-child(2) > :nth-child(7) > .ui-state-default'}
    SelecionarVolta = () => {return '.ui-datepicker-group-last > .ui-datepicker-calendar > tbody > :nth-child(3) > :nth-child(2) > .ui-state-default'}
    BotaoConfirmarDatas = () => {return '.ui-datepicker-current'}
    BotaoBuscarVoo = ()=> {return '#submitFlightSearch'}
    ClicarMilhasIda = () => {return '#firstFlights > .segmentsFlightsTemplate > .smiles__flight-search > #flightsArticle0 > :nth-child(4) > .column-miles > .miles > [style="position:relative"] > .checkbox > .flightlb'}
    ClicarMilhasVolta = () => {return '#secondFlights > .segmentsFlightsTemplate > .smiles__flight-search > #flightsArticle0 > :nth-child(4) > .column-miles > .miles > [style="position:relative"] > .checkbox > .flightlb'}
    BilheteIda = () => {return '#firstFlights > .segmentsFlightsTemplate > .smiles__flight-search > #flightsArticle0 > :nth-child(4) > .column-miles > .miles > [style="position:relative"]'}
    BilheteVolta = () => {return '#secondFlights > .segmentsFlightsTemplate > .smiles__flight-search > #flightsArticle0 > :nth-child(4) > .column-miles > .miles > [style="position:relative"] > .checkbox > .flightlb'}
    SelecionarTaxa = () => {return '#totalMiles'}
    TaxaDeEmbarque = () => {return '.summary-select-boarding-tax-miles'}
    ClicarAceitoTermos = () => {return '.terms > label'}
    ConfirmarReserva = () => {return '.button > .btn'}
    TelaDeLogin = () => {return '.main-content > h3'}
    
    }
    export default AutomacaoElements;