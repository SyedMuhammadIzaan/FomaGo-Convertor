import BackgroundRemoverImage from '../../assets/Before&AfterConvertImage.png'
import ButtonComp from '../Button'
const UseOfBackgroundRemover = () => {
    return (
        <div className="backgroundRemoverSection mt-4.5 p-4">
            <div className="backgroundremoverInnerRowContainer">
                <h2 className="text-3xl text-center uppercase">Use of Background Remover</h2>
                <p className="text-md text-center border-2">
                    The Background Remover tool is designed to help users easily remove backgrounds from images, making them more versatile for various applications. Here are some common uses of the Background Remover:
                </p>
                <div className="backgroundremoverGridContainer mt-3 w-full flex flex-col p-4 md:flex-row lg:flex-row xl:flex-row">
                    <div className="colContainer w-full md:w-1/2 lg:w-1/2">
                        <img className="w-full h-full" src={BackgroundRemoverImage} alt="" />
                    </div>
                    <div className="colContainer w-full md:w-1/2 lg:w-1/2">
                        <div className="useOfBackgroundRemoverTitle mb-4">
                            <h3 className="text-xl md:text-base text-center font-medium">How to Use the Background Remover</h3>
                        </div>
                        <div className="stepsToRemoveBackground p-3 lg:p-4">
                            <ul className="list-disc list-inside space-y-2.5 mb-2 md:space-y-2 md:text-sm lg:space-y-2 lg:text-base">
                                <li>Click on the “Upload” button or drag & drop your image into the upload box.</li>
                                <li>The system will automatically detect and
                                    remove the background.</li>
                                <li>Once uploaded, the system will automatically analyze your image using advanced AI to detect and remove the background instantly.</li>
                                <li>After processing, the background will be removed automatically, and your image will be ready for download.</li>
                                <li>Click the “Download” button to save your new image. You can choose to download it as a transparent PNG or a JPG with a solid white background.</li>
                            </ul>
                        </div>
                        <div className="tryBgRemoverButton p-3 lg:p-3">
                            <ButtonComp title="Try Bg Remover" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UseOfBackgroundRemover