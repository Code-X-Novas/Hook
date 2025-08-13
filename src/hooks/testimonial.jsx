const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
        const data = await uploadImageToCloudinary(file);
        console.log("Uploaded:", data.secure_url);
    } catch (err) {
        console.error(err);
    }
};
