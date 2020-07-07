import React, { useState } from 'react';
import './App.css';
import {
  Button,
  DatePicker,
  Input,
  InputNumber,
  Form,
  Row,
  Col,
  Modal,
  Result,
  Drawer,
} from "antd";
import "antd/dist/antd.dark.css";
import {
  EnvironmentOutlined,
  QuestionOutlined,
  SmileOutlined,
  FrownOutlined,
} from '@ant-design/icons';
import moment from 'moment';
import 'moment-lunar';

const ics = require('ics');
const FileSaver = require('file-saver');
const slugify = require('slugify');

const pad = (n, width, z) => {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

const formatDateList = events => {
  if (events.length < 4) {
    return events.map(
      event => event["start"].map(num => pad(num, 2)).join("/")
    ).join(", ");
  } else {
    const shortList = [events[0], events[1], "...", events[events.length-1]];
    return shortList.map(
      event => event === "..." ? event : event["start"].map(num => pad(num, 2)).join("/")
    ).join(", ");
  }
}

function App() {
  const [modal, setModal] = useState(null);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const onFinish = values => {
    const {date, title, recurrences, location, description} = values;
    const events = [];

    for (var i = 0; i < recurrences; i++) {
      const solar = moment()
        .year(date.year() + i)
        .month(date.month())
        .date(date.date())
        .solar();

      const event = {
        title: title,
        start: [solar.year(), solar.month() + 1, solar.date()],
        duration: {days: 1},
        location: location,
        description: description,
      };

      events.push(event);
    }

    const { error, value } = ics.createEvents(events);
    if (error) {
      setModal(<Result
        icon={<FrownOutlined />}
        title="Something went wrong!"
        extra={
          <div>
            <p>Sorry! Let Eric know his app is broken!</p>
          </div>}
      />);
      return;
    }

    const blob = new Blob([value], {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(blob, `${slugify(title)}.ics`);
    setModal(<Result
      icon={<SmileOutlined />}
      title={`${title} downloaded!`}
      extra={
        <div>
          <p>{`Your calendar file contains ${events.length} ${events.length === 1 ? "event" : "events"} on ${formatDateList(events)}.`}</p>
          <p>Import this file to your favourite calendar app!</p>
          <p>Note: If you want to delete these events, you will have to delete each one manually.</p>
        </div>}
    />);
  };

  return (
    <div className="App">
      <h1 className="white">M◐◑N DAYS</h1>
      <Row gutter={8} style={{marginBottom: 8, alignItems: "center"}}>
        <Col span={22}>
          <h3 className="white" style={{marginBottom: 16}}>A lunar calendar event creator. Made by <a href="https://ericbai.co/">Eric Bai</a>.</h3>
        </Col>
        <Col span={2}>
          <Button ghost size="small" shape="circle" icon={<QuestionOutlined />} onClick={() => setDrawerVisible(true)}/>
        </Col>
      </Row>
      <Form
        wrapperCol={{ span: 12 }}
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
            <Form.Item noStyle name="date" rules={[{ required: true, message: "Date is required." }]}>
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
            Create Events
          </Button>
        </Form.Item>
      </Form>

      <Modal
          visible={modal != null}
          onCancel={() => setModal(null)}
          footer={null}
        >
        {modal}
        </Modal>

      <Drawer
        title="ABOUT M◐◑N DAYS "
        placement="right"
        closable={false}
        onClose={() => setDrawerVisible(false)}
        visible={drawerVisible}
      >
        <p>
          The most commonly used calendar in the world is the Gregorian calendar.
          Some traditional holidays, such as Chinese New Year, are based on a lunisolar calendar, often colloquially called the lunar calendar.
        </p>
        <p>
          My dad celebrates his birthday according to the Chinese calendar. Every year, I'm a bit confused about when to actually celebrate his birthday.
          I made M◐◑N DAYS so that anyone can specify a lunar calendar date and create annual calendar events for their favourite calendar app.
        </p>
      </Drawer>
    </div>
  );
}

export default App;
