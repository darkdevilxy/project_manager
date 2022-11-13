import './small_cards.css'
import { useState } from 'react'

export default function Smallcards( props ) {

    const [class_name, set_class_name] = useState( "card" )

    return (
        <>
            <div className="card">
                {
                props.name
            } </div>
        </>
    )
}
