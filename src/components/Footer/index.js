import React from 'react'
import { FaFacebook, FaInstagram, FaYouTube, FaTwitter, FaLinkedIn } from "react-icons/fa"
import { FooterContainer, SocialIcon, SocialIcons, SocialIconLink, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from "./FooterElements"

const Footer = () => {
  return (
    <FooterContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <SocialIcon>
            EXPLOR
            </SocialIcon>
          </SocialLogo>
          <WebsiteRights>EXPLOR © {new Date().getFullYear()}</WebsiteRights>
          {/* <SocialIcons>
            <SocialIconLink>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink>
            
              <FaYouTube />
            </SocialIconLink>
            <SocialIconLink>
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink>
              <FaLinkedIn />
            </SocialIconLink>
          </SocialIcons> */}
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  )
}

export default Footer