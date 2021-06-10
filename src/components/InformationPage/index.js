import React, { useContext } from "react";
import { Form, Input, Button, Row, Col } from "antd";
import { LoginContext } from "../../components/userDataContext.js";
import { useHistory } from "react-router-dom";
import "../../components/InformationPage/index.css";

function InformationPage() {
  const history = useHistory();
  const { data, setData } = useContext(LoginContext);
  console.log(data);

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };
  const onFinish = (values) => {
    setData({
      ...data,
      Name: values.Name,
      Address: values.Address,
      PhoneNumber: values.PhoneNumber,
      Nationality: values.Nationality,
    });
    history.push("/Welcome");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="Home">
      <Row>
        <Col span={24} className="informationHeader">
          Hello {data.username}, Please fill few information about yourself
        </Col>
      </Row>
      <Row>
        <Col className="informationContainer">
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name="Name"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input placeholder="Fullname" className="Name" />
            </Form.Item>

            <Form.Item
              name="Address"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input placeholder="Address" className="inputAddress" />
            </Form.Item>

            <Form.Item
              name="PhoneNumber"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input placeholder="Phone No." className="phoneNumber" />
            </Form.Item>

            <Form.Item
              name="Nationality"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input placeholder="Nationality" />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit" className="infoButton">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default InformationPage;
