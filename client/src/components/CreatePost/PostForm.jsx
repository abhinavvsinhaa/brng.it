import {
    Input,
    DatePicker,
    Form,
    Select,
    Button  
} from 'antd';
import { TimePicker } from 'antd';
import moment from 'moment';
import { useState } from 'react';


const { TextArea } = Input;
const { Option } = Select;
 
const format = 'HH:mm';
  
  const PostForm = () => {
    const [componentSize, setComponentSize] = useState('default');
  
    const onFormLayoutChange = ({ size }) => {
      setComponentSize(size);
    };
  
    return (
      <Form
        labelCol={{
          span: 4,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item rules={[{ required: true }]}>
            <Select
            placeholder="Select platform"
            allowClear
            >
                <Option value="facebook">Facebook</Option>
                <Option value="instagram">Instagram</Option>
                <Option value="twitter">Twitter</Option>
                <Option value="twitter">LinkedIn</Option>
                <Option value="all">All</Option>
            </Select>
        </Form.Item>
        <Form.Item label="">
          <TextArea rows={4} placeholder="What would you like to share?"/>
        </Form.Item>
        <Form.Item>
          <DatePicker />
        </Form.Item>
        <Form.Item>
            <TimePicker format={format} minuteStep={5}/>
        </Form.Item>
        <Form.Item>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form.Item>
      </Form>
    );
  };
  
  export default PostForm;