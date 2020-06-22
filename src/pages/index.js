import React from "react"
import styles from "./styles.module.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Row, Col, Divider } from "antd"
import "antd/dist/antd.css"

export default function Home() {
  return (
    <div>
      <Row justify="center">
        <Col span={24}>
          <Row justify="center">
            <Col
              span={16}
              style={{ background: "#4D565D" }}
            >
              <div className={styles.header}>CHOY DIAN CHUN</div>
            </Col>
          </Row>
          <Row justify="center">
            <Col span={16}>
              <div className={styles.hello}>Hello!</div>
              <Divider>
                <img
                  src="https://i.imgur.com/NcwflBq.png"
                  alt="display picture"
                  className={styles.dp}
                />
              </Divider>
              <div className={styles.hello_text}>
                I'm Dian! A full-stack web developer based in Singapore.
              </div>
            </Col>
          </Row>
          <Row justify="center">
            <Col span={16} style={{ background: "#D7E0E0", padding: "10px" }}>
              <div className={styles.title}>Projects</div>
              <div>

              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
