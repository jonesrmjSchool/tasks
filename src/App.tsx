import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header
                className="App-header"
                style={{ backgroundColor: "#007912" }}
            >
                UD CISC275 with React Hooks and TypeScript by Ryan Jones
            </header>
            <p>Hello World!</p>
            <img
                src="https://yt3.googleusercontent.com/ytc/AIf8zZS-jdEhRvaCve-TKWM5vch80whAkTtIa8KGKfkatw=s900-c-k-c0x00ffffff-no-rj"
                width="200"
                height="200"
                alt="jonesrmj logo"
            />
            <h2>My interests:</h2>
            <ul>
                <li>Technology</li>
                <li>Architecture</li>
                <li>Urbanism</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p></p>
            <p>Since I am learning Japanese, here is a Hiragana chart:</p>
            <Container>
                <Row>
                    <Col>Vowels:</Col>
                    <Col>あ</Col>
                    <Col>い</Col>
                    <Col>う</Col>
                    <Col>え</Col>
                    <Col>お</Col>
                </Row>
                <Row>
                    <Col>k + vowel:</Col>
                    <Col>か</Col>
                    <Col>き</Col>
                    <Col>く</Col>
                    <Col>け</Col>
                    <Col>こ</Col>
                </Row>
                <Row>
                    <Col>s + vowel:</Col>
                    <Col>さ</Col>
                    <Col>し</Col>
                    <Col>す</Col>
                    <Col>せ</Col>
                    <Col>そ</Col>
                </Row>
                <Row>
                    <Col>t + vowel:</Col>
                    <Col>た</Col>
                    <Col>ち</Col>
                    <Col>つ</Col>
                    <Col>て</Col>
                    <Col>と</Col>
                </Row>
                <Row>
                    <Col>n + vowel:</Col>
                    <Col>な</Col>
                    <Col>に</Col>
                    <Col>ぬ</Col>
                    <Col>ね</Col>
                    <Col>の</Col>
                </Row>
                <Row>
                    <Col>h + vowel:</Col>
                    <Col>は</Col>
                    <Col>ひ</Col>
                    <Col>ふ</Col>
                    <Col>へ</Col>
                    <Col>ほ</Col>
                </Row>
                <Row>
                    <Col>m + vowel:</Col>
                    <Col>ま</Col>
                    <Col>み</Col>
                    <Col>む</Col>
                    <Col>め</Col>
                    <Col>も</Col>
                </Row>
                <Row>
                    <Col>y + vowel:</Col>
                    <Col>や</Col>
                    <Col>-</Col>
                    <Col>ゆ</Col>
                    <Col>-</Col>
                    <Col>よ</Col>
                </Row>
                <Row>
                    <Col>r + vowel:</Col>
                    <Col>ら</Col>
                    <Col>り</Col>
                    <Col>る</Col>
                    <Col>れ</Col>
                    <Col>ろ</Col>
                </Row>
                <Row>
                    <Col>w + vowel:</Col>
                    <Col>わ</Col>
                    <Col>-</Col>
                    <Col>-</Col>
                    <Col>-</Col>
                    <Col>を</Col>
                </Row>
                <Row>
                    <Col>n:</Col>
                    <Col>ん</Col>
                    <Col>-</Col>
                    <Col>-</Col>
                    <Col>-</Col>
                    <Col>-</Col>
                </Row>
            </Container>
            <p></p>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "100",
                                height: "100",
                                backgroundColor: "red"
                            }}
                        >
                            {" "}
                            Box 1
                        </div>
                    </Col>
                </Row>
            </Container>
            <p></p>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "100",
                                height: "100",
                                backgroundColor: "red"
                            }}
                        >
                            {" "}
                            Box 2
                        </div>
                    </Col>
                </Row>
            </Container>
            <p></p>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
