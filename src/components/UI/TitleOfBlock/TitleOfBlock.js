import React from 'react';
import TittleOfBlockStyled from './TitleOfBlock.styled';
import { motion } from 'framer-motion';

const TitleOfBlock = (props) => {

    const AnimationText = {
        hidden: {
            opacity: 0,
            y: 50,
        },
        visible: (custom) => ({
            opacity: 1,
            y: 0,
            transition: { delay: custom * 0.2 },
        }),
    };

    return (
        <TittleOfBlockStyled>
            <motion.div initial={"hidden"}
                whileInView={"visible"}
                viewport={{ once: true }}
                variants={AnimationText}
                custom={0}>
                {props.title}
            </motion.div>
        </TittleOfBlockStyled>
    );
}

export default TitleOfBlock;
