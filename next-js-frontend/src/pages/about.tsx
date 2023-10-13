import Container from "react-bootstrap/Container";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Col, Button } from "react-bootstrap";

async function addRemoteDevNet() {
  try {
    const result = await (window as any).ethereum?.request({
      method: "wallet_addEthereumChain",
      params: [{
        chainId: "0x7A69",
        rpcUrls: ["https://api.gabrielbarros.dev:8545"],
        chainName: "World Arcade Devnet",
        nativeCurrency: {
          name: "hardEth",
          symbol: "hEth",
          decimals: 18
        },
        blockExplorerUrls: ["https://api.gabrielbarros.dev/explorer"]
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
            <p>Import some private keys from that seed, here is a recommended account:</p>
            <blockquote>
              <p>0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80</p>
            </blockquote>
          </li>
        </ol>
        <h2 id="network">Network</h2>
        <ol>
          <li>Mannually add a new network</li>
          <blockquote>
            <p>Address: <a href="http://api.gabrielbarros.dev:8545">http://api.gabrielbarros.dev:8545</a>
            </p>
            <p>Chain ID: 0x7A69</p>
          </blockquote>
          <li>Click button to automatically add it.
            <Button variant="outline-light" className="text-center" onClick={() => { addRemoteDevNet() }}>
              Add Network to Metask
            </Button>
          </li>
        </ol>
      </Col>
      <Footer />
    </Container >
  );
}