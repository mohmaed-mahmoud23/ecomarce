import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css'; // استيراد CSS الأساسي
import 'swiper/css/free-mode'; // استيراد CSS الخاص بـ FreeMode
import 'swiper/css/pagination'; // استيراد CSS الخاص بـ Pagination
import axios from 'axios';
import Footer from './Footer';

const Home = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("data.json")
      .then((res) => {
        setProjects(res.data.projects);
        console.log(res.data.projects); // تحقق من البيانات
      })
      .catch((error) => {
        console.error("Error fetching projects data: ", error);
      });
  }, []);

  return (
    <div id='latest'>
      <section className='bannar wow animate__fadeIn' data-wow-duration="2s">
        <Container>
          <Row>
            <Col md={7} sm={12} className="bannartext wow animate__slideInLeft" data-wow-duration="2s" data-wow-delay="0.1s">
              <p>WEB DESIGN <span>//</span> WEBFLOW DEVELOPMENT <span>//</span> SEO</p>
              <h1>MOHAMED MAHMOUD.</h1>
              <h5>We build marketing websites that help you sell on autopilot.</h5>
              <HashLink to="/#contact"><button>Let's talk</button></HashLink>
            </Col>
            <Col md={5} sm={12} className="bannarimgs wow animate__slideInRight" data-wow-duration="2s" data-wow-delay="0.1s">
              <img src="images/623503637e979197919c6c03_Topology-1 (1).svg" alt="" className="waves" />
              <img src="images/623a183aa76fb537cbc5dc0e_Group 8-p-500.png" alt="" className="laptop" />
              <div className="imgbox gimg">
                <img src="images/62324067d42bfc263ee547ff_image 4 (Traced).svg" alt="" />
              </div>
              <div className="imgbox uimg">
                <img src="images/6232406724bd9b36622aed48_image 3 (Traced).svg" alt="" />
              </div>
              <div className="imgbox wimg">
                <img src="images/623240674411e07510215b6f_image 2 (Traced).svg" alt="" />
              </div>
            </Col>
          </Row>
        </Container>

        <section className="homesec2">
          <Container>
            <Row>
              <Col md={6} sm={12} className="wow animate__slideInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                <div id='latest' className="secimgs">
                  <img src="images/623506fac432155edb494f48_Topology-2 (1).svg" alt="" className="waves" />
                  <img src="images/6297dd8a74746c61110b1aaa_undraw_team_collaboration_re_ow29 1 (2).svg" alt="" className="people" />
                </div>
              </Col>
              <Col md={6} sm={12} className="sec2text wow animate__slideInRight" data-wow-duration="2s" data-wow-delay="0.1s">
                <button>the dream</button>
                <p>Imagine having your sales team on the job 24/7, interacting with an endless stream of ready-to-buy visitors.</p>
              </Col>
            </Row>
          </Container>
        </section>

      </section>

      <section className="homesec3" id="latest">
        <div className="sectext wow animate__fadeIn" data-wow-duration="2s" data-wow-delay="0.1s">
          <h3>Latest builds.</h3>
          <Link to="/Projects">View Projects</Link>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper wow animate__fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s"
        >
          {projects.slice(0, 5).map((project) => (
            <SwiperSlide key={project.id}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.photo} alt={project.title} />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

      </section>

      <section className="homesec4" id="process">
        <h3>How it's done.</h3>
        <img src="images/623506fac432155edb494f48_Topology-2%20(1).svg" alt="" className="waves" />
        <div className="divLeft wow animate__fadeInUp" data-wow-duration="2s" data-wow-delay="0.1s">
          <img src="images/6232406724bd9b36622aed48_image 3 (Traced).svg" alt="" />
          <div>
            <h5>UX/UI Design</h5>
            <p>Where concepts turn into a strategic user-experience.</p>
          </div>
        </div>
        <div className="divRight wow animate__fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
          <img src="images/623240674411e07510215b6f_image 2 (Traced).svg" alt="" />
          <div>
            <h5>Webflow Development</h5>
            <p>Where design turns into code.</p>
          </div>
        </div>
        <div className="divLeft wow animate__fadeInUp" data-wow-duration="2s" data-wow-delay="1s">
          <img src="images/6296648937731de4e98d9a5a_zapier-seeklogo.com 2.svg" alt="" />
          <div>
            <h5>System Automation</h5>
            <p>Where busywork gets delegated.</p>
          </div>
        </div>
        <div className="divRight wow animate__fadeInUp" data-wow-duration="2s" data-wow-delay="1.5s">
          <img src="images/62324067d42bfc263ee547ff_image 4 (Traced).svg" alt="" />
          <div>
            <h5>SEO</h5>
            <p>Where customers come flooding in.</p>
          </div>
        </div>
      </section>

      <section className="homesec5" id="service">
        <h2 className="wow animate__fadeIn" data-wow-duration="2s" data-wow-delay="0.1s">Why Webflow.</h2>
        <img src="images/6179978654e4d77bdbc81721/623506fac432155edb494f48_Topology-2%20(1).svg" alt="" />
        <Container>
          <Row>
            <Col md={4} sm={12} className="divRight wow animate__bounceInUp" data-wow-duration="2s" data-wow-delay="0.1s">
              <div>
                <h5>REASON 1</h5>
                <h3>Next-Level Storytelling</h3>
                <img src="images/62966934fc028e3715017571_undraw_mobile_development_re_wwsn 1.svg" alt="" />
                <p>Unleash the best visuals and experiences that modern web design has to offer. Webflow turns your wildest of ideas into strategic customer-experiences.</p>
              </div>
            </Col>
            <Col md={4} sm={12}>
              <div className="divRight wow animate__bounceInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                <h5>REASON 2</h5>
                <h3>Unbelievable Performance</h3>
                <img src="images/62966cbb57bfa16e79fe8406_undraw_data_re_80ws 1 (1).svg" alt="" />
                <p>Hosted on an ultra-fast global CDN, Webflow goes full steam ahead with load speed, uptime, asset optimization, and SEO. All without ever needing to install a patch or upload a server configuration.</p>
              </div>
            </Col>
            <Col md={4} sm={12}>
              <div className="divRight wow animate__bounceInUp" data-wow-duration="2s" data-wow-delay="0.5s">
                <h5>REASON 3</h5>
                <h3>Developer-Free Tweaks</h3>
                <img src="images/62966cd0f71f4f702ab6febd_undraw_asset_selection_re_k5fj 1.svg" alt="" />
                <p>Webflow’s ‘Editor Mode’ allows any team member to update content as they please without wreaking havoc or paying people like us to fix it.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Home;
