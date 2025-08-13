export const uploadImageToCloudinary = async (file) => {
    const url = `https://api.cloudinary.com/v1_1/<YOUR_CLOUD_NAME>/image/upload`;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "testimonials");

    const response = await fetch(url, {
        method: "POST",
        body: formData,
    });

    if (!response.ok) {
        throw new Error("Cloudinary upload failed");
    }

    return await response.json(); // contains secure_url, public_id, etc.
};
