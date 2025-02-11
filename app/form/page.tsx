import React from 'react'

export default function form() {

    async function handleSubmit(formEvent) {
        'use server'
        console.log(formEvent)
    }

    return (
        <div>
            <h1>Formulär</h1>
            <form action={handleSubmit} className='form'>
                <input name='name' type="text" placeholder='Namn:' className='input' required />
                <input name='email' type="text" placeholder='E-post:' className='input' required />
                <input name='message' type="text" placeholder='Meddelande:' className='input' required />
                <input name='adress' type="text" placeholder='Adress:' className='input' required />
                <input name='town' type="text" placeholder='Stad' className='input' required />
                <button className='button'>Lämna In</button>
            </form>
        </div>
    )
}
