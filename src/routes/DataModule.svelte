<script>
  /**
   * @typedef {Object} ValueProps
   * @property {string} [value='----'] - The value to display.
   * @property {string} [description='----'] - The description to display.
   * @property {boolean} [sats=false] - Whether the value is in satoshis (true) or bitcoin (false).
   * 
   * @param {ValueProps} props - The props object.
   */
  export let value = '----';
  export let description = '----';
  export let sats = false;
</script>


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
  dd, dt {
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
  .value {
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
    <dt>
      <span class="value">
        {description}
      </span>
      <span class="glass"></span>
    </dt>
    <dd>
      <span class="value">
        {#if sats}
          <i class="fak fa-regular-italic"></i>
        {/if}
        <slot>{value}</slot>
      </span>
      <span class="glass"></span>
    </dd>
  </dl>
</div>

