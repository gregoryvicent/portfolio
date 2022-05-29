import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { Li } from "../css/style.module.css";
import { networkIcon, networkBox } from "./socialNetwork.module.css";

const SocialNetwork = () => {
  return (
    <ul className={networkBox}>
      <li className={Li}>
        <a href="https://twitter.com/Gregory_Vicent" target="_blank">
          <StaticImage
            src="../images/104501_twitter_bird_icon.svg"
            alt="Twitter icon"
            className={networkIcon}
          />
        </a>
      </li>
      <li className={Li}>
        <a href="https://www.linkedin.com/in/gregory-vicent-dev/" target="_blank">
          <StaticImage
            src="../images/5279114_linkedin_network_social network_linkedin logo_icon.svg"
            alt="Linkedin icon"
            className={networkIcon}
          />
        </a>
      </li>
      <li className={Li}>
        <a href="https://github.com/gregoryvicent" target="_blank">
          <StaticImage
            src="../images/317712_code repository_github_repository_resource_icon.svg"
            alt="Github icon"
            className={networkIcon}
          />
        </a>
      </li>
      <li className={Li}>
        <a href="https://www.youtube.com/channel/UCSEdxq0M1N_NpoFvbdWOjkg" target="_blank">
          <StaticImage
            src="../images/211929_social_youtube_icon.svg"
            alt="Youtube icon"
            className={networkIcon}
          />
        </a>
      </li>
    </ul>
  );
};

export default SocialNetwork;
