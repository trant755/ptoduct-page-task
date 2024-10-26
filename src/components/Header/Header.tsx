import sc from "./Header.module.scss";
// import Image from "next/image";
import Link from "next/link";
import Search from "@/components/Header/Search/Search";
import { NavMenu } from "@/components/Header/NavMenu/NavMenu";
import { Box, Container, Flex } from "@radix-ui/themes";
import ThemeSwitcher from "@/ui/ThemeSwitcher/ThemeSwitcher";
import Cart from "@/components/Header/Cart/Cart";

const Header = () => {
  return (
    <header>
      <Container
        size={{
          sm: "3",
          lg: "4",
        }}
        pl={{
          lg: "24px",
        }}
        pr={{
          lg: "24px",
        }}
      >
        <Flex
          align={"center"}
          height={"88px"}
          justify={"between"}
          className={sc.header}
        >
          <Flex width={"100%"} gap={"32px"}>
            <Search />
            <NavMenu />
          </Flex>

          <Box className={sc.logo}>
            <Link className={sc.logoText} href="/">
              SCOOTTECH
            </Link>
          </Box>
          <Flex width={"100%"} gap={"6"} align={"center"} justify={"end"}>
            <ThemeSwitcher />
            <Cart />
          </Flex>
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
