import React from 'react'

export default function Footer() {
  return (
    <div>
      <div className="footer-clean">
      <footer>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-4 col-md-3 item">
              <h3>Services</h3>
              <ul>
                <li><a href="https://www.youtube.com/channel/UCqSlTZjKWXe7Fh9_9ef0aSw" target='_blank'>Web design</a></li>
                <li><a href="https://www.youtube.com/channel/UCqSlTZjKWXe7Fh9_9ef0aSw"target='_blank'>Development</a></li>
                <li><a href="https://www.youtube.com/channel/UCqSlTZjKWXe7Fh9_9ef0aSw"target='_blank'>Hosting</a></li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li><a href="#">Company</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Legacy</a></li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-3 item">
              <h3>Careers</h3>
              <ul>
                <li><a href="#">Job openings</a></li>
                <li><a href="#">Employee success</a></li>
                <li><a href="#">Benefits</a></li>
              </ul>
            </div>
            <div className="col-lg-3 item social">
              <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
              <a href="#"><ion-icon name="logo-linkedin"></ion-icon></a>
              <a href="https://www.youtube.com/@HackVenom1" target='_blank'><ion-icon name="logo-youtube"></ion-icon></a>
              <a href="https://wa.me/+923218517228 " target='_blank'><ion-icon name="logo-whatsapp"></ion-icon></a>
              <p className="copyright">Hackvenom © 2024</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </div>
  )
}
