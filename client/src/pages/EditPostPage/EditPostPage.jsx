import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import CloudinaryUploadWidget from "../../components/uploadWidget/UploadWidget";
import apiRequest from "../../lib/apiRequest";
import { useNavigate, useParams } from "react-router-dom";
import "./EditPostPage.scss"; // Same SCSS rules as NewPostPage.scss

function EditPostPage({ isEdit }) {
  const [value, setValue] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (isEdit && id) {
      apiRequest.get(`/posts/${id}`).then((res) => {
        const post = res.data;
        setFormData({
          title: post.title,
          price: post.price,
          address: post.address,
          city: post.city,
          bedroom: post.bedroom,
          bathroom: post.bathroom,
          type: post.type,
          property: post.property,
          latitude: post.latitude,
          longitude: post.longitude,
          utilities: post.postDetail.utilities,
          pet: post.postDetail.pet,
          income: post.postDetail.income,
          size: post.postDetail.size,
          school: post.postDetail.school,
          bus: post.postDetail.bus,
          restaurant: post.postDetail.restaurant
        });
        setValue(post.postDetail.desc);
        setImages(post.images);
        //  setImages(post.images.map(url => ({ url, public_id: extractPublicId(url) })));
      });
    }
  }, [isEdit, id]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };


  const handleRemoveImage = async (index, img) => {
    try {
      if (img.public_id) {
        await apiRequest.delete(`/images/${img.public_id}`);
      }
      setImages(prev => prev.filter((_, i) => i !== index));
    } catch (err) {
      console.error("Failed to delete image from Cloudinary", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        postData: {
          ...formData,
          price: parseInt(formData.price),
          bedroom: parseInt(formData.bedroom),
          bathroom: parseInt(formData.bathroom),
          images
        },
        postDetail: {
          desc: value,
          utilities: formData.utilities,
          pet: formData.pet,
          income: formData.income,
          size: parseInt(formData.size),
          school: parseInt(formData.school),
          bus: parseInt(formData.bus),
          restaurant: parseInt(formData.restaurant)
        }
      };

      if (isEdit) {
        await apiRequest.put(`/posts/${id}`, payload);
        navigate(`/` + id);
      } else {
        const res = await apiRequest.post("/posts", payload);
        navigate("/" + res.data.id);
      }
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    }
  };

  return (
    <div className="newPostPage">
      <div className="formContainer">
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <div className="item">
              <label htmlFor="title">Title</label>
              <input id="title" name="title" value={formData.title || ""} onChange={handleChange} />
            </div>
            <div className="item">
              <label htmlFor="price">Price</label>
              <input id="price" name="price" type="number" value={formData.price || ""} onChange={handleChange} />
            </div>
            <div className="item">
              <label htmlFor="address">Address</label>
              <input id="address" name="address" value={formData.address || ""} onChange={handleChange} />
            </div>
            <div className="item description">
              <ReactQuill theme="snow" value={value} onChange={setValue} />
              <label>Description</label>
            </div>
            <div className="item">
              <label htmlFor="city">City</label>
              <input id="city" name="city" value={formData.city || ""} onChange={handleChange} />
            </div>
            <div className="item">
              <label htmlFor="bedroom">Bedroom</label>
              <input id="bedroom" name="bedroom" type="number" value={formData.bedroom || ""} onChange={handleChange} />
            </div>
            <div className="item">
              <label htmlFor="bathroom">Bathroom</label>
              <input id="bathroom" name="bathroom" type="number" value={formData.bathroom || ""} onChange={handleChange} />
            </div>
            <div className="item">
              <label htmlFor="latitude">Latitude</label>
              <input id="latitude" name="latitude" value={formData.latitude || ""} onChange={handleChange} />
            </div>
            <div className="item">
              <label htmlFor="longitude">Longitude</label>
              <input id="longitude" name="longitude" value={formData.longitude || ""} onChange={handleChange} />
            </div>
            <div className="item">
              <label>Type</label>
              <select name="type" value={formData.type || ""} onChange={handleChange}>
                <option value="rent">Rent</option>
                <option value="buy">Buy</option>
              </select>
            </div>
            <div className="item">
              <label>Property</label>
              <select name="property" value={formData.property || ""} onChange={handleChange}>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="land">Land</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="utilities">Utilities Policy</label>
              <select name="utilities" value={formData.utilities || ""} onChange={handleChange}>
                <option value="owner">Owner is responsible</option>
                <option value="tenant">Tenant is responsible</option>
                <option value="shared">Shared</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="pet">Pet Policy</label>
              <select name="pet" value={formData.pet || ""} onChange={handleChange}>
                <option value="allowed">Allowed</option>
                <option value="not-allowed">Not Allowed</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="income">Income Policy</label>
              <input id="income" name="income" value={formData.income || ""} onChange={handleChange} />
            </div>
            <div className="item">
              <label htmlFor="size">Total Size</label>
              <input id="size" name="size" type="number" value={formData.size || ""} onChange={handleChange} />
            </div>
            <div className="item">
              <label htmlFor="school">School</label>
              <input id="school" name="school" type="number" value={formData.school || ""} onChange={handleChange} />
            </div>
            <div className="item">
              <label htmlFor="bus">Bus</label>
              <input id="bus" name="bus" type="number" value={formData.bus || ""} onChange={handleChange} />
            </div>
            <div className="item">
              <label htmlFor="restaurant">Restaurant</label>
              <input id="restaurant" name="restaurant" type="number" value={formData.restaurant || ""} onChange={handleChange} />
            </div>
            <button className="sendButton">{isEdit ? "Update Post" : "Add Post"}</button>
            {error && <span>{error}</span>}
          </form>
        </div>
      </div>

      {/* <div className="sideContainer">
        {images.map((img, index) => (
          <img key={index} src={img} alt="preview" />
        ))}
        <CloudinaryUploadWidget
          uwConfig={{
            multiple: true,
            cloudName: "lamadev",
            uploadPreset: "estate",
            folder: "posts",
          }}
          setState={setImages}
        />
      </div> */}

      <div className="sideContainer">
       {images.map((img, index) => (
  <div key={index}>
    <img src={typeof img === "string" ? img : img.url} alt="preview" />
    <button type="button" onClick={() => handleRemoveImage(index, img)}>Remove</button>
  </div>
))}
        <CloudinaryUploadWidget
          uwConfig={{
            multiple: true,
            cloudName: "lamadev",
            uploadPreset: "estate",
            folder: "posts",
          }}
          setState={setImages}
        />
      </div>
    </div>
  );
}

export default EditPostPage;
