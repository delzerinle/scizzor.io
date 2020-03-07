import {
  SEO,
  Accordion,
  VirtualCard,
  CustomerTabs,
  OrderItemCard,
  CustomersLayout,
  AppointmentCard,
  MeasurementsSlider,
  CustomersTitleBanner,
  CustomerPaymentInfoForm,
  CustomerAddressBookForm,
  CustomerUpdatePersonalInfoForm,
} from '@components';

const CustomerSettings = () => {
  const labelIcon = (
    <svg
      className="w-4 h-4 stroke-current transform scale-75"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="a">
        <path d="M.7.4c.115 0 .23.044.318.132L7 6.514 12.982.532a.45.45 0 11.636.636l-6.3 6.3a.45.45 0 01-.636 0l-6.3-6.3A.45.45 0 01.7.4z" />
      </mask>
      <path d="M.7.4c.115 0 .23.044.318.132L7 6.514 12.982.532a.45.45 0 11.636.636l-6.3 6.3a.45.45 0 01-.636 0l-6.3-6.3A.45.45 0 01.7.4z" />
      <path
        d="M1.018.532l2.828-2.829L1.018.532zM7 6.514L4.17 9.342 7 12.171l2.828-2.829L7 6.514zM12.982.532l-2.829-2.829L12.982.532zm.636.636L10.79-1.66l2.828 2.828zm-6.3 6.3l2.828 2.829-2.828-2.829zm-.636 0l-2.829 2.829 2.829-2.829zm-6.3-6.3L3.21-1.66.382 1.168zm0-.636L-2.445-2.3l-.002.002L.382.532zM.7 4.4a3.552 3.552 0 01-2.51-1.04l5.656-5.657A4.448 4.448 0 00.7-3.6v8zm-2.51-1.04L4.17 9.342l5.657-5.657-5.982-5.982L-1.81 3.36zM9.828 9.342L15.81 3.36l-5.657-5.657-5.982 5.982 5.657 5.657zM15.81 3.36a3.55 3.55 0 01-5.02 0l5.656-5.657a4.45 4.45 0 00-6.293 0L15.81 3.36zm-5.02 0a3.55 3.55 0 010-5.02l5.656 5.656a4.45 4.45 0 000-6.293L10.79 3.36zm0-5.02l-6.3 6.3 5.656 5.657 6.3-6.3L10.79-1.66zm-6.3 6.3a3.55 3.55 0 015.02 0l-5.657 5.657a4.45 4.45 0 006.293 0L4.49 4.64zm5.02 0l-6.3-6.3-5.657 5.656 6.3 6.3L9.51 4.64zm-6.3-6.3a3.55 3.55 0 010 5.02l-5.657-5.657a4.45 4.45 0 000 6.293L3.21-1.66zm-.002 5.022A3.55 3.55 0 01.7 4.4v-8A4.45 4.45 0 00-2.445-2.3l5.653 5.661z"
        mask="url(#a)"
      />
    </svg>
  );

  const handleUpdateForm = val => {
    console.log(val);
  };

  const handleAddressBookForm = val => {
    console.log(val);
  };

  const handlePaymentInfoForm = val => {
    console.log(val);
  };

  return (
    <>
      <SEO title="Title" description="description" />
      <CustomersLayout>
        <CustomersTitleBanner title="Your Account" />
        <div className="px-5 pt-8 md:px-10">
          <CustomerTabs>
            <div
              label={
                <span className="md:flex md:items-center">
                  <svg
                    className="hidden md:block md:w-6 md:h-6 md:stroke-current md:transform md:scale-75"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.916 14.75H2.25a.833.833 0 00-.833.833v4.167c0 .46.373.833.833.833h6.666c.46 0 .834-.373.834-.833v-4.167a.833.833 0 00-.834-.833zM13.084 20.583h6.666c.46 0 .834-.373.834-.833v-9.167a.833.833 0 00-.834-.833h-6.666a.833.833 0 00-.834.833v9.167c0 .46.373.833.834.833zM13.084 7.25h6.666c.46 0 .834-.373.834-.833V2.25a.833.833 0 00-.834-.833h-6.666a.833.833 0 00-.834.833v4.167c0 .46.373.833.834.833zM8.916 1.417H2.25a.833.833 0 00-.833.833v9.167c0 .46.373.833.833.833h6.666c.46 0 .834-.373.834-.833V2.25a.833.833 0 00-.834-.833z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Overview
                </span>
              }
            >
              <div className="mb-10">
                <h4 className="text-xl">Pending Appointments</h4>
                <div className="md:flex">
                  <AppointmentCard
                    dayCount={5}
                    time="9:00 AM"
                    className="mt-4 md:mt-3 md:w-1/2"
                    date="16/06/2019"
                    address="15 Albion Yard, Whitechapel, London E1 1BW"
                  />
                  <AppointmentCard
                    dayCount={2}
                    time="9:00 AM"
                    className="mt-6 md:mt-3 md:w-1/2 md:ml-10"
                    date="16/06/2019"
                    address="15 Albion Yard, Whitechapel, London E1 1BW"
                  />
                </div>
              </div>

              <h4 className="text-xl mb-10 md:mb-5">Previous Measurements</h4>
              <MeasurementsSlider>
                <div className="h-88">
                  <img
                    className="h-full w-auto mx-auto"
                    src="/images/measurement-front.png"
                    alt="measurements-front"
                  />
                </div>

                <div className="h-88">
                  <img
                    className="h-full w-auto mx-auto"
                    src="/images/measurement-back.png"
                    alt="measurements-front"
                  />
                </div>
              </MeasurementsSlider>

              <button className="btn-xs w-full mt-8 md:w-auto md:mt-6">
                Email Measurements
              </button>
            </div>

            <div
              label={
                <span className="md:flex md:items-center">
                  <svg
                    className="hidden md:block md:w-6 md:h-6 md:stroke-current md:transform md:scale-75"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.666 1.766a.834.834 0 00-.679-.349H6.012a.833.833 0 00-.679.35L1.571 7.032a.833.833 0 00-.154.484V19.75a.833.833 0 00.833.834h17.5a.833.833 0 00.833-.834V7.517a.834.834 0 00-.155-.484l-3.762-5.267zM11 1.417V7.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.668 15.583h-5.834a.417.417 0 00-.416.417v1.666c0 .23.186.417.416.417h5.834c.23 0 .416-.186.416-.417V16a.417.417 0 00-.416-.417zM1.46 7.25h19.08"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Order History
                </span>
              }
            >
              <div className="mb-10">
                <h4 className="text-xl">Your Order History</h4>

                <div className="md:flex md:flex-wrap md:items-stretch md:-mx-2">
                  <OrderItemCard
                    name="Eleventy"
                    orderNumber="397105187"
                    imgSrc="/images/apparel1.jpg"
                    className="mt-4 md:mt-4 md:w-1/3 md:px-2"
                    description=" Classic Fit Stretch Plaid Wool Suit"
                  />
                  <OrderItemCard
                    name="Canali"
                    orderNumber="444675586"
                    imgSrc="/images/apparel2.jpg"
                    className="mt-8 md:mt-4 md:w-1/3 md:px-2"
                    description=" Classic Fit Stretch Plaid Wool Suit"
                  />
                  <OrderItemCard
                    name="Hickey Freeman"
                    orderNumber="279767208"
                    imgSrc="/images/apparel3.jpg"
                    className="mt-8 md:mt-4 md:w-1/3 md:px-2"
                    description=" Classic Fit Stretch Plaid Wool Suit"
                  />
                </div>
              </div>
            </div>

            <div
              label={
                <span className="md:flex md:items-center">
                  <svg
                    className="hidden md:block md:w-6 md:h-6 md:stroke-current md:transform md:scale-75"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.875.625H3.125c-.69 0-1.25.56-1.25 1.25v16.25c0 .69.56 1.25 1.25 1.25h13.75c.69 0 1.25-.56 1.25-1.25V1.875c0-.69-.56-1.25-1.25-1.25z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 10.995a3.425 3.425 0 100-6.85 3.425 3.425 0 000 6.85zM15.625 15.856a6.358 6.358 0 00-11.25 0"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Profile
                </span>
              }
            >
              <div className="mb-10">
                <h4 className="text-xl">Your Profile</h4>
                <p className="text-sm leading-6 mb-5 md:mb-3">
                  Feel free to edit any of your details below so your Scizzor
                  account is totally up to date.
                </p>

                <Accordion
                  isAccordionOpen
                  labelIcon={labelIcon}
                  labelClassName="text-base font-medium"
                >
                  <div label="Personal Information">
                    <hr className="border-alt-1 mt-1" />
                    <div className="pb-5 md:max-w-md">
                      <CustomerUpdatePersonalInfoForm
                        onSubmit={handleUpdateForm}
                      />
                    </div>
                  </div>

                  <div label="Address Book">
                    <hr className="border-alt-1 mt-1" />
                    <div className="pb-5 md:max-w-md">
                      <p className="text-sm font-medium mt-4 mb-2">Address 1</p>
                      <p className="text-sm leading-6">
                        Contact Information (We'll only call if we need
                        assistance delivering your order)
                      </p>
                      <CustomerAddressBookForm
                        onSubmit={handleAddressBookForm}
                      />
                    </div>
                  </div>

                  <div label="Payment Information">
                    <hr className="border-alt-1 mt-2" />
                    <div className="md:max-w-md">
                      <VirtualCard
                        cvv="9964"
                        expiryDate="03/2022"
                        className="mt-6 max-w-sm"
                      />
                      <CustomerPaymentInfoForm
                        onSubmit={handlePaymentInfoForm}
                      />
                    </div>
                  </div>
                </Accordion>
              </div>
            </div>
          </CustomerTabs>
        </div>
      </CustomersLayout>
    </>
  );
};

export default CustomerSettings;
