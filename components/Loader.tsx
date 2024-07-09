import { Variants, motion } from "framer-motion";

const Loader = () => {
  const variants = {
    initial: {
      scaleY: 0.5,
      opacity: 0,
    },
    animate: {
      scaleY: 1,
      opacity: 1,
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 1,
        ease: "circIn",
      },
    },
  } as Variants;

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-violet-600 z-50'>
      <motion.div
        transition={{
          staggerChildren: 0.25,
        }}
        initial='initial'
        animate='animate'
        className='flex gap-2'>
        <motion.div
          variants={variants}
          className="relative h-20 w-4 bg-white before:absolute before:content-['M'] before:-top-8 before:left-1/2 before:-translate-x-1/2 before:text-white before:text-3xl"
        />
        <motion.div
          variants={variants}
          className="relative h-20 w-4 bg-white before:absolute before:content-['O'] before:-top-8 before:left-1/2 before:-translate-x-1/2 before:text-white before:text-3xl"
        />
        <motion.div
          variants={variants}
          className="relative h-20 w-4 bg-white before:absolute before:content-['R'] before:-top-8 before:left-1/2 before:-translate-x-1/2 before:text-white before:text-3xl"
        />
        <motion.div
          variants={variants}
          className="relative h-20 w-4 bg-white before:absolute before:content-['A'] before:-top-8 before:left-1/2 before:-translate-x-1/2 before:text-white before:text-3xl"
        />
        <motion.div
          variants={variants}
          className="relative h-20 w-4 bg-white before:absolute before:content-['N'] before:-top-8 before:left-1/2 before:-translate-x-1/2 before:text-white before:text-3xl"
        />
      </motion.div>
    </div>
  );
};

export default Loader;
