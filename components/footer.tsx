import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <a href="https://vietgame.asia/" target="_blank">
              <Image
              src={"https://vietgame.asia/wp-content/themes/deploy/public/images/vietgame-short.png?id=e5ecd15da2b22678c1bc"}
              width="100"
              height="116"
              alt={"logo"}
            />
          </a>

        </div>
      </Container>
    </footer>
  );
}
