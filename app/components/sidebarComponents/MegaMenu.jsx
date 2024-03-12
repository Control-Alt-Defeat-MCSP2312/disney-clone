import React, { useState } from 'react';

const MegaMenu = () => {
  const [isOpen, setIsOpen] = useState(null);

  const menuData = [
    {
      category: 'Category 1',
      columns: [
        {
          title: 'Column 1',
          items: ['Item 1', 'Item 2', 'Item 3'],
        },
        {
          title: 'Column 2',
          items: ['Item 4', 'Item 5', 'Item 6'],
        },
      ],
      links: ['Link 1', 'Link 2'],
    },
    {
      category: 'Category 2',
      columns: [
        {
          title: 'Column 1',
          items: ['Item 7', 'Item 8', 'Item 9'],
        },
        {
          title: 'Column 2',
          items: ['Item 10', 'Item 11', 'Item 12'],
        },
      ],
      links: ['Link 3', 'Link 4'],
    },
    // Add more categories as needed
  ];

  const handleToggleMenu = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  const renderMenu = () => {
    return menuData.map((menuItem, index) => (
      <li key={index} className="relative">
        <button
          onClick={() => handleToggleMenu(index)}
          className="uppercase font-semibold text-sm hover:text-blue-500 leading-6 font-avenir relative z-10"
        >
          {menuItem.category}
        </button>
        {isOpen === index && (
          <div className="mega-menu absolute left-1/2 transform -translate-x-1/2 mt-2 w-full max-w-screen-lg p-8 bg-white bg-opacity-90 z-50">
            <div className="flex space-x-8">
              {menuItem.columns.map((column, columnIndex) => (
                <div key={columnIndex} className="mega-column">
                  <h3 className="font-semibold mb-2 text-lg">{column.title}</h3>
                  <ul className="text-base list-none">
                    {column.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="py-1 hover:text-blue-500">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mega-links mt-8">
              {menuItem.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href="#"
                  className="block py-2 hover:text-blue-500"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        )}
      </li>
    ));
  };

  return (
    <nav className="border p-5 mt-18">
      <ul className="flex justify-center items-center font-avenir font-base font-normal w-full">
        {renderMenu()}
      </ul>
    </nav>
  );
};

export default MegaMenu;
