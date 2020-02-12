import {
  SEO,
  Tabs,
  BrandsLayout,
  BrandsTitleBanner,
  BrandDashboardCounter,
  AppointmentApparelCard,
  AppointmentSummaryCard,
} from '@components';

const Measurements = () => (
  <>
    <SEO title="Title" description="description" />
    <BrandsLayout>
      <BrandsTitleBanner
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
      <div className="px-5">
        <div className="border-b border-alt-2 py-4 flex flex-wrap">
          <BrandDashboardCounter
            count={15}
            className="w-1/2"
            title="PENDING APPOINTMENTS"
          />
          <BrandDashboardCounter
            count={25}
            className="w-1/2"
            title="TOTAL MEASUREMENTS"
          />
        </div>

        <div className="pt-8">
          <div className="flex justify-between items-end">
            <p className="font-medium">Recently Added Appointments</p>
            <a href="#" className="text-primary font-medium">
              See All
            </a>
          </div>
        </div>

        <div className="flex flex-wrap -mx-2 pb-6">
          <AppointmentApparelCard
            brand="Eleventy"
            name="Olusesan Peter"
            className="px-2 w-1/2"
            imageSrc="/images/apparel1.jpg"
            apparelName="Classic Fit Stretch Plaid Wool Suit"
          />

          <AppointmentApparelCard
            brand="Eleventy"
            name="Olusesan Peter"
            className="px-2 w-1/2"
            imageSrc="/images/apparel2.jpg"
            apparelName="Classic Fit Stretch Plaid Wool Suit"
          />

          <AppointmentApparelCard
            brand="Eleventy"
            name="Olusesan Peter"
            className="px-2 w-1/2"
            imageSrc="/images/apparel3.jpg"
            apparelName="Classic Fit Stretch Plaid Wool Suit"
          />
        </div>

        <div className="border-t border-alt-2 pt-8">
          <Tabs
            tabTitleClass="w-1/2"
            activeTabTitleClass="text-primary"
            contentWrapperClass="flex flex-wrap -mx-2"
          >
            <div label="All Measurements">
              <AppointmentSummaryCard
                time="10:00 am"
                name="Alex Erinle"
                date="12th Sep, 2019"
                className="px-2 w-1/2"
              />
              <AppointmentSummaryCard
                time="10:00 am"
                name="Patrick Divine"
                date="12th Sep, 2019"
                className="px-2 w-1/2"
              />

              <AppointmentSummaryCard
                time="10:00 am"
                name="Peter Davids"
                date="12th Sep, 2019"
                className="px-2 w-1/2"
              />
              <AppointmentSummaryCard
                time="10:00 am"
                name="Daniel Richards"
                date="12th Sep, 2019"
                className="px-2 w-1/2"
              />
            </div>

            <div label="Pending Measurements">
              <AppointmentSummaryCard
                time="10:00 am"
                name="Peter Davids"
                date="12th Sep, 2019"
                className="px-2 w-1/2"
              />
            </div>
          </Tabs>
        </div>
      </div>
    </BrandsLayout>
  </>
);

export default Measurements;
