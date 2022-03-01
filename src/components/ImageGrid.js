import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImg }) => {
    const { docs } = useFirestore("images");

    console.log(docs);
    return (
        <div className="imageGrid">
            {docs &&
                docs.map((doc) => {
                    return (
                        <motion.div
                            className="imageGrid__wrapper"
                            layout
                            whileHover={{ opacity: "1" }}
                            onClick={() => {
                                setSelectedImg(doc.url);
                            }}
                            key={doc.id}
                        >
                            <motion.img
                                src={doc.url}
                                alt="uploaded pic"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                            />
                        </motion.div>
                    );
                })}
        </div>
    );
};

export default ImageGrid;
