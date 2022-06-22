import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getPhotosFailure,
  getPhotosRequest,
  getPhotosSuccess,
} from "store/photosSlice";
import axios from "axios";
import { API_END_POINTS } from "common/constants";
import Spinner from "common/Spinner";
import Images from "components/Images";

function App() {
  const dispatch = useDispatch();
  const { photos } = useSelector((s) => s);

  useEffect(() => {
    dispatch(getPhotosRequest());
    axios
      .get(API_END_POINTS.photos)
      .then((res) => dispatch(getPhotosSuccess(res.data)))
      .catch((err) => dispatch(getPhotosFailure(err)));
  }, [dispatch]);

  const [q, setQ] = useState("");

  useEffect(() => {
    dispatch(
      getPhotosSuccess(photos.data?.filter(({ title }) => title.includes(q)))
    );
  }, [q]);

  return (
    <div>
      <h1>Images</h1>
      <input type="text" value={q} onChange={(e) => setQ(e.target.value)} />
      <Images images={photos} />
      {/* {photos.isLoading ? <Spinner /> : <Images images={photos} />} */}
    </div>
  );
}

export default App;
