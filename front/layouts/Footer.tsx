import { css } from "@emotion/react"
import { Link } from "react-router-dom"

export function Footer() {
  const height = 80;
  const FooterStyle = css`
    position: sticky;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    top: 100vh;
    height: ${height}px;
    padding: 16px 32px;
    width: 100%;
    background-color: #2d2d2d;
    text-align: center;
  `

  return <>
    <div css={FooterStyle}>
      <LinkGroup>
        <FooterLink to="/" text="Home" />
      </LinkGroup>
      <LinkGroup>
        <FooterLink to="/about" text="About" />
      </LinkGroup>
    </div>
  </>
}

function LinkGroup({ children }: { children: any }) {
  const LinkGroupStyle = css`
    display: inline-block;
    text-align: left;
    padding: 0 16px;
  `

  return <ul css={LinkGroupStyle}>
    {children}
  </ul>
}

function FooterLink({ to, text }: { to: string, text?: string }) {
  const FooterLinkStyle = css`
    color: white;
    &:hover {
      color: white;
    }
  `

  return <li>
    <Link to={to} css={FooterLinkStyle}>{text || to}</Link>
  </li>
}
