import React, { useContext } from "react";
import { Form, Input, Button, Row, Col } from "antd";
import { LoginContext } from "../../components/userDataContext.js";
import { useHistory } from "react-router-dom";
import "../../components/Login/index.css";

function Login() {
  const history = useHistory();
  const { data, setData } = useContext(LoginContext);
  console.log(data);

  
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };
  const onFinish = (values) => {
    console.log("Success:", values);
    // console.log(values)

    setData({ ...data, username: values.username, password: values.password });
    history.push("/Information");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="home">
      <Row>
        <Col span={5} className="header">
          Tessel.io
        </Col>
      </Row>

      <Row>
        <Col span={9} className="aboutUsHeader">
          About us{" "}
        </Col>
      </Row>

      <Row>
        <Col span={12} className="aboutUs">
          Tessel Technologies is an upcoming startup in the product development
          field. We are focussed on building useful software products. The
          company marries the best of the design and technology world to make
          products come alive.
        </Col>
      </Row>

      <Row className="loginPlace" justify="center">
        <Col span={8} className="LoginCol">
        <div className="loginParent">
          <div className="parentLoginContainer">
            <Row>
              <Col span={24} className="login">
                Login
              </Col>
            </Row>
            <Row>
              <Col span={24} className="LoginContainer">
                <Form
                  // {...layout}
                  name="basic"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                >
                  <Form.Item
                    
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input placeholder="Username" className="inputUsername"/>
                  </Form.Item>

                  <Form.Item
                   
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input 
                    className="inputPassword"
          type="password"
          placeholder="Password" />
                  </Form.Item>

                  <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" className="loginButton">
                      Login
                    </Button>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </div>
        </div>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
