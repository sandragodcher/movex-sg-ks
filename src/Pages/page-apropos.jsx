import Footer from '../Components/Footer';
import Menu from '../Components/Menu';

function PageApropos() {
  return (
    <>
      <Menu />
      <div className="page-apropos desktop">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-6 dark-green">
              <h2>OUR TEAM</h2>
            </div>
            <div className="col-6 col-lg-3 blue">
              <div className="content-team">
                <h5 className="hover">Kathy</h5>
                <h6 className="hover">Web Developer</h6>
                <h5>
                  Web<br></br>Developer
                </h5>
              </div>
            </div>
            <div className="col-6 col-lg-3 tablet-1">
              <div className="content-team">
                <h5 className="hover">Kathy</h5>
                <h6 className="hover">Web Developer</h6>
                <h5>
                  Web<br></br>Developer
                </h5>
              </div>
            </div>
            <div className="col-6 col-lg-3 pink">
              <div className="content-team">
                <h5 className="hover">Sandra</h5>
                <h6 className="hover">Web Designer</h6>
                <h5>
                  Web<br></br>Designer
                </h5>
              </div>
            </div>
            <div className="col-6 col-lg-3 tablet-2">
              <div className="content-team">
                <h5 className="hover">Sandra</h5>
                <h6 className="hover">Web Designer</h6>
                <h5>
                  Web<br></br>Designer
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="content">
              <h2 className="darkGreen-title">WHO WE ARE?</h2>
              <p className="p">
                <strong>Our Web Developer</strong>
              </p>
              <p>
                Our web developer is the chief architect of your website. She
                excels in programming custom solutions, ensuring a seamless and
                flawless user experience. With in-depth expertise in the latest
                web technologies, she transforms your ideas into digital
                reality. Every line of code is meticulously crafted to ensure
                top-notch performance and security.
              </p>
              <p className="p">
                <strong>Our Web Designer</strong>
              </p>
              <p>
                Design is at the core of our approach, and our web designer is
                the artist behind the stunning appearance of your site. Creative
                and visionary, she transforms your concepts into dazzling
                designs. Every visual element is thoughtfully created to reflect
                your project's identity while providing an aesthetic and
                user-friendly experience for your visitors.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="page-apropos mobile container-fluid">
        <div className="container-mobile">
          <h2>OUR TEAM</h2>
          <div className="row container-member1">
            <div className="col-3">
              <h5>
                Web<br></br>Developer
              </h5>
            </div>
            <div className="col-9">
              <img
                src="../asset/images/staff-02.png"
                alt="image-developer"
              />
            </div>
            <p>
              Our web developer is the chief architect of your website. She
              excels in programming custom solutions, ensuring a seamless and
              flawless user experience. With in-depth expertise in the latest
              web technologies, she transforms your ideas into digital reality.
              Every line of code is meticulously crafted to ensure top-notch
              performance and security.
            </p>
          </div>
          <div className="row container-member2">
            <div className="col-9">
              <img
                src="../asset/images/staff-01.jpg"
                alt="image-designer"
              />
            </div>
            <div className="col-3">
              <h5>
                Web<br></br>Designer
              </h5>
            </div>
            <p>
              Design is at the core of our approach, and our web designer is the
              artist behind the stunning appearance of your site. Creative and
              visionary, she transforms your concepts into dazzling designs.
              Every visual element is thoughtfully created to reflect your
              project's identity while providing an aesthetic and user-friendly
              experience for your visitors.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PageApropos;
