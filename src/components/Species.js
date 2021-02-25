import React from 'react'
import { Card, Grid } from 'semantic-ui-react';

export default function Species ({ data }) {
    return (
        <>
            <h1>Species</h1>
            <Grid columns={3}>
                {data.map((species, i) => {
                    return(
                        <Grid.Column key={i}>
                            <Card>
                                <Card.Content>
                                    <Card.Header>{species.name}</Card.Header>
                                    <Card.Description>
                                        <strong>Designation</strong>
                                        <p>{species.designation}</p>
                                        <strong>Classification</strong>
                                        <p>{species.classification}</p>
                                        <strong>Language</strong>
                                        <p>{species.language}</p>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    )
                })}
            </Grid>
        </>
    )
}