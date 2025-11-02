import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ManageBlogs = () => {
  const navigate = useNavigate();

  const initialState = {
    image: '',
    title: '',
    date: '',
    readTime: '',
    festival: '',
    shortDesc: '',
    longDesc: ''
  };
  const [imageFile, setImageFile] = useState(null);
  const [formValue, setFormValue] = useState(initialState);
  const { image, title, date, readTime, shortDesc, longDesc } = formValue;

  const [fileName, setFileName] = useState('');

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const onUploadImage = (file) => {
    setFileName(file.name);
    setImageFile(file);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "photosup");

    axios.post("https://api.cloudinary.com/v1_1/duuvjwag2/image/upload", formData)
      .then((resp) => {
        toast.info("Image Uploaded Successfully");
        setFormValue({ ...formValue, image: resp.data.url });
      })
      .catch((err) => {
        toast.error("Image upload failed");
        console.error(err);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title && longDesc && shortDesc && image && date && readTime) {
      try {
        const response = await axios.post("http://localhost:5000/blogs", formValue);
        if (response.status === 201) {
          toast.success("Blog created successfully");
          setFormValue(initialState);
          setFileName('');
          navigate("/Home");
        } else {
          toast.error("Something went wrong");
        }
      } catch (err) {
        toast.error("Error creating blog");
        console.error(err);
      }
    } else {
      toast.warn("Please fill all fields");
    }
  };

  return (
    <div className="w-full h-[100vh] p-6 flex flex-col items-center justify-center">
      <h1 className="w-full h-auto text-3xl font-bold bg-gradient-to-br from-orange-400 to-yellow-300 bg-clip-text text-transparent text-center p-2">
        Create Blog Posts
      </h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 bg-white p-4 shadow-lg rounded-lg">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={onInputChange}
          className="border p-2 rounded col-span-2"
          required
        />

        <div className="col-span-2">
          <label className="block mb-1">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => onUploadImage(e.target.files[0])}
            className="border p-2 rounded w-full"
          />
          {fileName && <p className="text-sm text-gray-600 mt-1">Selected file: {fileName}</p>}
        </div>

        <input
          type="text"
          name="date"
          placeholder="Date"
          value={date}
          onChange={onInputChange}
          className="border p-2 rounded w-full"
          required
        />
        <input
          type="text"
          name="readTime"
          placeholder="Read Time"
          value={readTime}
          onChange={onInputChange}
          className="border p-2 rounded w-full"
          required
        />
        <textarea
          name="shortDesc"
          placeholder="Short Description"
          value={shortDesc}
          onChange={onInputChange}
          className="border p-2 rounded col-span-2 h-20"
          required
        />
        <textarea
          name="longDesc"
          placeholder="Long Description"
          value={longDesc}
          onChange={onInputChange}
          className="border p-2 rounded col-span-2 h-32"
          required
        />
        <button
          type="submit"
          className="col-span-2 text-black bg-gradient-to-br from-orange-400 to-yellow-300 p-2.5 rounded hover:opacity-90 transition font-semibold"
        >
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default ManageBlogs;

