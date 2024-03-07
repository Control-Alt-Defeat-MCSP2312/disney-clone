export default function Modal({ setShowModal }) {
  function handleCloseModal() {
    console.log("closing modal");
    // setShowModal(true);
  }
  return (
    <div className="fixed inset-0 z-50 overflow-auto flex justify-center items-center">
      {/* Overlay */}
      <div className="bg-black bg-opacity-50 absolute inset-0"></div>

      {/* Modal content */}
      <div className="bg-white w-96 rounded-lg flex flex-col relative">
        <div className="top-section px-4 py-2 border-b border-gray-200 flex justify-between items-center">
          <h1 className="text-lg font-semibold">
            Free Shipping on Orders of $75 or More Online Promotion Restrictions
          </h1>
          <button
            onClick={() => setShowModal(false)}
            className="focus:outline-none"
          >
            &times;
          </button>
        </div>
        <div className="bottom-section px-4 py-2 flex-grow">
          <p className="text-sm">
            Valid through December 31, 2024 (11:59 pm PST) on select, in-stock
            merchandise purchased via phone orders and orders placed online at
            DisneyStore.com. Not valid on purchases made at Disney Store retail
            and outlet locations or Disney Parks and Resorts locations. Free
            Shipping applies to Standard Delivery on orders over $75 sent to a
            single shipment address in the United States. Qualifying purchase
            based on pre-tax, post-discount amount and excludes D23 Memberships,
            gift cards, gift wrap & gift boxes. Additional Shipping & Handling
            applies for select items or shipments to more than one shipment
            address. Merchandise subject to availability. Valid packing slip
            required for returns and exchanges. Offer subject to restrictions
            and change without notice. Void where prohibited.
          </p>
        </div>
      </div>
    </div>
  );
}
