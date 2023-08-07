import React from 'react'

import {
    Button, Card, CardActions, CardContent, Grid, Typography
} from '@mui/material';

import axios from 'axios';
import OverdueComponent from './OverdueComponent';
import PaidComponent from './PaidComponent';
import PaidDeleteComponent from './PaidDeleteComponent';

export default function HomeMapComponent(props) {
    return (
        <div>
            <Grid container spacing={4}>
                {props.debts.map((debt, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <Card
                            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                        >
                            <CardContent sx={{ flexGrow: 1 }}>
                                {props.currentUser && props.currentUser.UserAdmin ?
                                    <Typography gutterBottom variant="h5" component="h2" className='capitalise'>
                                        {debt.userID}
                                    </Typography> : null}
                                <Typography>
                                    ${debt.amount}
                                </Typography>
                                <Typography>
                                    Verified on: <br></br>
                                    {debt.createdAt.slice(0, 10)}<br></br>
                                </Typography>
                                {props.paid == true ? <PaidComponent debt={debt} /> : <OverdueComponent debt={debt} />}
                            </CardContent>
                            <CardActions>
                                 {props.currentUser && props.currentUser.UserAdmin ?<PaidDeleteComponent debt={debt} currentUser={props.currentUser} /> : null }
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}