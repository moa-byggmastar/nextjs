import React from 'react'

export default function form() {

    async function handleSubmit(formEvent) {
        'use server'
        console.log(formEvent)
    }

    return (
        <div>
            <form action={handleSubmit}>
                <input name='name' type="text" placeholder='Name:' />
                <input name='email' type="text" placeholder='Email' />
                <input name='message' type="text" placeholder='Message:' />
                <input name='adress' type="text" placeholder='Adress:' />
                <input name='town' type="text" placeholder='Town' />
                <button>Submit</button>
            </form>
        </div>
    )
}
