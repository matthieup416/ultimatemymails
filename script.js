var messagesCount = $('p').length
$('#count').text(messagesCount)

// Utilisation de .on() avec "body" pour que chaque corbeille ajoutée soit clickable
// $('.trash').click(function () {
$('body').on('click', '.trash', function () {
  $(this).parent().remove()
  var messagesCount = $('p').length
  $('#count').text(messagesCount)
})

$('#btn-add').click(function () {
  var message = $('#add-message').val()
  $('body').append(
    `
    <div class="row">
        <img class="avatar" src="avatar-1.jpg">
         <div>
             <h6>Eric Dupont</h6>
             <p>` +
      message +
      `</p>  
        </div>
         <img class="trash" src="trash.png">
    </div>`
  )
  $('#count').text($('p').length)
  $('#add-message').val('')
})

// RECHERCHE VERSION DE BASE
$('#btn-search').click(function () {
  $('h6').each(function () {
    if ($('#search-message').val() != $(this).text()) {
      $(this).parent().parent().fadeOut()
    } else {
      $(this).parent().parent().show()
    }
  })
  $('#search-message').val('')
})

// VERSION DE ANTOINE
// $('#btn-search').click(function () {
//   $('h6').parent().parent().hide()
//   $('h6').each(function () {
//     if ($(this).text() === $('#search-message').val()) {
//       $(this).parent().parent().show()
//     }
//   })
//   $('#search-message').val('')
// })

// BOUTON POUR REFRESH (regardez aussi le CSS pour la petite animation du picto en :hover pseudo-classe)
$('#icon').click(function () {
  $('h6').each(function () {
    $(this).parent().parent().fadeIn()
  })
})

// Animation Jquery sur l'input texte de recherche
// Similaire à ce qu'avait fait Marin en CSS

// $('#search-message').click(function () {
//   $('#search-message').animate({ width: '60%' }, 500)
// })

//// VERSION 1.1 avec une partie du nom
// $('#btn-search').click(function () {
//   $('h6').each(function () {
//     if ($(this).text().includes($('#search-message').val()) === false) {
//       $(this).parent().parent().fadeOut()
//     } else {
//       $(this).parent().parent().fadeIn()
//     }
//   })
//   $('#search-message').val('')
// })

//// Version 1.2 pour ignorer la casse
// $('#btn-search').click(function () {
//   $('h6').each(function () {
//     if (
//       $(this)
//         .text()
//         .toLowerCase()
//         .includes($('#search-message').val().toLowerCase()) === false
//     ) {
//       $(this).parent().parent().fadeOut()
//     } else {
//       $(this).parent().parent().fadeIn()
//     }
//   })
//   $('#search-message').val('')
// })

//// Version 1.3 pour ignorer la casse, et demander un minimum de 3 caractères.
// $('#btn-search').click(function () {
//   $('h6').each(function () {
//     if ($('#search-message').val().length > 2) {
//       if (
//         $(this)
//           .text()
//           .toLowerCase()
//           .includes($('#search-message').val().toLowerCase()) === false
//       ) {
//         $(this).parent().parent().fadeOut()
//       } else {
//         $(this).parent().parent().fadeIn()
//       }
//     }
//   })
//   $('#search-message').val('')
// })

////////////////////////////////////
////////ANIMATION FLOCONS COEUR ////
////////////////////////////////////

function iecompattest() {
  return document.compatMode && 'BackCompat' != document.compatMode
    ? document.documentElement
    : document.body
}
function snowIE_NS6() {
  for (
    doc_width = ns6up
      ? window.innerWidth - 10
      : iecompattest().clientWidth - 10,
      doc_height =
        window.innerHeight && 'windowheight' == snowdistance
          ? window.innerHeight
          : ie4up && 'windowheight' == snowdistance
          ? iecompattest().clientHeight
          : ie4up && !window.opera && 'pageheight' == snowdistance
          ? iecompattest().scrollHeight
          : iecompattest().offsetHeight,
      i = 0;
    no > i;
    ++i
  )
    (yp[i] += sty[i]),
      yp[i] > doc_height - 50 &&
        ((xp[i] = Math.random() * (doc_width - am[i] - 30)),
        (yp[i] = 0),
        (stx[i] = 0.02 + Math.random() / 10),
        (sty[i] = 0.7 + Math.random())),
      (dx[i] += stx[i]),
      (document.getElementById('dot' + i).style.top = yp[i] + 'px'),
      (document.getElementById('dot' + i).style.left =
        xp[i] + am[i] * Math.sin(dx[i]) + 'px')
  snowtimer = setTimeout('snowIE_NS6()', 10)
}
function hidesnow() {
  if (window.snowtimer)
    for (clearTimeout(snowtimer), i = 0; no > i; i++)
      document.getElementById('dot' + i).style.visibility = 'hidden'
}
var sy = 'POSITION:absolute;Z-INDEX:999;VISIBILITY:visible;TOP:15px;'
var snowsrc = 'https://click123.ca/dist/img/heart.png',
  no = 10,
  hidesnowtime = 0,
  snowdistance = 'pageheight',
  ie4up = document.all ? 1 : 0,
  ns6up = document.getElementById && !document.all ? 1 : 0,
  dx,
  xp,
  yp,
  am,
  stx,
  sty,
  i,
  doc_width = 800,
  doc_height = 600
for (
  ns6up
    ? ((doc_width = self.innerWidth), (doc_height = self.innerHeight))
    : ie4up &&
      ((doc_width = iecompattest().clientWidth),
      (doc_height = iecompattest().clientHeight)),
    dx = [],
    xp = [],
    yp = [],
    am = [],
    stx = [],
    sty = [],
    snowsrc =
      -1 != snowsrc.indexOf('click123.ca')
        ? 'https://click123.ca/dist/img/heart.png'
        : snowsrc,
    i = 0;
  no > i;
  ++i
)
  (dx[i] = 0),
    (xp[i] = Math.random() * (doc_width - 50)),
    (yp[i] = Math.random() * doc_height),
    (am[i] = 20 * Math.random()),
    (stx[i] = 0.02 + Math.random() / 10),
    (sty[i] = 0.7 + Math.random()),
    (ie4up || ns6up) &&
      document.write(
        0 == i
          ? '<div id="dot' +
              i +
              '" style="' +
              sy +
              ';width:1px;height:1px;overflow:hidden"><a href="http://click123.ca"><img src=\'' +
              snowsrc +
              '\' border="0"></a></div>'
          : '<div id="dot' +
              i +
              '" style="' +
              sy +
              '"><img src=\'' +
              snowsrc +
              '\' border="0"></div>'
      )
;(ie4up || ns6up) &&
  (snowIE_NS6(),
  hidesnowtime > 0 && setTimeout('hidesnow()', 1e3 * hidesnowtime))
