const template = document.createElement("template")
template.innerHTML = `
  <style>
    @font-face {
      font-family: RobotoMono;
      src: url(../RobotoMono-VariableFont_wght.ttf)
    }
    #description {
      border-left: 3px solid #464646;
      border-right: 3px solid #464646;
      padding-left: 8px;
    }
    #content {
      color: white;
      background: #242424;
      padding: 0.25rem 0.25rem;
      box-sizing: border-box;
      height: 100%;
      width: 100%;
      border: 1px solid #363636;
      border-radius: 2px;
      text-transform: capitalize;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      font-family: monospace;
    }
    #data-value {
      position: relative;
      display: inline-block;
      background: grey;
      color: white;
      font-weight: bolder;
      padding: 0.5rem;
      font-size: 1rem;
      border-radius: 5px;
      width: 100%;
      margin: 0 auto;
      box-sizing: border-box;
      box-shadow: 0px 2px 2px black;
      border: 1px solid #363636;
      min-height: 37px;
    }
    #value {
      text-shadow: 
        0 0 7px #fff,
        0 0 10px #fff,
        0 0 21px #fff;
      background: black;
      padding: 2px 4px;
      display: block;
      border-bottom: 1px solid orange;
    }
    .glass {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0px;
      left: 0px;
      opacity: 0.25;
      background: radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),                radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%)
    }
  </style>
  <div id="content">
    <dl>
      <dt id="description">
        <slot name="description"></slot>
      </dt>
      <dd id="data-value">
        <span id="value">
          <slot name="data-value">-----</slot>
        </span>
        <span class="glass"></span>
      </dd>
    </dl>
  </div>
`

export class DataModule extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.shadow.append(template.content.cloneNode(true))
    this.dataElem = this.shadow.querySelector("#value")
    this.el = this.shadow.querySelector('#content')
  }

  static get observedAttributes() {
    return ["value"]
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(name, oldValue, newValue)
    this.updateValue(newValue)
  }

  

  updateValue(newValue) {
    console.log(this.shadow.querySelector("#data-value"))
    this.dataElem.innerText = newValue
  }

}