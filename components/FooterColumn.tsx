"user client"

import { motion } from "framer-motion";

type Props = {
    index: number;
    data: Array<string>;
  };

function FooterColumn({ index, data }: Props) {
    const columnItems = data.map((item, index) => 
        index === 0 
        ? <h5 className="font-bold">{item}</h5>
        : <p>{item}</p>);

    return (<motion.div
        initial={{
          x: index % 2 === 0 ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="space-y-4 text-xs text-gray-800"
      >
        {columnItems}
      </motion.div>
    );
}

export default FooterColumn;