import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/layout";

function TypingAnimation() {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const interval = setTimeout(() => {
      setDots((prev) => {
        if (prev.length >= 6) {
          return ".";
        } else {
          return prev + ".";
        }
      });
    }, 500);

    return () => clearInterval(interval);
  }, [dots]);

  return <Box
          p='1px'
          w='5%'
          alignItems='center'
          fontWeight='bold'
          color='white'
          mt='4'
          bg='blue.500'
          rounded='md'
          shadow='md'
          mb='2'
        >
          {dots}
        </Box>;
}

export default TypingAnimation;
