import '@mantine/core/styles.css';
import { MantineProvider, Modal, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Router } from './Router';
import { theme } from './theme';
import Buffer from 'buffer';

import { Helmet } from 'react-helmet-async';
import { Drawer } from './Drawer';

const generateNonce = () => {
  const buffer = Buffer.Buffer.from(crypto.randomUUID());
  return buffer.toString('base64');
};

const nonce = generateNonce();

export default function App() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <MantineProvider theme={theme} getStyleNonce={() => nonce}>
      <Helmet>
        <meta
          httpEquiv="Content-Security-Policy"
          content={`object-src 'none'; upgrade-insecure-requests; default-src 'self'; connect-src ws: http://localhost:5173/; style-src 'self' 'nonce-${nonce}'; block-all-mixed-content; form-action 'self'; script-src 'self' 'nonce-${nonce}' http://localhost:5173/`}
        ></meta>
      </Helmet>
      <Modal opened={opened} onClose={close} title="Authentication">
        {/* Modal content */}
      </Modal>

      <Button onClick={open}>Open modal</Button>

      <Router />

      <Drawer />
    </MantineProvider>
  );
}
