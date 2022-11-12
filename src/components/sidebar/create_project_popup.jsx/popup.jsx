import { addDoc } from 'firebase/firestore'
import { useState } from 'react'

import './popup.css'

export default function Popup( { status, database } ) {

    const [project_name, set_project_name] = useState( "" )
    const [project_description, set_project_description] = useState( "" )

    function close_dialog() {
        status( () => !status )
    }

    async function create_record() {
        project_name ? await addDoc( database, { project_name: project_name, project_description: project_description } ) : alert( "Project Name Cannot Be empty" )
        close_dialog()

    }


    return (
        <>
            <section className="popup_container">
                <div className="popup">
                    <div className="title_bar">
                        <label htmlFor="title">Create New Project</label>
                        <button onClick={close_dialog}
                            className="close">&times;</button>
                    </div>
                    <section className='form'>
                        <input value={project_name}
                            onChange={
                                ( e ) => set_project_name( e
                                    .target
                                    .value )
                            }
                            type="text"
                            className="project_name"/>
                        <textarea value={project_description}
                            onChange={
                                ( e ) => set_project_description( e
                                    .target
                                    .value )
                            }
                            className="project_description"
                            id="project_description"
                            cols="30"
                            rows="10"/>
                    </section>
                    <button onClick={create_record}
                        className="create">Create</button>
                </div>
            </section>

        </>
    )
}
