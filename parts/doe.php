<section class="global doe" style="/*display: none;*/">
  <section id='doe_diretamente' class="doacao faixa textos diretamente">
    <div class="mainpanel colunabarra">
      <article>
        <ol class='toc'>
          <li><a href='#doe_diretamente'>Doe por Depósito, Transferência ou Boleto</a></li>
          <li><a href='#doe_kickante'>Doe pelo Kickante ou Cartão de Crédito</a></li>
          <li><a href='#doe_como'>Como Subsistimos</a></li>
        </ol>

        <h1>Doe por Depósito, Transferência ou Boleto</h1>

        <p>É possível doar diretamente, qualquer valor, por meio de transferência, DOC/TED, PIX, depósito e depósito via boleto. </p><p>Para ler o QR-Code, coloque os dedos sobre os QRs laterais, com o fim de impedir a leitura do QR incorreto. O QR-code te redirecionará para a página do Banco do Brasil onde é possível efetuar transferência ou emitir um <strong>boleto</strong>. </p><p>Ao clicar sobre o QR-code, você também será redirecionado para a mesma página do Banco do Brasil.</p><br />

        <div class='opcoes'>
          <div class='conta'>
            <img src="assets/img/banco-do-brasil.svg" class='bb' alt='Logotipo do bB' />
            Banco <strong>001</strong><br />
            Agência <strong>0163-5</strong><br />
            Conta <strong>40.700-3</strong><br />
            Nome: <i>Jean Carlo de E. Moreira</i>
          </div>

          <?php
          $valores = [
              //[5, 'https://www49.bb.com.br/pagar-receber/#/cm49eyJvcHIiOiJwZyIsImlkIjoiNjIzN2IzMmItYTI5Zi00MGE3LWEyYmQtODhlYmFkMWQ4M2JjIn0='],
              [10, 'https://www49.bb.com.br/pagar-receber/#/cm49eyJvcHIiOiJwZyIsImlkIjoiMjhmM2ZlMWUtN2VhOS00Zjk5LWExZTctZTM1YzliYWJmYjU4In0='],
              //[15, 'https://www49.bb.com.br/pagar-receber/#/cm49eyJvcHIiOiJwZyIsImlkIjoiYzFiZmU2YjMtNjc0MC00NDBiLWI3YjQtODQxYTI3MzIwMTAxIn0='],
              [25, 'https://www49.bb.com.br/pagar-receber/#/cm49eyJvcHIiOiJwZyIsImlkIjoiMTQwOWJkZGQtOWE0ZS00ODJlLWE0ZWMtZTJhYmRhZTBhMjExIn0='],
              [50, 'https://www49.bb.com.br/pagar-receber/#/cm49eyJvcHIiOiJwZyIsImlkIjoiNWU3NzlhZmYtY2Q2Zi00YzUzLWFhZjUtMTJkNmJiNGJjM2I4In0='],
              [100, 'https://www49.bb.com.br/pagar-receber/#/cm49eyJvcHIiOiJwZyIsImlkIjoiZTRiNDc3MzMtNjg5MC00ZGQ3LTk2ZWEtMDIyNTQzNGFiODgxIn0=']
          ];


          foreach ($valores as $key => $value) {
            ?>
            <a class='btb doe doe<?php echo $value[0]; ?>' target='_blank' href='<?php echo $value[1]; ?>'>
              <img src="assets/img/doe<?php echo $value[0]; ?>.png" class='doe' alt='QR-code doe <?php echo $value[0]; ?>' />
              <div>Doe R$ <?php echo $value[0]; ?></div>
            </a>
          <?php } ?>

        </div>

        <div class='opcoes'>
          <div class='conta pix'>
            <img src="assets/img/pixlogo.png" class='bb' alt='Logotipo do PIX' />
          </div>

          <?php
          $valores = [
              //[5, ''],
              [10, ''],
              //[15, ''],
              [25, ''],
              [50, ''],
              ['mais', '']
          ];


          foreach ($valores as $key => $value) {
            ?>
            <a class='btb doe doe<?php echo $value[0]; ?>' target='_blank'>
              <img src="assets/img/pix<?php echo $value[0]; ?>.jpg" class='doe' alt='QR-code doe <?php echo $value[0]; ?>' />
              <div>Doe R$ <?php echo $value[0]; ?></div>
            </a>
          <?php } ?>

        </div>
      </article>
    </div>
  </section>

  <section id='doe_kickante' class="doacao faixa textos kickante">
    <div class="mainpanel colunabarra">
      <article>
        <h1>Doe com Kickante ou Cartão de Crédito</h1>

        <p>Também é possível fazer doação por meio do <b>PagSeguro</b> ou, se houver projeto ativo, pela plataforma de <i>Crowdfunding</i> <b>Kickante</b> em até 6 vezes sem juros.</p><br />

        <div class='btbs opcoes'>
          <a href='https://www.kickante.com.br/busca?titulo=#jcem' class='btb'>
            <div>Veja se há campanha ativa</div>
            <img src="https://www.kickante.com.br/sites/all/themes/kickante/logo.png" alt='Logotipo Kickante' />
          </a>

          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="RHSM8LR8EQHR6" />
            <input type="image" src="https://www.paypalobjects.com/pt_BR/BR/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Faça doações com o botão do PayPal" />
            <img alt="" border="0" src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" style='max-width: 5rem; display: block; margin: .4rem .6rem !important;' />
            <img alt="" border="0" src="https://www.paypal.com/pt_BR/i/scr/pixel.gif" width="1" height="1" />
          </form>

          <!-- INICIO FORMULARIO BOTAO PAGSEGURO -->
          <form action="https://pagseguro.uol.com.br/checkout/v2/donation.html" method="post">
            <!-- NÃO EDITE OS COMANDOS DAS LINHAS ABAIXO -->
            <input type="hidden" name="currency" value="BRL" />
            <input type="hidden" name="receiverEmail" value="jeancarlo@jeancarloem.com" />
            <input type="hidden" name="iot" value="button" />
            <input type="image" src="https://stc.pagseguro.uol.com.br/public/img/botoes/doacoes/120x53-doar.gif" name="submit" alt="Pague com PagSeguro - é rápido, grátis e seguro!" />
          </form>
          <!-- FINAL FORMULARIO BOTAO PAGSEGURO -->
        </div>
      </article>
    </div>
  </section>

  <section id='doe_como' class="doacao faixa textos">
    <div class="mainpanel colunabarra">
      <article>
        <h1>Como subsistimos</h1>

        <p>A subsistência deste serviço/site é dada por meio de doações, patrocínio e adsense. Quanto à estes dois últimos, nos preocupamos em manter a usabilidade e experiência elevadas, evitando assim, poluição visual, além disso, procuramos garantir imparcialidade e confiabilidade dos serviços.</p>

        <h3>Doações</h3>
        <p>O principal método é por meio de doações de pessoas como você, que valorizam os serviços prestados bem como a <b>educação financeira</b>.</p>

        <h3>Patrocínio</h3>
        <p>O patrocínio pode ser feito apenas em duas modalidades: sugestão de produto e artigo patrocinado (ainda não disponível).</p>
        <p>Em todos os cálculos, exibimos por padrão dois resultados. Um deles, utiliza a configuração selecionada pelo usuário, ou uma padrão caso o usuário não personalize. Já a segunda é um cálculo que utiliza uma sugestão de rentabilidade definida por nós, como por exemplo a SELIC, o CDI ou o IBOVESPA; porém, quando houver patrocínio, esta sugestão usará a taxa de rentabilidade fornecida pelo patrocinador e, neste caso, exibirá o nome do produto/serviço, uma breve descrição e logotipo, caso fornecido pelo patrocinador.</p>
        <p>Este método de arrecadar fundos é compatível, pois garante a usabilidade do sistema, bem como sua gratuidade além de imparcialidade, já que o cálculo fornecido pelo patrocinador, é exibido adicionalmente ao solicitado pelo usuário e não altera nenhuma funcionalidade.</p>

        <h3>Adsense</h3>
        <p>Nós nos preocupamos com o visual, usabilidade e experiência. Por isso, este método de arrecadar fundos é usado apenas <b>um por página</b>, preferencialmente em modo texto.</p>
      </article>
    </div>
  </section>
</section>
