import { collection, doc, deleteDoc, getFirestore } from 'firebase/firestore';
import { useFirestoreCollectionData } from 'reactfire';

import edit from './../../assets/edit.svg'
import add from './../../assets/plus.svg'

import './sidebar.css'

import Smallcards from './small_cards/small_cards';
import Popup from './create_project_popup.jsx/popup';
import { useState } from 'react';
import React from 'react';


export default function Sidebar() {


    const db_ref = collection( getFirestore(), 'projects' );
    const { status, data: projects } = useFirestoreCollectionData( db_ref, { idField: 'id' } );
    const [popup_state, set_popup_state] = useState( false )

    function create_record() {
        set_popup_state( () => !popup_state )
    }

    async function delete_record( name ) {
        const document = projects.find( item => item.project_name == name )
        await deleteDoc( doc( db_ref, document.id ) )
    }

    return (
        <>
            <aside className="sidebar">
                <div className="header">
                    Projects
                </div>
                <div className="top_section">
                    <button onClick={create_record}
                        className="new">
                        <img className='top_section_button' src={add}
                            alt="Add"/>
                    </button>
                    <button onClick={
                            () => delete_record( "Test2" )
                        }
                        className="edit">
                        <img className='top_section_button' src={edit}
                            alt=""/>
                    </button>
                </div>
                <div className="content">
                    {
                    projects && projects.map( project => (
                        <Smallcards name={
                                project.project_name
                            }
                            key={
                                project.id
                            }/>
                    ) )
                } </div>
                <div className="bottom_section">
                    <span>Status: {status}</span>
                </div>
            </aside>
            {
            console.log( popup_state )
        }
            {
            popup_state ? <Popup database={db_ref}
                status={set_popup_state}></Popup> : ""
        } </>
    )


}
