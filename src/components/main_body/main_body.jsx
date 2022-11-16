import React from "react"

import './main_body.css'

import Tasks from "./tasks_section/tasks"
import NoteSection from "./notes_section/notes_section"

export function Mainbody() {
    return (
        <>
            <main className="main_body">
                <Tasks></Tasks>
                <NoteSection></NoteSection>

            </main>
        </>
    )
}