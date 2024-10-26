import { Button, Flex } from "@radix-ui/themes";
import { CubeIcon } from "@radix-ui/react-icons";
import sc from "./Cart.module.scss";

const Cart = () => {
  return (
    <Button variant="solid" radius="full" size={"4"} className={sc.button}>
      Cart
      <Flex className={sc.iconWrapper}>
        <CubeIcon />
      </Flex>
    </Button>
  );
};

export default Cart;
