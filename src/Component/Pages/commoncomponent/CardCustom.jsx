import React, { Component } from 'react'
import { Card, CardActionArea, CardMedia,
    CardContent,Typography, CardActions,
    Button } from '@material-ui/core'
   

export default class CardCustom extends Component {
    render() {
        const {title} = this.props
        return (
            <React.Fragment>
                <Card >
                    <CardActionArea>
                        <CardMedia
                        image="https://picsum.photos/seed/picsum/200/300"
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {title}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Share
                        </Button>
                        <Button size="small" color="primary">
                        Learn More
                        </Button>
                    </CardActions>
                </Card>
            </React.Fragment>
        )
    }
}
