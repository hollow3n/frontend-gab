import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function ReadTransfert() {
    const [APIData, setAPIData] = useState([]);
    const [ref, setRef] = useState('');
    const [pin, setPIN] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:/transfert/`)
            .then((response) => {
                console.log(response.data)
                setAPIData(response.data);
            })

        setPIN(localStorage.getItem('PIN'));
        setRef(localStorage.getItem('Référence'))
    }, []); 
    
    const transfert = APIData.map((data) => {
        if(data.ref === ref && data.pin === pin) {
            return data
        }
    })
  

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Référence</Table.HeaderCell>
                        <Table.HeaderCell>Montant</Table.HeaderCell>
                        <Table.HeaderCell>Client</Table.HeaderCell>
                        <Table.HeaderCell>Bénéficiaire</Table.HeaderCell>
                        <Table.HeaderCell>Motif</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                        <Table.Row>
                            <Table.Cell>{transfert.ref}</Table.Cell>
                            <Table.Cell>{transfert.montant} DH</Table.Cell>
                            <Table.Cell>{transfert.client}</Table.Cell>
                            <Table.Cell>{transfert.beneficiaire}</Table.Cell>
                            <Table.Cell>{transfert.motif}</Table.Cell>
                        </Table.Row>
                </Table.Body>
            </Table>
        </div>
    )
}
