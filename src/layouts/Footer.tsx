/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { Link } from "react-router-dom"

export function Footer() {
  const FooterStyle = css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    padding: 16px 32px;
    width: 100%;
    height: 48px;
    background-color: #2d2d2d;
    text-align: center;
  `

  return <div css={FooterStyle}>
    <LinkGroup>
      <FooterLink to="/" text="Home" />
    </LinkGroup>
    <LinkGroup>
      <FooterLink to="/about" text="About" />
    </LinkGroup>
  </div>
}

function LinkGroup({ children }: {children: any}) {
  const LinkGroupStyle = css`
    display: inline-block;
    text-align: left;
    padding: 0 16px;
  `

  return <ul css={LinkGroupStyle}>
    {children}
  </ul>
}

function FooterLink({to, text}: {to: string, text?: string}) {
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
