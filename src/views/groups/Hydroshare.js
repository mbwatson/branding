import React from 'react'
import { hydroshareColors } from '../../themes/Hydroshare'

import Title from '../../components/Typography/Title'
import Heading from '../../components/Typography/Heading'
import Paragraph from '../../components/Typography/Paragraph'
import ColorSection from '../../components/Color/ColorSection'

const hydroshare = props => {
    return (
        <div>
            <Title>RENCI / Hydroshare</Title>
            
            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas quo in, minus at necessitatibus dolorum labore aliquam dignissimos ipsam praesentium sit magnam inventore, accusamus a, earum nostrum. Quasi, facere obcaecati?
            </Paragraph>

            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis, nobis minus.
            </Paragraph>
            
            <Heading>Primary Colors</Heading>
            <ColorSection colors={ hydroshareColors.primary }/>

        </div>
    )
}

export default hydroshare
