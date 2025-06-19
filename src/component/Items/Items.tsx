import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Search from "../Search/Search";
import "./Items.css";
import DeletItems from "../DeletItem/DeletItems";
import ButtonItem from "../Button/ButtonItem";

interface Item {
  id: number;
  name: string;
  price: string;
  image_url: string;
}

function Items() {
  const [items, setItems] = useState<Array<Item>>([]);
  const [filteredItems, setFilteredItems] = useState<Array<Item>>([]);

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
        setFilteredItems(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleItemDelete = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
    setFilteredItems(filteredItems.filter((item) => item.id !== id));
  };
  return (
    <div className="px-3">
  <div className="d-flex justify-content-center align-items-center pt-4">
    <Search items={items} setFilteredItems={setFilteredItems} />
  </div>
  <div className="d-flex justify-content-end pt-5">
    <ButtonItem img="" btnText="ADD NEW PRODUCT" to="/dashboard/items/add" />
  </div>

  <div className="row mt-4">
    {filteredItems.map((item, index) => (
      <div key={index} className="col-6 col-md-4 col-lg-3 mb-4">
        <div className="position-relative ima">
          <img src={item.image_url} alt={item.name} className="img-fluid" />
          
          <div className="d-none v">
            <Link
              to={`/dashboard/items/show/${item.id}`}
              className="text-decoration-none text-black pb-4 fw-bold titlt-link"
            >
              <p>{item.name}</p>
            </Link>

            <div className="d-flex gap-2">
              <ButtonItem
                img=""
                btnText="Edit"
                to={`/dashboard/items/edit/${item.id}`}
                className="btn btn-sm d-flex justify-content-center align-items-center text-white fw-medium fs-6 lh-1"
              />
              <DeletItems
                id={item.id}
                onDeleteSuccess={() => handleItemDelete(item.id)}
              />
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  );
}

export default Items;

