import React from "react";

export default function Form(props) {
  return (
    <section className="full-form-container">
      <div className="container" id="form-container">
        <section id="form-section">
          <div className="text-center">
            <h1>Contact Us</h1>
          </div>
          <div className="content">
            <div className="col-1">
              <div className="address-line">
                {/* <img alt="location" src="image/marker.png" className="icon" /> */}
                <ion-icon name="location-outline"></ion-icon>
                <div className="contact-info">
                  <div className="contact-info-title">Address</div>
                  <div>
                    <a
                      href="https://www.google.com/maps/place/Walton,+Lahore,+Punjab,+Pakistan/@31.4781049,74.3362052,13z/data=!3m1!4b1!4m6!3m5!1s0x391906098d9f3817:0x8c59bd56739e80cf!8m2!3d31.4690717!4d74.3939339!16s%2Fm%2F0_yfv_1?entry=ttu"
                      className="mailto"
                    >
                      Walton,Lhr PK
                    </a>
                  </div>
                </div>
              </div>
              <div className="address-line">
                {/* <img alt="location" src="image/phone.png" className="icon" /> */}
                <ion-icon name="call-outline"></ion-icon>
                <div className="contact-info">
                  <div className="contact-info-title">Phone</div>
                  <div>
                    <a href="tel:+923218517228" className="mailto">
                      +92-321-8517228
                    </a>
                  </div>
                </div>
              </div>
              <div className="address-line">
                {/* <img alt="location" src="image/mail.png" className="icon" /> */}
                <ion-icon name="mail-outline"></ion-icon>
                <div className="contact-info">
                  <div className="contact-info-title">Email</div>
                  <div>
                    <a href="mailto:your@email.com" className="mailto">
                      info@hackvenom.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="address-line">
                {/* <img alt="location" src="image/mail.png" className="icon" /> */}
                <ion-icon name="logo-whatsapp"></ion-icon>
                <div className="contact-info">
                  <div className="contact-info-title">whatsapp</div>
                  <div className="whtsap">
                    <a href="https://wa.me/+923218517228" target="_blank">
                      +92-321-8517228
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2">
              <form>
                <div className="form-container">
                  <h2>FILL UP THE FORM</h2>
                  <div className="form-row">
                    <label>Full Name</label>
                    <div>
                      <input type="text" className="form-field" />
                    </div>
                  </div>
                  <div className="form-row">
                    <label>Email</label>
                    <div>
                      <input type="text" className="form-field" />
                    </div>
                  </div>
                  <div className="form-row">
                    <label>Type your message...</label>
                    <div>
                      <input type="text" className="form-field" />
                    </div>
                  </div>
                  <input type="button" className="send-btn" value="Send" />
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
