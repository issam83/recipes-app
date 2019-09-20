import React from 'react'

    const AdminForm = ({
        id: key,
        majRecette,
        recettes,
        supprimerRecette
    }) => {
        const recette = recettes[key]

        const handleChange = (event, key) => {
            const { name, value } = event.target
            const recette = recettes[key]
            recette[name] = value
            majRecette(key, recette)
        } 

        return (
            <div className='card'>
                <form className='admin-form' >
                    <input value={recette.nom} onChange={e => handleChange(e, key)}
                    type="text" name="nom" placeholder='Nom de la recette' />
                    <input value={recette.image} onChange={e => handleChange(e, key)}
                    type="text" name="image" placeholder="Nom de l'image" />
                    <textarea value={recette.ingredients} onChange={e => handleChange(e, key)}
                    name="ingredients" placeholder='Liste des ingredients'
                     rows="3"/>
                    <textarea value={recette.instructions} onChange={e => handleChange(e, key)}
                    name="instructions" placeholder='Liste des instructions'
                     rows="15"/>
                     <button onClick={() => supprimerRecette(key)}>Supprimer</button>
               </form>
            </div>
        )
    }

export default AdminForm