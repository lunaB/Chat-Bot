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
    let t = document.createTextNode(text)
    
    let q = document.createElement('p')
    q.appendChild(t)

    let c = document.createElement('div')
    c.classList.add('chat')
    c.classList.add('left')
    c.appendChild(q)

    $('#chat').append(c)
  }

  function A(text) {
    let t = document.createTextNode(text)
    
    let q = document.createElement('p')
    q.appendChild(t)

    let c = document.createElement('div')
    c.classList.add('chat')
    c.classList.add('right')
    c.appendChild(q)

    $('#chat').append(c)
  }

  function query() {
    let text = $('#query').val()
    if(text != '') {
      A(text)
      $('#query').val("")
      $('#chat').parents().scrollTop($('#chat')[0].scrollHeight)
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
  await sleep(500)
  Q('개붕개붕..!')
  await sleep(500)
  Q('나는 개드립을 좋아하는 개붕쿤이야!')
  await sleep(500)
  A('개드립을 좋아하는구나!')
  await sleep(500)
  Q('적당한 개드립을 쳐줄래?')

})