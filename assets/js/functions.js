function editaCampo(campo) {
      var campo = $(this);
      var texto = campo.text();
      var classe = campo.attr('class');
      var input = criaTextArea(texto);

      campo.addClass('campoEsconde');
      campo.css('position', 'relative');
      campo.prepend(input);

      input.attr('autofocus', true);
      input.focusout(atualizaValor);
};

function criaTextArea(valor) {
  var inputDOM = $('<textarea>');
  inputDOM.addClass('campoEditor');
  inputDOM.val(valor);

  return inputDOM;
};

function atualizaValor() {
      var novoValor = $(this).val();
      if (novoValor != "") {
        var parent = $(this).parent();
        $(this).remove();
        parent.text(novoValor);
        parent.removeClass('campoEsconde');
      }
};

function removeLinha() {
  $(this).parent().parent().addClass('saida-linha');
  var intervalo = setTimeout(function () {
      $('.saida-linha').remove();
  }, 900);
};

function criaLinha(parent) {
  var linha = $('<tr>');
  var colunaItem = $('<td>').addClass('campo-editavel');
  var colunaDescricao = $('<td>').addClass('campo-editavel');
  var colunaValores = $('<td>');
  var spanMoeda = $('<span>').addClass('moeda');
  var spanValor = $('<span>').addClass('valor').addClass('campo-editavel');
  var spanCentavos = $('<span>').addClass('valor-centavos');
  var spanPeriodo = $('<span>').addClass('valor-periodo').addClass('campo-editavel');
  var spanRemove = $('<span>').addClass('remove-linha');
  linha.find(".remove-linha").click(removeLinha);

  colunaItem.text('Indique o item');
  colunaDescricao.text('Descreva o item');
  spanMoeda.text('R$');
  spanValor.text('000');
  spanCentavos.text(',00');
  spanPeriodo.text('por projeto');
  spanRemove.text('X');

  colunaValores.prepend(spanRemove).prepend(spanPeriodo).prepend(spanCentavos).prepend(spanValor).prepend(spanMoeda);
  linha.prepend(colunaValores).prepend(colunaDescricao).prepend(colunaItem);

  spanRemove.click(removeLinha);
  colunaItem.click(editaCampo);
  colunaDescricao.click(editaCampo);
  spanValor.click(editaCampo);
  spanPeriodo.click(editaCampo);

  return linha;
};
