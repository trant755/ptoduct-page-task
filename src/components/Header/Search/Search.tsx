import {
  // Dialog,
  Flex,
  TextField,
  IconButton,
  Theme,
  VisuallyHidden,
} from "@radix-ui/themes";
import * as Dialog from "@radix-ui/react-dialog";
import sc from "./Search.module.scss";

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const Search = () => (
  <Theme panelBackground="translucent" accentColor="gray">
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <IconButton
          color="tomato"
          className={sc.trigerBtn}
          highContrast
          aria-label="search"
          size={"3"}
        >
          <MagnifyingGlassIcon width={"22px"} height={"22px"} />
        </IconButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={sc.Overlay} />
        <Dialog.Content className={sc.Content}>
          <VisuallyHidden>
            <Dialog.Title>Edit profile</Dialog.Title>
            <Dialog.Description></Dialog.Description>
          </VisuallyHidden>
          <Theme>
            <Flex direction="column" p="0">
              <TextField.Root
                size={"3"}
                placeholder="Search the products"
                color="gray"
              >
                <TextField.Slot>
                  <MagnifyingGlassIcon height="22" width="22" />
                </TextField.Slot>
              </TextField.Root>
            </Flex>
          </Theme>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  </Theme>
);

export default Search;
