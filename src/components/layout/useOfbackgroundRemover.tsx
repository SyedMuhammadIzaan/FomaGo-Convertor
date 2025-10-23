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
                <div className="backgroundremoverGridContainer w-full flex flex-row border-2 p-4">
                    <div className="colContainer border-2 w-1/2 border-grey-300">
                        <img className="w-full" src={BackgroundRemoverImage} alt="" />
                    </div>
                    <div className="colContainer border-2 w-1/2 border-grey-300"></div>
                </div>
            </div>
        </div>
    )
}

export default UseOfBackgroundRemover