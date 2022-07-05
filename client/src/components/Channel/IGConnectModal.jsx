import { Button, Modal } from 'antd';
import { useState } from 'react';

export default function IGConnectModal({ visible }) {
    const [loading, setLoading] = useState(false);
    // const [visible, setVisible] = useState(false);

    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            visible=false;
        }, 3000);
    };

    const handleCancel = () => {
        visible = false;
    };

    return (
    <>
        <Modal
        visible={visible}
        title="Title"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
            <Button key="back" onClick={handleCancel}>
            Return
            </Button>,
            <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
            Submit
            </Button>,
            <Button
            key="link"
            href="https://google.com"
            type="primary"
            loading={loading}
            onClick={handleOk}
            >
            Search on Google
            </Button>,
        ]}
        >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>
    </>
    );
}