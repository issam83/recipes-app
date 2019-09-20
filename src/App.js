import React, { Component } from 'react'
// CSS
import './App.css'

import Header from './components/Header'
import recettes from './recettes'
import Card from './components/Card'
import Admin from './components/Admin';

// Firebase
import base from './base'

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes: {}
  }

  // Firebase: syncroniser les données
  // C'est dans le cdm qu'on souscrit, c'est ici qu'on fait des appels avec fetch ou axios
  componentDidMount() {
    this.ref = base.syncState(`/${this.state.pseudo}/recettes`,{
    context: this,
    state: 'recettes'
    })
  }

  //Le cdu met a jour a chaque fois qu'il a un changement dans le state donc il ne faut jamais faire de setState a l'interieur
  // componentDidUpdate() {
  //   console.log('cdu')
  // }

  // C'est dans le cwu qu'on désouscrit qu'on annule donc tout les fetch
  componentWillUnmount() {
    base.removeBinding(this.ref)
  }


  ajouterRecette = recette => {
    const recettes = { ...this.state.recettes }
    recettes[`recette-${Date.now()}`] = recette
    this.setState({ recettes })
  }

  majRecette = (key, NewRecette) => {
    const recettes = { ...this.state.recettes }
    recettes[key] = NewRecette
    this.setState({ recettes })
  }

  supprimerRecette = key => {
    const recettes = { ...this.state.recettes }
    recettes[key] = null
    this.setState({ recettes })
  }

  chargerExemple = () => this.setState({ recettes })

  render () {
    const cards = Object.keys(this.state.recettes)
    .map(key => <Card key={key} details={this.state.recettes[key]}></Card>)
    return (
      <div className='box'>
        <Header pseudo={this.state.pseudo} />
        <div className='cards'>
            {cards}
        </div>
        <Admin
        pseudo={this.state.pseudo}
        recettes={this.state.recettes}
        majRecette={this.majRecette}
        ajouterRecette={this.ajouterRecette}
        supprimerRecette={this.supprimerRecette} 
        chargerExemple={this.chargerExemple}>
        </Admin>
      </div>
    )
  }
}

export default App
