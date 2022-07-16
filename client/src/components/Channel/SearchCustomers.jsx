import React, { useState } from "react";
import createIcon from "../../assets/images/add-white.png";
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
        color: 'var(--index)'
      }}
      spin
    />
);

export default function SearchCustomers() {

    const [customerName, setCustomerName] = useState('');
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);

    const findCustomersOnSearch = async () => {
    } 

  return (
    <>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <p class="modal-title" id="exampleModalLabel" style={{
                fontWeight: 500,
                fontSize: '18px'
              }}>
                Profiles
              </p>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
                {
                    (loading === true) ?
                    <>
                        <Spin indicator={antIcon} />
                        
                    </>
                    :
                    <div>

                    </div>
                }

            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn url-submit-btn"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn url-submit-btn">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      
      <div class="flex">
        <div class="flex">
          <div class="input-group relative flex flex-wrap items-stretch w-full">
            <input
              type="search"
              class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none text-14px"
              placeholder="John Doe"
              aria-label="Search"
              aria-describedby="button-addon2"
              value={customerName}
              onChange={e => setCustomerName(e.target.value)}
            />
            <button
              class="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
              type="button"
              id="button-addon2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"  
              onClick={findCustomersOnSearch}
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                class="w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>
            </button>
          </div>
          &nbsp;
          <button className="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center">
            <img src={createIcon} alt="" width="26px" />
          </button>
        </div>
      </div>
    </>
  );
}
