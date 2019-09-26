import React from "react"
import { Link } from "gatsby"
import { Container, Logo, ButtonRowContainer, Icons } from "./style"

export default function Header() {
  return (
    <Container>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center" }}>
          <Logo>
            Marvin <br /> Messenzehl
          </Logo>
        </a>
      </Link>

      <ButtonRowContainer>
        <Icons>
          <a
            href="https://twitter.com/brian_lovin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Twitter</p>
          </a>

          <a
            href="https://github.com/brianlovin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>GitHub</p>
          </a>
        </Icons>
        <Link href="/about">
          <a>
            <button>About</button>
          </a>
        </Link>
      </ButtonRowContainer>
    </Container>
  )
}
