import sc from "./NavMenu.module.scss";
import Link from "next/link";
import { Box } from "@radix-ui/themes";

export const NavMenu = () => {
  return (
    <Box>
      <nav className={sc.nav}>
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </Box>
  );
};
