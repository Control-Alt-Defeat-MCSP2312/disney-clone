import { useState } from "react";
import Modal from "./Modal";

export default function Shipping() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      className="w-max bg-gradient-to-r from-teal-100 via-teal-100 to-yellow-100 flex justify-center items-center  pt-12 pb-20 my-8"
      style={{ width: "100%" }}
    >
      <div className="truck-item flex flex-col items-center">
        <img
          src="https://www.disneystore.com/on/demandware.static/-/Sites-shopDisney-Library/default/dw68665c04/icon_value-prop-free-shipping_20220826_v3.svg"
          alt="Shipping Icon"
          style={{ width: "50px", height: "50px" }} // Adjust size of the truck icon
        />
        <p
          className="str-values text-center text-sm" //
          style={{ color: "#002f65", fontSize: "10px", lineHeight: "1.5" }}
        >
          Free Shipping on orders $75 or more! Code: SHIPMAGIC
          <br />
          <span
            onClick={() => setShowModal(true)}
            style={{ textDecoration: "underline", cursor: "pointer" }}
          >
            See Details
          </span>
        </p>
      </div>
      {showModal && <Modal setShowModal={setShowModal} />}
    </div>
  );
}
