$("#calcular").click(function () {
    var v1 = ($("#txtvalor1").val());
    var v2 = parseFloat($("#txtvalor2").val());
    var v3 = parseFloat($("#txtvalor3").val());
    var v4 = parseFloat($("#txtvalor4").val());

    if(v1 === "") {
        alert('Por favor, insira um nome válido');
        return;
    }

    if(isNaN(v2) || isNaN(v3) || isNaN(v4)) {
        alert('Por favor, insira números válidos');
        return;
    }

    var bonus = 200;

    var idade = v2;
        if (idade < 0 || idade > 120) {
            alert('Idade inválida. Por favor, insira uma idade válida.');
            return;
        } 

        if (idade > 50) {
            bonus = 300;
        }
    
    var salariobruto = v3;
    var inss = salariobruto * 0.08;
    var valetransporte = salariobruto * 0.05;
    var dependentes = v4;
    if (dependentes < 0) {
        alert('Número de dependentes inválido. Por favor, insira um número válido.');
        return;
    }
    var salarioliquido = salariobruto - inss - valetransporte + bonus + (dependentes * 50);
    

    var moeda1 = salariobruto.toLocaleString('pt-BR',
        {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2
        });
    var moeda2 = salarioliquido.toLocaleString('pt-BR',
        {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2
        });
    var moeda3 = valetransporte.toLocaleString('pt-BR',
        {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2
        });
    var moeda4 = inss.toLocaleString('pt-BR',
        {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2
        });
    
    $('#txtnome')
        .text("Seu nome é: " + v1)
        .css({'font-weight':'bold', 'font-size':'18pt'})
        .fadeIn(1000);

    $("#dependentes")
        .text("N° de dependentes: " + dependentes)
        .css({'font-weight':'bold', 'font-size':'18pt'})
        .fadeIn(1000);

    $("#salariobruto")
        .text("Seu salário bruto é: " + moeda1)
        .css({'font-weight':'bold', 'font-size':'18pt'})
        .fadeIn(1000);

    $("#inss")
        .text("Seu INSS é de: " + moeda4)
        .css({'font-weight':'bold', 'font-size':'18pt'})
        .fadeIn(1000);

    $("#valetransporte")
        .text("Valor do Vale Transporte: " + moeda3)
        .css({'font-weight':'bold', 'font-size':'18pt'})
        .fadeIn(1000);

    $("#salarioliquido")
        .text("Seu salário bruto é: " + moeda2)
        .css({'font-weight':'bold', 'font-size':'18pt'})
        .fadeIn(1000);
});