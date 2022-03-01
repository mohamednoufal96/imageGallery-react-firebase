import React from "react";
import { motion } from "framer-motion";

const Modal = ({ selectedImg, setSelectedImg }) => {
    const clickHandler = (event) => {
        if (event.target.classList.contains("modal")) setSelectedImg(null);
    };
    return (
        <motion.div className="modal" onClick={clickHandler}>
            <motion.img src={selectedImg} alt="modal pic" initial={{ y: "-100vh" }} animate={{ y: "0" }} />
        </motion.div>
    );
};

export default Modal;
