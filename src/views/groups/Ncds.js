import React from 'react'
import { ncdsColors } from '../../themes/Ncds'

import Title from '../../components/Typography/Title'
import Heading from '../../components/Typography/Heading'
import Paragraph from '../../components/Typography/Paragraph'
import ColorSection from '../../components/Color/ColorSection'

const ncds = props => {
    return (
        <div>
            <Title>RENCI / NCDS</Title>
            
            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate autem, ut saepe sequi iure eligendi blanditiis asperiores quod dicta impedit.
            </Paragraph>

            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit labore consequuntur doloribus sunt, perferendis placeat voluptates eligendi dolorum possimus tempora omnis ut quod autem quia dicta earum nostrum molestiae soluta, iste eius ipsa nisi. Pariatur magni maiores cupiditate iste ea sapiente minus sed, repudiandae sunt nesciunt autem officiis corrupti reprehenderit at accusamus perspiciatis. Cumque cupiditate, provident quisquam vero non ipsam hic deleniti accusantium ullam ad atque consequuntur minus itaque reprehenderit earum quae illum. Ut maiores aperiam pariatur asperiores adipisci aspernatur, dignissimos nemo explicabo placeat quis illum quas quibusdam, doloribus. Libero fugit ea minus accusantium hic placeat sed, sunt explicabo similique?
            </Paragraph>

            <Heading>Primary Colors</Heading>
            <ColorSection colors={ ncdsColors.primary }/>

        </div>
    )
}

export default ncds
