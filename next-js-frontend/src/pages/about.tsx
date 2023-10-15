import Container from "react-bootstrap/Container";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Col, Button } from "react-bootstrap";

async function addRemoteDevNet() {
  if (!process.env.NEXT_PUBLIC_RPC_URL) throw new Error("Undefined RPC url.");
  if (!process.env.NEXT_PUBLIC_EXPLORER_URL) throw new Error("Undefined explorer url.");
  try {
    const result = await (window as any).ethereum?.request({
      method: "wallet_addEthereumChain",
      params: [{
        chainId: "0x7A69",
        rpcUrls: [process.env.NEXT_PUBLIC_RPC_URL],
        chainName: "World Arcade Devnet",
        nativeCurrency: {
          name: "eth",
          symbol: "ETH",
          decimals: 18
        },
        blockExplorerUrls: [process.env.NEXT_PUBLIC_EXPLORER_URL]
      }]
    });
  } catch (error) {
    alert((error as any).message)
  }
}

export default function About() {
  return (
    <Container>
      <Header activeKey="/about" />
      <Col md="auto" className='justify-content-md-center bg-light shadow-5 text-dark'>
        <h1 id="instructions">Instructions</h1>
        <p>In order to play you are going to configure your metamask wallet.</p>
        <p>This game is running based on a devnet (hardhat node).</p>
        <p>You will have to configure public/private keys and the network. </p>
        <h2 id="wallet">Wallet</h2>
        <ol>
          <li>
            <p>You can use the seed from hardhat</p>
            <blockquote>
              <p>test test test test test test test test test test test junk</p>
            </blockquote>
            <p>But in order to do that you&#39;d need to reset your metamask wallet.</p>
          </li>
          <li>
            <p>Import some private keys from that seed, here are a few accounts:</p>
            <blockquote>
              <p>0. 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80</p>
              <p>1. 0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d</p>
              <p>2. 0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a</p>
              <p>3. 0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6</p>
              <p>4. 0x47e179ec197488593b187f80a00eb0da91f1b9d0b13f8733639f19c30a34926a</p>
              <p>5. 0x8b3a350cf5c34c9194ca85829a2df0ec3153be0318b5e2d3348e872092edffba</p>
              <p>6. 0x92db14e403b83dfe3df233f83dfa3a0d7096f21ca9b0d6d6b8d88b2b4ec1564e</p>
              <p>7. 0x4bbbf85ce3377467afe5d46f804f221813b2bb87f24d81f60f1fcdbf7cbf4356</p>
              <p>8. 0xdbda1821b80551c9d65939329250298aa3472ba22feea921c0cf5d620ea67b97</p>
              <p>9. 0x2a871d0798f97d79848a013d4936a73bf4cc922c825d33c1cf7073dff6d409c6</p>
            </blockquote>
          </li>
        </ol>
        <h2 id="network">Network</h2>
        <ol>
          <li>Mannually add a new network</li>
          <blockquote>
            <p>Address: {process.env.NEXT_PUBLIC_RPC_URL}
            </p>
            <p>Chain ID: 0x7A69</p>
          </blockquote>
          <li>Click button to automatically add it. 
            <Button variant="outline-dark" className="bottom-0 end-0 m-2" onClick={() => { addRemoteDevNet() }}>
              Add Network to Metask
            </Button>
          </li>
        </ol>
      </Col>
      <Footer />
    </Container >
  );
}