import React from 'react';
import {MarkGithubIcon} from '@primer/octicons-react';
import {SocialIcon} from 'react-social-icons';
import { Icon, InlineIcon } from '@iconify/react';
import stackoverflowIcon from '@iconify-icons/simple-icons/stackoverflow';

function Footer(){
    // setup github icon and link
    return (
      <footer className="">
          <ul className="footerContainer"> 
              <li>
              <SocialIcon url="https://github.com/vloriandervishi"></SocialIcon>
              </li>
              <li>
              <SocialIcon url="https://www.linkedin.com/in/vlorian-dervishi-256233191"></SocialIcon>
              </li>
              <li>
              <SocialIcon url="mailto:vlorian.dervishi@gmail.com"></SocialIcon>              </li>
          </ul>
      </footer>
    );
}
export default Footer;