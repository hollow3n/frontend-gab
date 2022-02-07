import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';

export default function DemandeTransfert() {
    let history = useHistory();
    const [ref, setRef] = useState('');
    const [pin, setPIN] = useState('');

    const postData = () => {
        localStorage.setItem('Référence', ref)
        localStorage.setItem('PIN', pin);
        axios.post(`http://localhost:/`, {
            ref,
            pin
        }).then(() => {
            history.push('/read')
        })
    }
    
    return (
        <div>
            <h4>Accès à la transaction</h4>
            <Form className="create-form">

                <Form.Field>
                    <label>Référence du transfert</label>
                    <input onChange={(e) => setRef(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Code PIN</label>
                    <input onChange={(e) => setPIN(e.target.value)}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Accéder</Button>
            </Form>
        </div>
    )
}
