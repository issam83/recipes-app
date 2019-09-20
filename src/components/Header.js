import React from 'react'


    const Header = ({ pseudo }) => {
        const formatPseudo = pseudo => /[aeyuio]/i.test(pseudo[0]) ? `d'${ pseudo }` : `de ${ pseudo }`
        return (
            <header>
                <h1>La boite à recettes { formatPseudo(pseudo) } </h1>   
            </header>
        )
    }


export default Header