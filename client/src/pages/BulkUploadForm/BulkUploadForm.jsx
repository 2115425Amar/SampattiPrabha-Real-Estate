import { useState } from "react";
import "./BulkUploadForm.scss";
import apiRequest from "../../lib/apiRequest";

export default function BulkUploadForm() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setStatus({ type: "error", message: "Please upload a file" });
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await apiRequest.post("/posts/bulk-upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });
      setStatus({ type: "success", message: res.data.message });
      setFile(null);
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", message: "Upload failed. Try again." });
    }
  };

  return (
    <div className="login">
      <div className="formContainer">
        <form className="bulkUploadForm" onSubmit={handleSubmit}>
          <h2>Bulk Upload Listings</h2>
          <input
            type="file"
            accept=".csv, .xlsx"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button type="submit">Upload</button>
          {status.message && (
            <p className={`statusMessage ${status.type}`}>{status.message}</p>
          )}
        </form>
      </div>
      <div className="imgContainer">
        <img src="/sp4.jpeg" alt="" />
      </div>
    </div>
  );
}
