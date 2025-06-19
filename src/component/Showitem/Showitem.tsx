import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../BackButton/BackButton";
import Title from "../Title/Title";
import'./Showitem.css'
interface Item {
  id: number;
  name: string;
  price: string;
  image_url: string;
  created_at: string;
  updated_at: string;
  
}
function Showitem() {
     const { id } = useParams(); 
  const [items, setItems] = useState<Array<Item>>([]);
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = () => {
    axios
      .get("https://web-production-3ca4c.up.railway.app/api/items", {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => console.log(err));
  };
  const itemId = Number(id);
  const item = items.find((item) => item.id === itemId);
  if (!item) {
    return
  }
  return (
   <div className="container padbutt">
  <BackButton />
  <Title Title={item.name} classname="" />

  <div className="d-flex justify-content-center">
    <img className="imgshow" src={item.image_url} alt={item.name} />
  </div>

  <div className="d-flex flex-column flex-md-row justify-content-between gap-3">
    <p>
      <span className="font-p">Price:</span>{' '}
      <span className="font-doler">{item.price}$</span>
    </p>
    <p>
      <span className="font-p">created_at:</span>{' '}
      <span className="font-doler">{item.created_at}</span>
    </p>
  </div>

  <div className="d-flex justify-content-center pt-4">
    <p>
      <span className="font-p">updated_at:</span>{' '}
      <span className="font-doler">{item.updated_at}</span>
    </p>
  </div>
</div>

  )
}

export default Showitem