// import React from 'react'
import { Button, Upload, type UploadFile } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
const Home = () => {

  const fileList: UploadFile[] = []

  return (
    <div className="convert-container border-2">
      <div className="col-container border-2 p-1.5 flex flex-col justify-center items-center">
        <div className="main-heading-wrapper border-2 w-1/3 border-purple-400">
          <h3 className="text-center text-4xl ">Convert,Edit & Share Documents in Seconds</h3>
        </div>
        <div className="short-desc border-2 border-amber-300 mt-1">
          <p className="text-center">Upload files, convert formats, and collaborate</p>
        </div>
        <div className="file-upload-container border-2 w-1/3 flex justify-center">

          {/* <Dragger {...props} >
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibited from uploading company data or other
              banned files.
            </p>
          </Dragger> */}

          <Upload
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            listType="picture"
            defaultFileList={fileList}
          >
            <Button type="primary" icon={<UploadOutlined />}>
              Upload
            </Button>
          </Upload>
        </div>
      </div>
    </div>
  )
}

export default Home