// require dependencies
var html = require('choo/html')
var css = require('sheetify')

// export module
module.exports = home

// declare templates
function home (state, emit) {
  var messages = state.messages

  var style = css`
    :host {
      background-color: #f4f4f4;
      display: flex;
      font-family: Helvetica;
      flex-direction: column;
      height: 100vh;
    }

    div {
      border-radius: 5px;
      margin: 0.5rem;
    }

    .inbound {
      background-color: #e4e4e4;
      color: #6f6e75;
      max-width: 60vw;
    }

    .outbound {
      background-color: #ffffff;
      color: #4e4d56;
      margin-left: auto;
      text-align: right;
      max-width: 60vw;
    }
  `

  return html`
    <container class=${style}>
      ${displayMessages()}
    </container>`

  function displayMessages () {
    return state.messages.map(function (message, index) {
      return html`
        <div>
          <div id="message${index}">
            ${message.content}
          </div>
      </div>`
    })
  }

  // function testAPI () {
  //   api(function (data) {
  //     emit('updateContent', data)
  //   })
  // }
}

      // <p>Test API call</p>
      // <button onclick=${testAPI}>Test</div>
      // ${content ? html`<p>${content}</p>` : null}
