import React, { useState } from 'react';
import './App.css';
import {
  Button,
  Input,
  InputNumber,
  Form,
  Row,
  Col,
  Modal,
  Result,
  Drawer,
  Select,
} from "antd";
import "antd/dist/antd.dark.css";
import {
  QuestionOutlined,
  SmileOutlined,
  FrownOutlined,
} from '@ant-design/icons';
import moment from 'moment';
import 'moment-lunar';

const ics = require('ics');
const FileSaver = require('file-saver');
const slugify = require('slugify');
const {Option} = Select;

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

const makeEventList = (year, month, day, recurrences, title, description) => {
  const events = [];

  for (var i = 0; i < recurrences; i++) {
    const solar = moment()
      .year(year + i)
      .month(month)
      .date(day)
      .solar();

    const event = {
      title: title,
      start: [solar.year(), solar.month() + 1, solar.date()],
      duration: {days: 1},
      description: description,
    };

    events.push(event);
  }

  return events;
}

function App() {
  const [modal, setModal] = useState(null);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [confirmMessage, setConfirmMessage] = useState(null);
  const [form] = Form.useForm();

  const onDateChange = () => {
    const fields = form.getFieldsValue();
    const year = fields["year"];
    const month = fields["month"];
    const day = fields["day"];
    const recurrences = fields["recurrences"];

    if (
      fields && year && month != null && day && recurrences &&
      year > 1890 && year < 2061 && recurrences > 0 && recurrences < 51
    ){
      const events = makeEventList(year, month, day, recurrences, null, null);
      setConfirmMessage(
        `Download ${events.length} ${events.length === 1 ? "event" : "events"}: ${formatDateList(events)}.`
      );
    } else {
      setConfirmMessage(null);
    }
  }

  const onFinish = values => {
    const {month, day, year, title, recurrences, description} = values;
    const events = makeEventList(year, month, day, recurrences, title, description);

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
          <p>Import this file to your favourite calendar app! Drag and drop usually works.</p>
          <p>
            <a
              href="https://calendar.google.com/calendar/r/settings/export"
              target="_blank"
              rel="noopener noreferrer"
            >
            Import to Google Calendar
            </a>
          </p>
          <p>Note: If you want to delete these events, you will have to delete each one manually.</p>
        </div>}
    />);
  };

  const days = [];
  for (var i = 1; i <= 30; i++) {
      days.push(i);
  }

  return (
    <div className="App">
      <h1 className="white">M◐◑N DAYS</h1>
      <Row gutter={8} style={{marginBottom: 8, alignItems: "center"}}>
        <Col xs={22} sm={14} md={14} lg={12} xl={12}>
          <h3 className="white" style={{marginBottom: 16}}>
            Create lunar calendar events. Made by <a href="https://ericbai.co/" target="_blank" rel="noopener noreferrer">Eric Bai</a>.
          </h3>
        </Col>
        <Col span={2}>
          <Button
            ghost
            size="small"
            shape="circle"
            icon={<QuestionOutlined />}
            onClick={() => setDrawerVisible(true)}
          />
        </Col>
      </Row>
      <Form
        form={form}
        wrapperCol={{ span: 12 }}
        layout="horizontal"
        onFinish={onFinish}
        initialValues={{
          recurrences: 15,
          year: moment().year(),
        }}
      >
        <Form.Item name="title" rules={[{ required: true, message: "Event title is required." }]}>
          <Input placeholder="Add event title" size="large" />
        </Form.Item>
        <Form.Item>
          <Input.Group compact style={{display: "flex", alignItems: "center"}}>
            <div className="white" style={{ marginRight: 8 }} >Lunar date:</div>
            <Form.Item noStyle name="month" rules={[{ required: true, message: "Month is required." }]}>
              <Select
                placeholder="Select month"
                onChange={onDateChange}
              >
                <Option value={0}>1st month</Option>
                <Option value={1}>2nd month</Option>
                <Option value={2}>3rd month</Option>
                {[3, 4, 5, 6, 7, 8, 9, 10, 11].map(i => <Option value={i}>{`${i+1}th month`}</Option>)}
              </Select>
            </Form.Item>
            <Form.Item noStyle name="day" rules={[{ required: true, message: "Day is required." }]}>
              <Select
                placeholder="Select day"
                onChange={onDateChange}
              >
                {days.map(i => <Option value={i}>{i}</Option>)}
              </Select>
            </Form.Item>
          </Input.Group>
        </Form.Item>
        <Form.Item>
          <Input.Group compact style={{display: "flex", alignItems: "center"}}>
            <div className="white" style={{ marginRight: 8 }} >Annually for </div>
            <Form.Item
              noStyle
              name="recurrences"
              rules={[{ required: true, message: "Number of recurrences is required." }]}
            >
              <InputNumber onChange={onDateChange} min={1} max={50} style={{ marginRight: 8 }} />
            </Form.Item>
            <div className="white" style={{ marginRight: 8 }}>years starting in</div>
            <Form.Item noStyle name="year" rules={[{ required: true, message: "Year is required." }]}>
              <InputNumber onChange={onDateChange} min={1890} max={2060} />
            </Form.Item>
          </Input.Group>
        </Form.Item>
        <Form.Item name="description">
          <Input.TextArea rows={4} placeholder="Add description (optional)" />
        </Form.Item>
        <Form.Item>
          <Button ghost shape="round" htmlType="submit">
            Download Events
          </Button>
        </Form.Item>
        {confirmMessage != null && <p>{confirmMessage}</p>}
      </Form>

      <Modal
          visible={modal != null}
          onCancel={() => setModal(null)}
          footer={null}
        >
        {modal}
        </Modal>

      <Drawer
        title="ABOUT M◐◑N DAYS"
        placement="right"
        closable={false}
        onClose={() => setDrawerVisible(false)}
        visible={drawerVisible}
      >
        <p>
          My dad celebrates his birthday according to the <a href="https://en.wikipedia.org/wiki/Chinese_calendar" target="_blank" rel="noopener noreferrer">Chinese calendar</a>.
          Sadly, calendar apps do not let you create a recurring event based on these traditional calendars.
          I made M◐◑N DAYS so that anyone can create annual lunar calendar events.
        </p>
        <p>
          The most commonly used calendar in the world is the Gregorian calendar.
          Some traditional holidays, such as Chinese New Year, are based on a lunisolar calendar, often colloquially called the lunar calendar.
        </p>
      </Drawer>
    </div>
  );
}

export default App;
