import React from 'react'
import { irodsColors } from '../../themes/Irods'

import Title from '../../components/Typography/Title'
import Heading from '../../components/Typography/Heading'
import Paragraph from '../../components/Typography/Paragraph'
import ColorSection from '../../components/Color/ColorSection'

const irods = props => {
    return (
        <div>
            <Title>RENCI / iRODS</Title>
            
            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio nemo eos magni, vel eligendi cupiditate fuga odio numquam alias harum, explicabo facilis quos eum inventore, adipisci doloribus cumque veritatis consectetur!
            </Paragraph>

            <Heading>Primary Palette</Heading>
            <ColorSection colors={ irodsColors.primary }/>

        </div>
    )
}

export default irods
