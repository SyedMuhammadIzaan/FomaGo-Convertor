// import React from 'react'
import { Button, Select, Upload, type UploadFile } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
const { Option, OptGroup } = Select;
const Home = () => {

  const fileList: UploadFile[] = []
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="convert-container border-2 h-96 min-h-96">
      <div className="col-container h-full p-4 flex flex-col justify-center items-center gap-3.5">
        <div className="main-heading-wrapper w-2xs lg:w-1/2">
          <h3 className="text-center text-2xl md:text:4xl lg:text-4xl uppercase">Convert,Edit & Share Documents in Seconds</h3>
        </div>
        <div className="short-desc mt-0.5">
          <p className="text-center text-base lg:text-xl">Upload files, convert formats, and collaborate</p>
        </div>
        <div className="file-upload-container w-2/12 flex justify-center gap-x-2.5">

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
            className=''
          >
            <Button type="primary" icon={<UploadOutlined />}>
              Upload
            </Button>
          </Upload>
          <Select
            placeholder="Select conversion type"
            className="w-[140px] lg:w-[200px]"
            // style={{ width: 200 }}
            onChange={handleChange}
          >
            <OptGroup label="🖼️ Image Conversions">
              <Option value="png">Convert to PNG</Option>
              <Option value="jpg">Convert to JPG</Option>
              <Option value="webp">Convert to WEBP</Option>
              <Option value="pdf">Convert to PDF</Option>
            </OptGroup>

            <OptGroup label="📄 Document Conversions">
              <Option value="pdf-docx">PDF → Word (DOCX)</Option>
              <Option value="docx-pdf">Word (DOCX) → PDF</Option>
              <Option value="txt-docx">Text → Word (DOCX)</Option>
              <Option value="docx-txt">Word (DOCX) → Text</Option>
            </OptGroup>
          </Select>
        </div>
        <div className="convert-btn">
          <Button>Convert</Button>
        </div>
      </div>
    </div>
  )
}

export default Home