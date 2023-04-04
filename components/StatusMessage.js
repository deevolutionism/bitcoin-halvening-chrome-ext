export const statusTypes = {
  'ERROR': 'ERROR',
  'LOADING': 'LOADING',
  'DONE': 'DONE'
}

const statusMsgTemplate = document.createElement("statusMsgTemplate")
statusMsgTemplate.innerHTML = `
  <style>
    #status-text-container {  
      font-family: monospace;
      margin: 0px;
      padding: 4px 6px;
      background: #242424;
      border-bottom: 2px groove #af9551;
    }
  </style>
  <div id="content">
    <p id="status-text-container">
      <span id="status-type"></span> 
      <span id="status-text"></span>
    </p>
  </div>
`

export class StatusMessage extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.shadow.append(statusMsgTemplate.cloneNode(true))
    this.statusText = this.shadow.querySelector("#status-text")
    this.statusType = this.shadow.querySelector("#status-type")
  }

  static get observedAttributes() {
    return ["status", "type"]
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(name, oldValue, newValue)
    switch(name) {
      case 'status':
        this.updateStatus(newValue)
        break;
      case 'type':
        this.updateType(newValue)
        break;
      default:
        return
    }
  }

  updateStatus(value) {
    this.statusText.innerText = value
  }

  updateType(value) {
    switch (value) {
      case statusTypes.LOADING:
        this.statusType.innerText = '🟡'
        break;
      case statusTypes.ERROR:
        this.statusType.innerText = '🔴'
        break;
      case statusTypes.DONE:
        this.statusType.innerText = '🟢'
        break;
      default:
        return
    }
  }

}