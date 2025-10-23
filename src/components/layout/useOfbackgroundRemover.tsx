import React from 'react'
import BackgroundRemoverImage from '../../assets/Before&AfterConvertImage.png'
const UseOfBackgroundRemover = () => {
    return (
        <div className="backgroundRemoverSection border-2 p-4">
            <div className="backgroundremoverInnerRowContainer">
                <h2 className="text-3xl text-center uppercase">Use of Background Remover</h2>
                <p className="text-md text-center">
                    The Background Remover tool is designed to help users easily remove backgrounds from images, making them more versatile for various applications. Here are some common uses of the Background Remover:
                </p>
                <div className="backgroundremoverGridContainer w-full flex flex-col border-2 p-4 md:flex-row lg:flex-row xl:flex-row">
                    <div className="colContainer border-2 w-full md:w-1/2 lg:w-1/2 border-grey-300">
                        <img className="w-full" src={BackgroundRemoverImage} alt="" />
                    </div>
                    <div className="colContainer border-2 w-full md:w-1/2 lg:w-1/2 border-grey-300 p-1">
                        <div className="useOfBackgroundRemoverTitle mb-4">
                            <h3 className="text-center font-medium">How to Use the Background Remover</h3>
                        </div>
                        <div className="stepsToRemoveBackground">
                            <ul>
                                <li>Click on the “Upload” button or drag & drop your image into the upload box.</li>
                                <li>The system will automatically detect and
                                    remove the background.</li>
                                <li>A preview of your image with the background removed will be shown.</li>
                                <li>Click on the Download button to save
                                    your image (PNG/JPG with transparent or
                                    white background).</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UseOfBackgroundRemover