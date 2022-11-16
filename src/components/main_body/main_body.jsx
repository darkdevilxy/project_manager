import React from "react"

import './main_body.css'

import Tasks from "./tasks_section/tasks"

export function Mainbody() {
    return (
        <>
            <main className="main_body">
                <Tasks></Tasks>

            </main>
        </>
    )
}