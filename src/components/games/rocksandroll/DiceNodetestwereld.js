const dieOne = {
  dieID: 1,
  number: 5,
  locked: false,
};

function rollDie() {
  this.props.value = Math.floor(Math.random() * 6) + 1
}

function lockDie() {
  if (this.props.locked === true) return (this.props.locked === false)
  if (this.props.locked === false) return (this.props.locked === true)
}

function showDie() {
  if (this.props.locked === false) {
    if (this.props.number === 1) return A
    if (this.props.number === 2) return B
    if (this.props.number === 3) return C
    if (this.props.number === 4) return D
    if (this.props.number === 5) return E
    if (this.props.number === 6) return F
  }
  if (this.props.locked === true) {
    if (this.props.number === 1) return G
    if (this.props.number === 2) return H
    if (this.props.number === 3) return I
    if (this.props.number === 4) return J
    if (this.props.number === 5) return K
    if (this.props.number === 6) return L
  }
}


console.log(dieOne.showDie())
