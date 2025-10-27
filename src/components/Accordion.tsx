// import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../components/ui/accordion"
const AccordionComp = () => {
    return (
        <div className="w-full border-2 border-green-300 p-5">
            <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                <AccordionItem value="item-1">
                    <AccordionTrigger>What is Formago?</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        Formago is an all-in-one online document management platform that allows users to create, edit, convert, and manage various types of documents seamlessly. It offers a range of features including PDF editing, file conversion, secure sharing, and cloud storage integration to enhance productivity and streamline document workflows.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Does it remove backgrounds 100%</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        Yes, the background remover is designed to cleanly separate the subject from the background. In most cases, it achieves near 100% accuracy, especially with clear images (e.g., product photos, portraits). However, results may vary for images with very complex or overlapping backgrounds. You can also fine-tune the result by using editing tools after removal.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>What formats are supported?</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        Currently, our tool supports the most commonly used formats:
                        <ul>
                            <li><strong>Images:</strong> JPG, JPEG, PNG</li>
                            <li><strong>Documents:</strong> PDF, DOCX, XLSX, PPTX, TXT</li>
                            <li><strong>Other:</strong> CSV (convertible to Excel), etc.</li>
                        </ul>
                        We’re actively working on expanding support for additional file types to make the platform even more versatile.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>Is my data safe?</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        Absolutely ✅. All file uploads are encrypted and securely processed. Your files are stored only for the duration of the conversion or background removal process, after which they are automatically deleted from our servers. We follow strict data privacy standards to ensure your content is safe and private.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger>Is it free to use?</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        Yes, the core features are free to use with no hidden costs. You can upload files, remove backgrounds, and download results without any charge. However, for advanced features like bulk processing, higher resolution exports, or team collaboration tools, we may introduce premium plans in the future.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default AccordionComp