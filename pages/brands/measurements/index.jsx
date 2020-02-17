import React, { useMemo } from 'react';
import Link from 'next/link';

import {
  SEO,
  Tabs,
  BrandsLayout,
  BrandsTitleBanner,
  BrandDashboardCounter,
  AppointmentApparelCard,
  AppointmentSummaryCard,
  BrandsDesktopTitleBanner,
  AppointmentTable,
} from '@components';

const Measurements = () => {
  const columns = useMemo(
    () => [
      { Header: 'Customer Name', accessor: 'customer_name' },
      { Header: 'Date & Time', accessor: 'date_time' },
      {
        Header: '',
        accessor: 'id',
        Cell: () => (
          <a href="#" className="font-medium text-primary">
            View Measurement
          </a>
        ),
      },
    ],
    []
  );

  const data = [
    {
      id: '1',
      customer_name: 'Alex Erinle',
      date_time: '12th Sep, 2019 at 10:00 am',
    },
    {
      id: '2',
      customer_name: 'Patrick Divine',
      date_time: '12th Sep, 2019 at 10:00 am',
    },
    {
      id: '3',
      customer_name: 'Peter Davies',
      date_time: '12th Sep, 2019 at 10:00 am',
    },
    {
      id: '4',
      customer_name: 'Daniel Richards',
      date_time: '12th Sep, 2019 at 10:00 am',
    },
  ];
  return (
    <>
      <SEO title="Title" description="description" />
      <BrandsLayout>
        <BrandsTitleBanner
          className="md:hidden"
          btnText="View Measurements"
          description={
            <>
              You have{' '}
              <span className="text-red-500">15 Pending Appointments,</span>{' '}
              <br />
              Please attend to them.
            </>
          }
        />
        <BrandsDesktopTitleBanner
          btnText="View Measurements"
          description={
            <>
              You have{' '}
              <span className="text-red-500">15 Pending Appointments</span>,{' '}
              Please attend to them.
            </>
          }
        />
        <div className="px-3 md:px-0 md:pt-5">
          <div className="border-b border-alt-2 py-4 flex flex-wrap">
            <BrandDashboardCounter
              count={15}
              className="w-1/2 md:w-auto md:mr-16"
              title="PENDING APPOINTMENTS"
            />
            <BrandDashboardCounter
              count={25}
              className="w-1/2 md:w-auto"
              title="TOTAL MEASUREMENTS"
            />
          </div>

          <div className="pt-8">
            <div className="flex justify-between items-end md:justify-start md:items-end">
              <p className="font-medium md:mr-6">Recently Added Appointments</p>
              <Link href="/brands/appointments">
                <a className="text-primary font-medium md:text-sm md:pb-1 md:leading-5">
                  See All
                </a>
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap -mx-2 pb-6">
            <AppointmentApparelCard
              brand="Eleventy"
              name="Olusesan Peter"
              className="px-2 w-1/2 md:w-1/3"
              imageSrc="/images/apparel1.jpg"
              apparelName="Classic Fit Stretch Plaid Wool Suit"
            />

            <AppointmentApparelCard
              brand="Eleventy"
              name="Olusesan Peter"
              className="px-2 w-1/2 md:w-1/3"
              imageSrc="/images/apparel2.jpg"
              apparelName="Classic Fit Stretch Plaid Wool Suit"
            />

            <AppointmentApparelCard
              brand="Eleventy"
              name="Olusesan Peter"
              className="px-2 w-1/2 md:w-1/3"
              imageSrc="/images/apparel3.jpg"
              apparelName="Classic Fit Stretch Plaid Wool Suit"
            />
          </div>

          <div className="border-t border-alt-2 pt-8">
            <Tabs
              tabTitleClass="w-1/2 md:font-light md:w-auto md:mr-8"
              activeTabTitleClass="text-primary"
              contentWrapperClass="flex flex-wrap -mx-2"
            >
              <div label="All Measurements">
                <AppointmentSummaryCard
                  time="10:00 am"
                  name="Alex Erinle"
                  date="12th Sep, 2019"
                  className="px-2 w-1/2 md:hidden"
                />
                <AppointmentSummaryCard
                  time="10:00 am"
                  name="Patrick Divine"
                  date="12th Sep, 2019"
                  className="px-2 w-1/2 md:hidden"
                />

                <AppointmentSummaryCard
                  time="10:00 am"
                  name="Peter Davids"
                  date="12th Sep, 2019"
                  className="px-2 w-1/2 md:hidden"
                />
                <AppointmentSummaryCard
                  time="10:00 am"
                  name="Daniel Richards"
                  date="12th Sep, 2019"
                  className="px-2 w-1/2 md:hidden"
                />

                <AppointmentTable
                  data={data}
                  columns={columns}
                  className="hidden md:table"
                />
              </div>

              <div label="Pending Measurements">
                <AppointmentSummaryCard
                  time="10:00 am"
                  name="Peter Davids"
                  date="12th Sep, 2019"
                  className="px-2 w-1/2 md:hidden"
                />
              </div>
            </Tabs>
          </div>
        </div>
      </BrandsLayout>
    </>
  );
};

export default Measurements;
