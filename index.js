class FizzBuzz {
  constructor (range) {
    this._range = range
    this._longString = ''
    this._intCount = 0
    this._fizzbuzzCount = 0
    this._buzzCount = 0
    this._fizzCount = 0
    this._luckyCount = 0
  }

  createResults (luckyFunc) {
    for (const i of Array(this._range).keys()) {
      let continueVal = true
      const value = i + 1
      if (luckyFunc) continueVal = this.luckyFunc(value)
      if (continueVal) {
        if (value % 15 === 0) {
          this._longString += 'fizzbuzz '
          this._fizzbuzzCount++
        }
        else if (value % 5 === 0) {
          this._longString += 'buzz '
          this._buzzCount++
        }
        else if (value % 3 === 0) {
          this._longString += 'fizz '
          this._fizzCount++
        }
        else {
          this._longString += `${value} `
          this._intCount++
        }
      }
    }
  }

  luckyFunc (int) {
    if (int.toString().includes('3')) {
      this._longString += 'lucky '
      this._luckyCount++
      return false
    }
    return true
  }

  printLongString () {
    console.log(this._longString)
    return this._longString
  }

  createValueString () {
    const addedValues = `fizz: ${this._fizzCount} buzz: ${this._buzzCount} fizzbuzz: ${this._fizzbuzzCount} lucky: ${this._luckyCount} integer: ${this._intCount}`
    this._longString += addedValues
    return addedValues
  }

  createResultsQ1(print= true) {
    this.createResults()
    if (print) this.printLongString()
    return this._longString
  }

  createResultsQ2(print = true) {
    this.createResults(this.luckyFunc)
    if (print) this.printLongString()
    return this._longString
  }

  createResultsQ3(print = true) {
    this.createResults(this.luckyFunc)
    this.createValueString()
    if (print) this.printLongString()
    return this._longString
  }

  get countValues() {
    return (
      {
        int: this._intCount,
        fizzbuzz: this._fizzbuzzCount,
        buzz: this._buzzCount,
        fizz: this._fizzCount,
        lucky: this._luckyCount,
      }
    )
  }
}

module.exports = FizzBuzz