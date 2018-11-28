import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import Title from '../components/Typography/Title'
import Heading from '../components/Typography/Heading'
import Subheading from '../components/Typography/Subheading'
import Paragraph from '../components/Typography/Paragraph'
import TextLink from '../components/Typography/TextLink'
import Block from '../components/Layout/Block'

const styles = (theme) => ({
    root: {

    },
})

const colors = (props) => {
    const { classes } = props
    return (
        <div className={ classes.root }>
            <Title>Typography</Title>
            
            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, nam fugit adipisci libero doloremque eum architecto beatae et dolore veritatis?
            </Paragraph>

            <Heading>RENCI's Font Stack</Heading>

            <Paragraph>
                The font families making up this style guide are Google's <TextLink external to="https://fonts.google.com/?query=roboto">Roboto</TextLink> and <TextLink external to="https://fonts.google.com/?query=open+sans">Open Sans</TextLink> fonts,
                used for headings and paragraphs, respectively.
                With the RENCI stylesheet, all headings are already styled to use the heading font&emdash;Roboto,
                and all paragraphs are styled with the paragraph font&emdash;Open Sans.
            </Paragraph>

            <Subheading>Headings</Subheading>
            <Paragraph>
                The heading font is Google's <TextLink external to="https://fonts.google.com/?query=roboto">Roboto</TextLink> font.
            </Paragraph>
            <Block>
                {
                    ['h1', 'h2', 'h3', 'h4', 'h5',].map(variant => {
                        return (
                            <Typography variant={ variant } style={{ marginBottom: '16px', }} key={ variant }>
                                { variant }: The Quick Brown Fox
                            </Typography>
                        )
                    })
                }
            </Block>

            <Subheading>Paragraphs</Subheading>
            <Paragraph>
                Paragraphs and general blocks of text use Google's <TextLink external to="https://fonts.google.com/?query=open+sans">Open Sans</TextLink> font.
            </Paragraph>
            <Block>
                {
                    ['body2', 'body1'].map(variant => {
                        return (
                            <Typography variant={ variant } style={{ marginBottom: '16px', }} key={ variant }>
                                { variant }: The quick brown fox jumps over the lazy dog.
                            </Typography>
                        )
                    })
                }
            </Block>
        </div>
    )
}

export default withStyles(styles)(colors)