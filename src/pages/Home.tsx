import { useState } from "react";
import { Button, Select, Upload, type UploadFile, message } from "antd";
import { DeleteOutlined, UploadOutlined } from "@ant-design/icons";
import { convertFile } from "../src/api/convertApi";
const { Option, OptGroup } = Select;

const Home = () => {
  // Step 1: Store uploaded files
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [format, setFormat] = useState<string>("");
  const [convertedFiles, setConvertedFiles] = useState<UploadFile[]>([]);
  const handleChange = (value: string) => {
    console.log(`Selected conversion type: ${value}`);
    setFormat(value);
  };

  // Step 2: Update file list when user uploads files
  const handleUploadChange = ({ fileList }: { fileList: UploadFile[] }) => {
    setFileList(fileList);
  };

  // Step 3: Handle convert button click
  const handleConvert = () => {
    if (fileList.length === 0) {
      message.warning("Please upload a file first!");
      return;
    }
    setConvertedFiles(fileList);
    convertFile(fileList[0].originFileObj as File, format).then((data)=>console.log("data",data));
    message.success("File ready for conversion!");
  };
  const handleDelete = (uid: number) => {
    const newFileList = fileList.filter((_, index) => index !== uid);
    setFileList(newFileList);

  }
  return (
    <div className="convert-container border-2 h-96 min-h-96">
      <div className="col-container h-full p-4 flex flex-col justify-center items-center gap-3.5">
        <div className="main-heading-wrapper w-2xs lg:w-1/2">
          <h3 className="text-center text-2xl md:text:4xl lg:text-4xl uppercase">
            Convert, Edit & Share Documents in Seconds
          </h3>
        </div>

        <div className="short-desc mt-0.5">
          <p className="text-center text-base lg:text-xl">
            Upload files, convert formats, and collaborate
          </p>
        </div>

        <div className="file-upload-container w-2/12 flex justify-center gap-x-2.5">
          <Upload
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            listType="picture"
            showUploadList={false}
            fileList={fileList}
            onChange={handleUploadChange}
          >
            <Button type="primary" icon={<UploadOutlined />}>
              Upload
            </Button>
          </Upload>

          <Select
            placeholder="Select conversion type"
            className="w-[140px] lg:w-[200px]"
            onChange={(value) => handleChange(value)}
          >
            <OptGroup label="🖼️ Image Conversions">
              <Option value="png">Convert to PNG</Option>
              <Option value="jpg">Convert to JPG</Option>
              <Option value="webp">Convert to WEBP</Option>
              <Option value="pdf">Convert to PDF</Option>
              <Option value="docx">Extract Image Text</Option>
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
          <Button type="primary" onClick={handleConvert}>
            Convert
          </Button>
        </div>
        <div>
          {
            fileList.length > 0 ? (
              <ul>
                {
                  fileList.map((file, index) => (
                    <span className="flex justify-between border-2 border-orange-300 w-52 p-2 mb-0.5">
                      <li key={index}>{file.name}</li>
                      <li><DeleteOutlined onClick={() => { handleDelete(index) }} /></li>
                    </span>
                  ))
                }
              </ul>
            )
              : (<p className="text-gray-500 text-sm">
                No files uploaded yet.
              </p>
              )
          }
        </div>
        {/* Step 4: Show uploaded files after convert */}
        <div className="converted-files mt-3">
          {convertedFiles.length > 0 ? (
            <ul>
              {convertedFiles.map((file) => (
                <li key={file.uid}>{file.name}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-sm">
              No files converted yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
