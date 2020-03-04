import {
  SEO,
  CustomerTabs,
  CustomersLayout,
  AppointmentCard,
  MeasurementsSlider,
  CustomersTitleBanner,
} from '@components';

const CustomerSettings = () => {
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
                <h4 className="text-lg">Pending Appointments</h4>
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

              <h4 className="text-lg mb-10 md:mb-5">Previous Measurements</h4>
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
              <p>2</p>
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
              <p>3</p>
            </div>
          </CustomerTabs>
        </div>
      </CustomersLayout>
    </>
  );
};

export default CustomerSettings;
