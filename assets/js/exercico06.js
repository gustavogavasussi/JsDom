function testarValores(){
    var valorUm1 = document.getElementById('valorUm1').value;
    var valorDois2 = document.getElementById('valorDois2').value;

    if (valorUm1>valorDois2) {
        MensagemSucesso1(valorUm1, valorDois2);

    } else if(valorDois2>valorUm1) {
        MensagemSucesso2(valorUm1, valorDois2);

    }else{
        mensagemErro();
    }

    console.log(valorUm1);
    console.log(valorDois2);
}
    function mensagemErro(){
        let html = '<div class="col-sm-12 col-md-9 col-lg-12 pt-20">' +
        '<div class="alert alert-danger" role="alert">' +
            '<h4>Não é permitido digitar valores iguais, por favor digite um valor diferente para o valor 2!</h4>' +
        '</div>' +
    '</div>';
    let mensagemResul = document.getElementById('mensagemResul');
    mensagemResul.className = 'row visible';
    mensagemResul.innerHTML = html;
    }

    function MensagemSucesso1(valorUm, valorDois){
            let html = '<div class="col-sm-12 col-md-9 col-lg-12 pt-20">' +
                    '<div class="alert alert-success" role="alert">' +
                        '<h4>'+valorUm+' é maior do que o '+valorDois+'!</h4>' +
                    '</div>' +
                '</div>';
    let MensagemResul = document.getElementById('mensagemResul');
    MensagemResul.className = 'row visible';
    MensagemResul.innerHTML = html;
    }
    
    function MensagemSucesso2(valorUm, valorDois){
        let html = '<div class="col-sm-12 col-md-9 col-lg-12 pt-20">' +
                    '<div class="alert alert-success" role="alert">' +
                    '<h4>'+valorDois+' é maior do que o '+valorUm+'!</h4>' +
                    '</div>' +
                '</div>';
    let MensagemResul = document.getElementById('mensagemResul');
    MensagemResul.className = 'row visible';
    MensagemResul.innerHTML = html;
    }
