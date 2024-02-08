import { useDisclosure } from '@mantine/hooks';
import { Drawer as MantineDrawer, Button } from '@mantine/core';

export function Drawer() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <MantineDrawer opened={opened} onClose={close} title="Authentication">
        {/* Drawer content */}
      </MantineDrawer>

      <Button onClick={open}>Open Drawer</Button>
    </>
  );
}
