import React from "react"
import styles from "./styles.module.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Row, Col, Divider } from "antd"
import "antd/dist/antd.css"
import LinkedIn from "./linkedin-brands.svg"
import GitHub from "./github-square-brands.svg"
var classNames = require("classnames")
const cx = classNames.bind(styles)

export default function Home() {
  const card = cx(styles.card, "h-100", "card")

  return (
    <div>
      <Row justify="center">
        <Col span={24} style={{ background: "#D7E0E0" }}>
          <Row justify="center">
            <Col span={24} style={{ background: "#4D565D" }}>
              <div className={styles.header}>CHOY DIAN CHUN</div>
            </Col>
          </Row>
          <Row justify="center">
            <Col span={16} style={{ background: "white" }}>
              <div className={styles.hello}>Hello!</div>
              <Divider>
                {/* <img
                  src="https://via.placeholder.com/300"
                  alt="display picture"
                  className={styles.dp}
                /> */}
                <img
                  src="https://i.imgur.com/NcwflBq.png"
                  alt="display picture"
                  className={styles.dp}
                />
              </Divider>
              <div className={styles.hello_text}>
                I'm Dian! A full-stack web developer based in Singapore.
              </div>
              <div style={{ textAlign: "center", marginBottom: "20px" }}>
                <a
                  href="https://www.linkedin.com/in/dian-chun-choy/"
                  target="_blank"
                >
                  <img className={styles.icon} src={LinkedIn} />
                </a>
                <a href="https://github.com/wickker" target="_blank">
                  <img className={styles.icon} src={GitHub} />
                </a>
              </div>
            </Col>
          </Row>
          <Row justify="center">
            <Col span={16} style={{ background: "white", padding: "10px" }}>
              <div className={styles.title}>Projects</div>
              <Row justify="center" gutter={[26, 26]}>
                <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                  <div className={card}>
                    <img
                      className="card-img-top"
                      src="https://i.imgur.com/h5RJg6r.jpg"
                      alt="My Classroom"
                    />
                    <div className="card-body">
                      <div className={styles.card_title}>My Classroom</div>
                      <div className={styles.card_text}>
                        A centralized system for scheduling classes in addition
                        to recording and tabulating attendance. Users are able
                        to track and collect supporting documentation in image
                        or PDF format for abseneces and tardiness. Class
                        sessions may also be created and viewed via a
                        custom-built monthly scheduler.
                      </div>
                      <div>
                        <a
                          href="https://frozen-tor-14558.herokuapp.com/"
                          target="_blank"
                          className={styles.button}
                        >
                          See Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                  <div className={card}>
                    <img
                      className="card-img-top"
                      src="https://i.imgur.com/3SpxjMZ.jpg"
                      alt="PawDates"
                    />
                    <div className="card-body">
                      <div className={styles.card_title}>PawDates</div>
                      <div className={styles.card_text_caption}>
                        A collaborative effort with two other team mates.
                      </div>
                      <div className={styles.card_text}>
                        A social networking platform for pet owners to organize
                        events and meet-ups with other pet owners and their
                        pets.
                      </div>

                      <div>
                        <a
                          href="http://pet-playdates.herokuapp.com/"
                          target="_blank"
                          className={styles.button}
                        >
                          See Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                  <div className={card}>
                    <img
                      className="card-img-top"
                      src="https://i.imgur.com/WZ8Jk5n.jpg"
                      alt="SportDB"
                    />
                    <div className="card-body">
                      <div className={styles.card_title}>SportDB</div>
                      <div className={styles.card_text}>
                        A CRM for governing sport organizations to track
                        community growth and connect with their stakeholders.
                        Users are able to register as paid Athlete or Club
                        members in exchange for being part of community outreach
                        events organised by the governing body. Payment by card
                        is handled by Stripe API. Other features include CSV
                        file downloads for administrators to collate contact
                        information with ease and Google Maps API for members of
                        the public to locate prospective clubs.
                      </div>
                      <div>
                        <a
                          href="https://gentle-castle-21661.herokuapp.com/"
                          target="_blank"
                          className={styles.button}
                        >
                          See Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                  <div className={card}>
                    <img
                      className="card-img-top"
                      src="https://i.imgur.com/aDUAymp.jpg"
                      alt="PawDates"
                    />
                    <div className="card-body">
                      <div className={styles.card_title}>
                        Conway's Game of Life
                      </div>
                      <div className={styles.card_text}>
                        A single-player game with a puzzle and sandbox mode
                        modeled after Conway's Game of Life. Players are able to
                        save games and adjust the speed of gameplay animation.
                      </div>
                      <div>
                        <a
                          href="https://wickker.github.io/project1-game/"
                          target="_blank"
                          className={styles.button}
                        >
                          See Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row justify="center">
            <Col span={16} style={{ background: "white", padding: "10px" }}>
              <div className={styles.title2}>About</div>
              <Row justify="center">
                <Col
                  span={20}
                  style={{ background: "#EBEBEB", padding: "10px", marginBottom: "20px" }}
                >
                  <div className={styles.abt_text}>
                    <div>
                      Hello, I'm Dian, a full-stack web developer based in
                      Singapore.
                    </div>
                    <br />
                    <div>
                      Prior to entering the realm that is software engineering,
                      I worked in data analytics and sport management.
                    </div>
                    <br />
                    <div>
                      I enjoy building programmes that stream-line workflow and
                      increase productivity. My current portfolio is indeed very
                      much inspired by the issues I encountered in my previous line
                      of work.
                    </div>
                    <br />
                    <div>
                      <b>Software Engineering Skillsets:</b>
                    </div>
                    <div style={{ color: "#011441" }}>
                      Ant Design | Bootstrap | C | CSS | Express.js | Gatsby.js
                      | Heroku | HTML | JavaScript | Material-UI | MVC | Node.js
                      | PostgreSQL | React.js | React Router | Ruby | Ruby on
                      Rails
                    </div>
                    <br />
                    <div>
                      <b>Management / Data Skillsets:</b>
                    </div>
                    <div style={{ color: "#011441" }}>
                      Curriculum Development | Data Analytics | Events
                      Management | Performance Management | Project Management
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row justify="center">
            <Col
              span={24}
              style={{
                background: "#4D565D",
                postition: "relative",
                bottom: "0",
                left: "0",
              }}
            >
              <div className={styles.footer}>©2020, Built with Gatsby.js</div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
