const progressBarTemplate = document.createElement("template")
progressBarTemplate.innerHTML = `
  <style>
    #content {
      font-size: 12px;
      width: 0%;
      background: red;
      height: 10px;
      filter: hue-rotate(1deg);
      border: 1px solid red;
      display: block;
      transition: width 1s, filter 3s;
    }
  </style>
  <span id="content">
    
  </span>
`

class ProgressBar extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.shadow.append(progressBarTemplate.content.cloneNode(true))
    this.content = this.shadow.querySelector("#content")
  }

  static get observedAttributes() {
    return ["percent", "segments"]
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(name, oldValue, newValue)
    this.updateProgressbar(this)
  }

  progressBar(element) {
    const percent = element.getAttribute("percent")
    const segments = element.getAttribute("segments")
    console.log('percent', percent, 'segment', segments)
    const done = Math.floor(segments * percent)
    return percent
    let progress = ""
    for(let i = 0; i < segments; i++) {
      i < done ?
        progress += "🟧" :
        progress += "⬜"
    }
    return progress
  }

  rotateHue(percent) {
    // 1 -> 45
    let deg = (Math.floor(percent*100) - 0) / (100 - 0) * (45 - 1) + 1
    this.content.style.filter = `${deg}deg`
  }

  updateProgressbar(element) {
    console.log(this.shadow.querySelector("#container"))
    let text = this.progressBar(element)
    console.log('progress bar ', text)
    this.content.style.width = this.rotateHue(text)
  }

}

customElements.define("progress-bar", ProgressBar)