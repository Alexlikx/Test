import React from 'react';
import StyledSmallTitle from './SmallTitle.styled';
import { motion } from 'framer-motion';

const SmallTitle = (props) => {
    const AnimationText = {
        hidden: {
            opacity: 0,
            y: 100,
        },
        visible: (custom) => ({
            opacity: 1,
            y: 0,
            transition: { delay: custom * 0.2 },
        }),
    };
    return (
        <StyledSmallTitle>
            <motion.div initial={"hidden"}
                whileInView={"visible"}
                viewport={{ once: true }}
                variants={AnimationText}
                custom={0}>
                {props.title}
            </motion.div>
        </StyledSmallTitle>
    );
}

export default SmallTitle;
