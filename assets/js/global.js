$().ready(function () {
  $(".adiciona-linha") .click(function () {
    $(".orcamento-tabela") .append(criaLinha);
    setInterval(function () {
        $(".esconde-linha") .fadeIn('slow');
    }, 500);
  });
  $(".campo-editavel") .click(editaCampo);
  $(".remove-linha").click(removeLinha);
  $(".imprimir") .click(function () {
    window.print();
  })
});
