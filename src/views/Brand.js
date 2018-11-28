import React from 'react'

import Title from '../components/Typography/Title'
import Paragraph from '../components/Typography/Paragraph'
import LogoSection from '../components/Logo/LogoSection'

// Logos
import Logo from '../images/logo/png/standard/renci-logo.png'
import LogoAlt from '../images/logo/png/standard/renci-logo-alt.png'
import LogoBlack from '../images/logo/png/standard/renci-logo-black.png'
import LogoGray from '../images/logo/png/standard/renci-logo-gray.png'
import LogoWhite from '../images/logo/png/standard/renci-logo-white.png'
import LogoSimple from '../images/logo/png/simple/renci-logo-simple.png'
import LogoAltSimple from '../images/logo/png/simple/renci-logo-alt-simple.png'
import LogoBlackSimple from '../images/logo/png/simple/renci-logo-black-simple.png'
import LogoGraySimple from '../images/logo/png/simple/renci-logo-gray-simple.png'
import LogoWhiteSimple from '../images/logo/png/simple/renci-logo-white-simple.png'

import { renciColors } from '../themes/Renci'

const standardLogos = [
    { image: Logo, bgColor: '#fff', },
    { image: LogoBlack, bgColor: '#fff', },
    { image: LogoAlt, bgColor: renciColors.primary.ocean.hex, },
    { image: LogoGray, bgColor: renciColors.primary.slate.hex, },
    { image: LogoWhite, bgColor: renciColors.primary.slate.hex, },
]
const simpleLogos = [
    { image: LogoSimple, bgColor: '#fff', },
    { image: LogoBlackSimple, bgColor: '#fff', },
    { image: LogoAltSimple, bgColor: renciColors.primary.ocean.hex, },
    { image: LogoGraySimple, bgColor: renciColors.primary.slate.hex, },
    { image: LogoWhiteSimple, bgColor: renciColors.primary.slate.hex, },
]

const home = props => {
    return (
        <div>
            <Title>RENCI Branding</Title>
            
            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui sit sunt, fugiat fuga autem necessitatibus molestiae libero repellat ut iste sint repudiandae animi. Quasi, sunt reiciendis vero explicabo deserunt. Aperiam.
            </Paragraph>

            <LogoSection logos={ standardLogos }/>

            <LogoSection logos={ simpleLogos }/>
        </div>
    )
}

export default home