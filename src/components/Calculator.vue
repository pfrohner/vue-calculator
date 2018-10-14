<template>
  <div class="container">
    <div class="calculator">
      <input type="text" :value="display" readonly class="display" id="display"  />
      <input type="text" :value="calculated" readonly class="display" v-show="false" />
      <div class="controls">
        <button @click="clear">C</button>
        <button @click="action('+')">+</button>
        <button @click="action('-')">-</button>
        <button @click="backspace">&#x232b;</button>
        <button @click="input('7')">7</button>
        <button @click="input('8')">8</button>
        <button @click="input('9')">9</button>
        <button @click="action('*')">*</button>
        <button @click="input('4')">4</button>
        <button @click="input('5')">5</button>
        <button @click="input('6')">6</button>
        <button @click="action('/')">/</button>
        <button @click="input('1')">1</button>
        <button @click="input('2')">2</button>
        <button @click="input('3')">3</button>
        <button @click="action('^')">^</button>
        <button @click="input('0')" class="double">0</button>
        <button @click="equal()" class="double">=</button>
      </div>
    </div>
  </div>
</template>

<script>
const keysEnabled = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const actionsEnabled = ['+', '-', '*', '/', '^']

export default {
  name: 'Calculator',
  data () {
    return {
      display: '0'
    }
  },
  created () {
    window.addEventListener('keydown', this.keyHandler)
  },
  computed: {
    calculated: function () {
      if (actionsEnabled.includes(this.display.slice(-1))) {
        return this.display
      } else if (this.display.indexOf('^') !== -1) {
        const values = this.display.split('^')
        return Math.pow(values[0], values[1])
      } else {
        return eval(this.display) // eslint-disable-line
      }
    }
  },
  methods: {
    keyHandler: function (event) {
      const key = event.key || event.keyCode

      switch (key) {
        case 'Enter':
          this.equal()
          break
        case 'Backspace':
          this.backspace()
          break
        case 'Escape':
          this.clear()
          break
        case 'Esc':
          this.clear()
          break
        default:
          if (keysEnabled.includes(key)) {
            this.input(key)
          }
          if (actionsEnabled.includes(key)) {
            this.action(key)
          }
          break
      }
    },
    setDisplay: function (value) {
      this.display = value.toString()
    },
    action: function (opt) {
      // we already have an action present, we have to replace it with the new action
      if (actionsEnabled.includes(this.display.slice(-1))) {
        this.backspace()
      }

      // do the math if we had something already to evaluate
      if (actionsEnabled.filter(action => this.display.includes(action).length > 0)) {
        this.equal()
      }

      this.setDisplay(this.display.concat(opt))
    },
    input: function (key) {
      const newValue = this.display === '0' ? key : this.display.concat(key) // show zero when empty
      this.setDisplay(newValue)
    },
    clear: function () {
      this.setDisplay('0')
    },
    equal: function () {
      this.setDisplay(this.calculated)
    },
    backspace: function () {
      const newValue = this.display.length > 1 ? this.display.slice(0, -1) : '0' // show zero when empty
      this.setDisplay(newValue)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
body {
  background-color: #dcdcdc;
  touch-action: manipulation;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
}

.calculator {
  width: 20rem;
  display: flex;
  flex-direction: column;
  background-color: #000;
  box-shadow: .1rem .1rem 2rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  padding-top: 1rem;
}

.display {
  border: 0;
  color: #fff;
  font-size: 4rem;
  text-align: right;
  background-color: #000;
  padding: 0 1rem 1rem;
}

.controls {
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  align-items: stretch;
}

button {
  font-size: 1.5rem;
  color: #fff;
  width: 25%;
  flex-grow: 1;
  margin: 0;
  padding: 1.5rem 0;
  text-align: center;
  outline: none;
  cursor: pointer;
  background-color: #696969;
  border: #9f9f9f 1px solid;
  box-sizing: border-box;

  &.double {
    width: 50%;
  }

  &:hover {
    filter: opacity(0.8);
  }
}
</style>
