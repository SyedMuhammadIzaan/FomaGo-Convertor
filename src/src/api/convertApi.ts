import axios from "axios";

export const convertFile = async (file: File, targetFormat: string) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("target_format", targetFormat);

  try {
    const response = await axios.post("https://docuflex-backend-production.up.railway.app/convert/", formData, {
      responseType: "blob", // 👈 this is essential
    });
    // console.log("Req Header",response.headers["content-disposition"])
    // 👇 This part handles file download
    const blob = new Blob([response.data], { type: response.data.type });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;

    // Get filename from response headers if available
    const disposition = response.headers["content-disposition"];
    let filename = "converted_file";
    if (disposition && disposition.includes("filename=")) {
      filename = disposition.split("filename=")[1].replace(/"/g, "");
    }
    // console.log("extracted filename", filename);

    a.download = filename; // e.g., myfile.pdf or image.png
    document.body.appendChild(a);
    a.click();

    // Cleanup
    a.remove();
    window.URL.revokeObjectURL(url);

    console.log("✅ File downloaded:", filename);
  } catch (error) {
    console.error("❌ Conversion failed:", error);
  }
};
