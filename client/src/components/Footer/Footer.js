import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-block bg-theme">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 pt-2 mx-auto text-center bg-dark text-light">
              <h6>PSAAS &copy; 2021</h6>
              <span>
                Photo by{" "}
                <a href="https://unsplash.com/@darisja?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                  Darinka Kievskaya
                </a>{" "}
                on{" "}
                <a href="https://unsplash.com/s/photos/pet?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                  Unsplash
                </a>
              </span>
              <span>
                https://unsplash.com/photos/aI3EBLvcyu4?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
              </span>
              <span>
                <a href="https://www.freepik.com/photos/background">
                  Background photo created by rawpixel.com - www.freepik.com
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
