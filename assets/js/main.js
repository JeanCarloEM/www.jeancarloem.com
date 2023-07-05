(function ($, w) {
  String.prototype.parseProps = function (items, ukn) {
    if ((typeof items !== "object") && (typeof items !== "string")) return;

    return this.replace(/\$\{([^\{\}\$\s]+)\}/g, (m, ctt, oset, input_string) => {
      if (items.hasOwnProperty(ctt)) {
        if (typeof items[ctt] === "function") return items[ctt]() + "";
        if ((typeof items[ctt] === "string") || (isFinite(items[ctt]))) return items[ctt] + "";
      }

      return (typeof ctt === "string") ? ctt : ((typeof ctt === "function") ? ukn(ctt) + "" : m);
    });
  };

  w.rand = function (max) {
    var r = Math.floor((1 + Math.random()) * 0x10000);
    return ((isFinite(max) && !isNaN(max)) && max > 0) ? r % (max + 1) : r;
  };

  w.guid = function () {
    function s4() {
      return w.rand()
        .toString(16)
        .substring(1);
    }
    return String.fromCharCode((w.rand(1) === 1) ? 65 : 97) + w.rand(26) + s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  };

  Node.prototype.getId = function () {
    var id = $(this).attr('id');

    if (!id) {
      id = w.guid();
      $(this).attr('id', id);
    }

    return id;
  };

  /* https://stackoverflow.com/questions/17733076/smooth-scroll-anchor-links-without-jquery */
  w.scrollAnimate = function (elem, style, unit, from, to, time, prop) {
    if (!elem) {
      return;
    }

    time = (time / (elem.scrollHeight - window.innerHeight)) * Math.abs(from - to);

    var start = new Date().getTime();
    var timer = setInterval(function () {
      var step = Math.min(1, (new Date().getTime() - start) / time);
      if (prop) {
        elem[style] = (from + step * (to - from)) + unit;
      } else {

        elem.style[style] = (from + step * (to - from)) + unit;
      }

      if (step === 1) {
        clearInterval(timer);
      }
    }, 25);

    if (prop) {
      elem[style] = from + unit;
    } else {
      elem.style[style] = from + unit;
    }
  };

  w.scrollTopTo = function (posOrId, e) {
    var pos = $(e).scrollTop() + ((!isNaN(posOrId) && (isFinite(posOrId)))
      ? posOrId
      : (
        ($(posOrId).length > 0)
          ? $(posOrId).offset().top
          : 0
      )
    ) - $('header.first.fixed').height() * 1.2;

    e = !e ? document.scrollingElement || document.documentElement : e;
    w.scrollAnimate(e, "scrollTop", "", $(e).scrollTop(), pos, 1500, true);
  };

  w.masterheader = function () {
    w.masterheaderFEITO = false;

    $("section.body > nav.topmaster").addClass('forcaroculto');

    w.setTimeout(function () {
      var ulBar = $("section.body > nav.topmaster ul");
      var header = $("section.body > header.first");
      var bar = $("section.body > header.first ul");
      var navBar = $("section.body > nav.topmaster");

      if (bar.length > 0) {

        var resopen = navBar.hasClass('open');

        navBar.css('display', 'block');

        header.removeClass('estouro');
        bar.removeClass('estouro');
        navBar.removeClass('estouro');
        ulBar.removeClass('estouro');

        if (bar[0].scrollWidth > bar.width()) {
          header.addClass('estouro');
          bar.addClass('estouro');
          navBar.addClass('estouro');
          ulBar.addClass('estouro');

          if (resopen) {
            navBar.addClass('open');
            bar.addClass('open');
            ulBar.addClass('open');
          } else {
            w.fecharMenu($('body').attr('menuopen'));
          }
        } else {
          w.fecharMenu($('body').attr('menuopen'));
        }
      }

      w.setTimeout(function () {
        $("section.body > nav.topmaster").removeClass('forcaroculto');
      }, 500);
    }, 10);
  };

  w.downmenu = function () {
    w.downmenuFEITO = false;

    $("section.body > nav.topmenu").addClass('forcaroculto');

    w.setTimeout(function () {
      var headerIcones = $("section.body > header");
      var bar = $("section.body > nav.topmenu ul");

      if (bar.length > 0) {
        var resopen = bar.hasClass('open');

        headerIcones.removeClass('estourosecond');
        bar.removeClass('estouro open');

        if (bar[0].scrollWidth > bar.width()) {
          bar.addClass('estouro');
          headerIcones.addClass('estourosecond');

          if (resopen) {
            bar.addClass('open');
          } else {
            w.fecharMenu($('body').attr('menuopen'));
          }
        } else {
          w.fecharMenu($('body').attr('menuopen'));
        }
      }

      w.setTimeout(function () {
        $("section.body > nav.topmenu").removeClass('forcaroculto');
      }, 500);
    }, 10);
  };

  w.exibirEscuro = function (exibir) {
    var escuro = $(".body > .escuro");

    if (escuro.length <= 0) {
      escuro = $($(".body").prepend('<div class="escuro ocultar"></div>'));
      var escuro = $(".body > .escuro");

      $(document).on('click', function () {
        if ($('body')[0].hasAttribute('menuopen')) {
          w.toogleMenu($('body').attr('menuopen'));
        }
      });
    }

    if (exibir === true) {
      escuro.css('display', 'block');
      escuro.removeClass('ocultar');
      escuro.addClass('exibir');
    } else {
      escuro.addClass('ocultar');
      escuro.removeClass('exibir');

      w.setTimeout(function () {
        $(".body > .escuro").css('display', 'none');
      }, 400);
    }
  };

  w.fecharMenu = function (menu) {
    var e = $('#' + menu);
    e.removeClass('open');

    w.exibirEscuro();

    $("[menuid=" + menu + "]").each(function (i, item) {
      $(item).removeClass('open');
    });
  };

  w.abrirMenu = function (menu) {
    var e = $('#' + menu);
    e.addClass('open');

    e.css('display', 'block !important');

    w.exibirEscuro(true);

    $("[menuid=" + menu + "]").each(function (i, item) {
      $(item).addClass('open');
    });

    w.setTimeout(function () {
      $('body').attr('menuopen', menu);
    }, 10);
  };

  w.toogleMenu = function (id) {
    var e = $("#" + id);

    if (!e.hasClass('open')) {
      w.setTimeout(function () {
        w.abrirMenu(id);
      }, 350);
    } else {
      w.fecharMenu(id);
      $('body').removeAttr('menuopen');
    }
  };

  w.menuHandle = function (dest) {
    var menuid = $(this).attr('menuid');

    if (!menuid && dest) {
      menuid = $(dest)[0].getId();
      $(this).attr('menuid', menuid);
    }

    if (menuid) {
      w.toogleMenu(menuid);
    }
  };

  function ksort(obj) {
    var keys = Object.keys(obj).sort()
      , sortedObj = {};

    for (var i in keys) {
      sortedObj[keys[i]] = obj[keys[i]];
    }

    return sortedObj;
  }

  w.Make = () => {
    $('copy_ano').text(new Date().getFullYear());
    $('.title.mark.idade+.value').text((new Date().getFullYear()) - 1985);

    var items = {
      "Projetos Jogáveis": "#projetos",
      "Últimos Posts": "#upost",
      "Habilidades": "#habilidades",
      "Formação": "#formacao",
      "Experiência": "#historico",
      "Interesses": "#interesses",
      "Expertise": "#expertise"
    };

    var emordem = Object.keys(items).sort();
    for (var k in emordem) {
      $('nav.topmenu div.wrapper ul').append($("<li><a href='" + items[emordem[k]] + "'><span>" + emordem[k] + "</span></a></li>"));
      $('footer#contato .colunabarra table ul.items').append($("<li><a href='" + items[emordem[k]] + "'><span>" + emordem[k] + "</span></a></li>"));
    }

    $('nav.topmenu div.wrapper ul').append($("<li><a href='#bio'><span>Bio</span></a></li>"));
    $('footer#contato .colunabarra table ul.items').append($("<li><a href='#bio'><span>Bio</span></a></li>"));

    $('footer#contato .colunabarra table ul.items').append($("<li><a href='https://blog.jeancarloem.com'><span>Blog</span></a></li>"));
  };

  w.makeArtigo = async function (post, noimage, clback) {
    let cover = post.hasOwnProperty('attachments')
      ? ((Array.isArray(post['attachments']) && (post['attachments'].length >= 1))
        ? post['attachments'][0].url
        : (post['attachments'].hasOwnProperty('url')
          ? post['attachments'].url
          : false)
      )
      : false;

    post.noimage = ((typeof noimage === "undefined" || !noimage) && (cover !== false)) ? '' : ' class="noimage"';
    post.coverurl = cover ? cover : '&nbsp';
    post.attachments = cover;

    (function (write) {
      if (w.modeloArtigo) {
        return write();
      }

      $.get('parts/artigo.html', (r) => {
        w.modeloArtigo = r;
        return write();
      });
    })(() => {
      clback(w.modeloArtigo.parseProps(post));
    });
  };

  w.loadPages = (pgs, itm) => {
    if (itm >= pgs.length) return;

    itm = isFinite(itm) ? itm : 0;
    var i = pgs[itm];

    console.log("Loading '" + i + "'...");
    $.get('parts/' + i + '.html', (r) => {
      $('section.content.inner.wrapper').append($(r));
      w.loadPages(pgs, ++itm);
    });
  };

  w.afterLoad = function () {
    w.masterheaderFEITO = false;
    w.downmenuFEITO = false;

    /* INICIALIZA OS SLIDES SHOW */
    try {
      $(".rslides").responsiveSlides({
        auto: true, // Boolean: Animate automatically, true or false
        speed: 500, // Integer: Speed of the transition, in milliseconds
        timeout: 14000, // Integer: Time between slide transitions, in milliseconds
        pager: false, // Boolean: Show pager, true or false
        nav: true, // Boolean: Show navigation, true or false
        random: false, // Boolean: Randomize the order of the slides, true or false
        pause: false, // Boolean: Pause on hover, true or false
        pauseControls: true, // Boolean: Pause when hovering controls, true or false
        prevText: "<<", // String: Text for the "previous" button
        nextText: ">>", // String: Text for the "next" button
        maxwidth: "", // Integer: Max-width of the slideshow, in pixels
        navContainer: "", // Selector: Where controls should be appended to, default is after the 'ul'
        manualControls: "", // Selector: Declare custom pager navigation
        namespace: "rslides", // String: Change the default namespace used
        before: function () { }, // Function: Before callback
        after: function () { }     // Function: After callback
      });
    } catch (e) {

    }

    $("section.body > header div.ico.menu").on('click', function () {
      w.menuHandle.bind(this)("section.body > nav.topmenu ul");
    });

    $("section.body > header div.ico.follow").on('click', function () {
      w.menuHandle.bind(this)("section.body > nav.topmaster ul");
    });

    $('section.body').scroll(function () {
      if ($('section.body').scrollTop() >= ($("header.first.fixed").height() * 0.1)) {
        $("header.first").addClass('sombra');
      } else {
        $("header.first").removeClass('sombra');
      }


      if ($('section.body').scrollTop() >= ($("section.body").height() * 0.35)) {
        $("header.first div.topo").css('display', 'block');
      } else {
        $("header.first div.topo").css('display', 'none');
      }
    });

    $(window).on('resize', function () {
      if (!w.downmenuFEITO) {
        w.downmenuFEITO = true;
        //w.setTimeout("window.downmenu();", 1000);
      }

      if (!w.masterheaderFEITO) {
        w.masterheaderFEITO = true;
        w.setTimeout("window.masterheader();", 1000);
      }
    });

    /* SCROLL SUAVE */
    $.each($('a[href*="#"]'), function (k, item) {
      item = $(item);

      item.on('click', function (event) {
        event.preventDefault();
        w.scrollTopTo(this.getAttribute('href'), $('section.body')[0]);
      });
    });

    w.downmenu();
    w.masterheader();

    w.setTimeout(function () {
      w.downmenu();
      w.masterheader();
    }, 1000);
  };

  $(document).ready(function () {
    w.Make();

    console.log('Loading page components...');
    $.getJSON('dados/main.page.json', function (json) {
      console.log('Page components loaded.');
      w.loadPages(json);
      w.afterLoad();
    });
  });
})(Zepto, window);