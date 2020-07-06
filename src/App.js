import React from 'react';
import './App.css';
import {
  Button,
  DatePicker,
  Input,
  InputNumber,
  Form,
} from "antd";
import "antd/dist/antd.dark.css";
import { EnvironmentOutlined } from '@ant-design/icons';

const onFinish = values => {
  console.log('Received values of form: ', values);
};

function App() {
  return (
    <div className="App">
    <h1 className="white">M◐◑N DAYS</h1>
    <h3 className="white" style={{marginBottom: 16}}>A lunar calendar event creator</h3>
      <Form
        wrapperCol={{ span: 8 }}
        layout="horizontal"
        onFinish={onFinish}
        initialValues={{
          recurrences: 25,
        }}
      >
        <Form.Item name="title" rules={[{ required: true, message: "Event title is required." }]}>
          <Input placeholder="Add event title" size="large" />
        </Form.Item>
        <Form.Item>
          <Input.Group compact style={{display: "flex", alignItems: "center"}}>
            <Form.Item noStyle name="date" rules={[{ required: true, message: "Date required." }]}>
              <DatePicker />
            </Form.Item>
            <div className="white" style={{ marginLeft: 8 }}>(according to the lunar calendar)</div>
          </Input.Group>
        </Form.Item>
        <Form.Item>
          <Input.Group compact style={{display: "flex", alignItems: "center"}}>
            <div className="white" style={{ marginRight: 8 }} >Annually for </div>
            <Form.Item noStyle name="recurrences" rules={[{ required: true, message: "Number of recurrences is required." }]}>
              <InputNumber min={1} max={100} style={{ marginRight: 8 }} />
            </Form.Item>
            <div className="white">years</div>
          </Input.Group>
        </Form.Item>
        <Form.Item name="location">
          <Input placeholder="Add location (optional)" prefix={<EnvironmentOutlined />} />
        </Form.Item>
        <Form.Item name="description">
          <Input.TextArea rows={4} placeholder="Add description (optional)" />
        </Form.Item>
        <Form.Item>
          <Button ghost shape="round" htmlType="submit">
            Create Event
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default App;
