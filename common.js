$(document).ready(async function() {
  `
  <div class="chat left">
    <p>개붕개붕..!</p>
  </div>
  <div class="chat left">
    <p>나는 개드립을 좋아하는 개붕쿤이야!</p>
  </div>
  <div class="chat right">
    <p>개드립을 좋아하는구나!</p>
  </div>
  <div class="chat left">
    <p>적당한 개드립을 쳐줄래?</p>
  </div>
  `
  function Q(text) {
    let $t = $('<p></p>', {
      text: text,
      style: 'display: none'
    })
    let $d = $('<div></div>', {
      class: 'chat left',
    })
    $d.append($t)
    $('#chat').append($d)
    $t.fadeIn(500)
  }

  function A(text) {
    let $t = $('<p></p>', {
      text: text,
      style: 'display: none'
    })
    let $d = $('<div></div>', {
      class: 'chat right',
    })
    $d.append($t)
    $('#chat').append($d)
    $t.fadeIn(500)
  }

  function query() {
    let text = $('#query').val()
    if(text != '') {
      A(text)
      $('#query').val("")
      $('#chat').parents().scrollTop($('#chat')[0].scrollHeight)

      // res
      $.ajax({
        type : 'POST', 
        url : 'http://c5b2e5901b20.ngrok.io/api/chat',
        data : {
          query: text,
          sent: '1'
        },
        dataType : 'JSON',
        success : function(result){
          console.log(result)
          Q(result.system)
          $('#chat').parents().scrollTop($('#chat')[0].scrollHeight)
        },
        error : function(xtr,status,error){
          console.log(xtr +":"+status+":"+error);
        }
      });
    }
  }

  $('#query').on("keydown", function(e) {
    if(e.keyCode == 13) {
      query()
    }
  })

  $('#submit').click(function() {
    query()
    $('#query').focus()
  })

  /* test */
  async function sleep(ms) {
    await new Promise((resolve)=> { setTimeout(()=>resolve(), ms) })
  }
  // await sleep(500)
  // Q('개붕개붕..!')
  // await sleep(500)
  // Q('나는 개드립을 좋아하는 개붕쿤이야!')
  // await sleep(500)
  // A('개드립을 좋아하는구나!')
  // await sleep(500)
  // Q('적당한 개드립을 쳐줄래?')
  await sleep(500)
  Q('안녕하세요. 뭔가 힘든일이 있으시다면 제게 말해주실래요?')
})