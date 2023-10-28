import React from "react";

import YanwuPhoto from "./AboutImg/yanwu_hsu_Profile.jpg";
import TeddyPhoto from "./AboutImg/profile_teddy.jpg";

import "./styles/GeneralStyle.css";
import "./About.css";
import { Title } from "./components/Title";

export default function About() {
  return (
    <div className="routes-container">
      <div>
        <Title text="About us" />
        <div className="img-container-1">
          <div>
            <img className="Yanwu-img" src={YanwuPhoto} />
          </div>
          <div className="Description-container">
            <h2 className="heading-secondary">言目影像工作室</h2>
            <p className="Description subheading">
              愛情這件事情，一向都不是在我生活中必須獲得的東西，對於愛情總是順其自然的讓它發展。
              曾經的我在感情路上也是經常跌跌撞撞，基本上告白過的都是失敗收場，經過這些後我就不再那麼做了。雖然之後有許多感情，但就不會想要有在一起的想法，我也體驗了許多不一樣的感情世界。也許在某些人的眼中我就是個渣男，但我無所謂。
              直到現在，遇到了我現在這位女朋友泰迪，她是我人生中第二個女友。
              <br />
              <br />
              她的出現與在一起完全在我的意料之外，因為我說過我沒有特別想交女朋友，也說過我有過一些特別的交友關係，但最後他還是想跟我在一起，那時我跟她說：「如果能接受這樣的我，我就跟你在一起」。最後就莫名的交往了，我其實也不是很了解當時怎麼會答應，或許是因為她接受我的那種奇怪的想法。
              愛是什麼，也許有些人一生都在尋求一個解答，也有些人可能已經有他既定的答案了。但對於我來說，它無法被定義，也沒有正確的答案，從每個人身上獲得的愛也不盡相同。過度的去尋求，反而會使我迷失，它只能讓你徜徉在其中，享受何為愛的過程。
            </p>
          </div>
        </div>

        <div className="image-container">
          <div>
            <img className="Teddy-img" src={TeddyPhoto} />
          </div>
        </div>
      </div>
    </div>
  );
}
