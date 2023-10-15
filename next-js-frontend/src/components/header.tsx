import { useConnectWallet } from "@web3-onboard/react";
import { useEffect, useState } from "react";
import { Button, Nav, Navbar, Stack } from "react-bootstrap";
import { GiDisc } from "react-icons/gi";

export default function Header({ activeKey }: { activeKey: string }) {
    if (!process.env.NEXT_PUBLIC_EXPLORER_URL) throw new Error("Undefined explorer url.");
    const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()
    const [button, setButton] = useState(<></>);

    useEffect(() => {
        setButton((
            <Button variant="outline-light" className="position-absolute bottom-0 end-0 m-2"
                onClick={() => (
                    wallet ?
                        disconnect(wallet)
                        :
                        connect())}>
                {connecting ? 'Connecting' : wallet ? 'Disconnect' : 'Connect Wallet'}
            </Button>
        ))
    }, [wallet, connecting]);


    return (
        <Navbar bg="dark" className="mb-3 rounded sticky-top position-relative">
            <Stack gap={1}>
                <Navbar.Brand href="/" className="d-flex justify-content-center">
                    <img
                        className="header-image-left"
                        alt="Cartesi Arcade Image"
                        src="/controlls.png"
                        width="60"
                        height="60"
                    />
                    <h1 className="text-light m-2">World Arcade</h1>
                    <img
                        className="header-image-right"
                        alt="Cartesi Arcade Image"
                        src="/controlls.png"
                        width="60"
                        height="60"
                    />
                </Navbar.Brand>

                <Nav variant="underline" className="justify-content-center" activeKey={activeKey}>
                    <Nav.Item>
                        <Nav.Link href="/">Games</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link href="/upload">Upload<span className="ms-1"><GiDisc /></span></Nav.Link>
                    </Nav.Item>
                    {/*
                    <Nav.Item>
                        <Nav.Link href="/how_to">How To</Nav.Link>
                    </Nav.Item>
                */}
                    <Nav.Item>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link target="_blank" href={process.env.NEXT_PUBLIC_EXPLORER_URL}>Explorer</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link target="_blank" href="http://172.233.201.228:8888/">Logs</Nav.Link>
                    </Nav.Item>
                </Nav>

            </Stack>

            {button}
        </Navbar>
    );
}